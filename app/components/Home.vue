<template>
  <Page>
    <ActionBar title="Estate Rental App" />
    <StackLayout>
      <BottomNavigation>
        <TabStrip>
          <TabStripItem>
            <Label text="Home"></Label>
            <Image src="res://home"></Image>
          </TabStripItem>
          <TabStripItem>
            <Label text="Estate"></Label>
            <Image src="res://favorites"></Image>
          </TabStripItem>
          <TabStripItem>
            <Label text="Bedrooms"></Label>
            <Image src="res://search"></Image>
          </TabStripItem>
          <TabStripItem>
            <Label text="Account"></Label>
            <Image src="res://browse"></Image>
          </TabStripItem>
        </TabStrip>
        <TabContentItem>
          <ListView for="feed in feeds" backgroundColor="transparent" @itemTap="browseDetail">
            <v-template>
              <StackLayout orientation="vertical" height="365">
                <Image :src="feed.imageURL" class="img-rounded" />
                <Label :text="feed.propertyTitle" class="t-30 labelTitle p-0" />
                <Label :text="feed.estate" class="t-15 p-0" />
                <StackLayout orientation="horizontal" class="p-0">
                  <Label text="Rent: $" class="t-15 p-0" />
                  <Label :text="feed.rent" class="t-15 p-0" />
                </StackLayout>
              </StackLayout>
            </v-template>
          </ListView>
        </TabContentItem>
        <TabContentItem>
          <ListView for="estate in $estates" @itemTap="browseItemsOfEstate">
            <v-template>
              <GridLayout columns="*, auto," rows="auto">
                <Label :text="estate.name" class="t-30 m-t-10 m-b-10" row="0" col="0" />
                <Image
                  src="~/assets/icons8-more-than-100.png"
                  style="height:20; width:20;"
                  row="0"
                  col="1"
                />
              </GridLayout>
            </v-template>
          </ListView>
        </TabContentItem>
        <TabContentItem>
          <ListView for="number in numbers" @itemTap="searchWithBedrooms">
            <v-template>
              <GridLayout columns="*, auto," rows="auto">
                <StackLayout orientation="horizontal" row="0" col="0">
                  <Label text="Bedrooms " class="t-30 m-t-10 m-b-10" />
                  <Label :text="number" class="t-30 m-t-10 m-b-10" />
                </StackLayout>
                <Image
                  src="~/assets/icons8-more-than-100.png"
                  style="height:20; width:20;"
                  row="0"
                  col="1"
                />
              </GridLayout>
            </v-template>
          </ListView>
        </TabContentItem>
        <TabContentItem>
          <StackLayout orientation="vertical">
            <FlexboxLayout>
              <Image src="~/assets/profile.png" width="30%" />
              <StackLayout verticalAlignment="center" horizontalAlignment="center">
                <Label :text="username" class="t-25" width="70%" />
              </StackLayout>
            </FlexboxLayout>
            <ListView for="item in itemsOfTab4" @itemTap="onItemTapForTab4">
              <v-template>
                <GridLayout columns="*, auto," rows="auto">
                  <Label :text="item" class="t-30 m-t-10 m-b-10" row="0" col="0" />
                  <Image
                    src="~/assets/icons8-more-than-100.png"
                    style="height:20; width:20;"
                    row="0"
                    col="1"
                  />
                </GridLayout>
              </v-template>
            </ListView>
          </StackLayout>
        </TabContentItem>
      </BottomNavigation>
    </StackLayout>
  </Page>
</template>

<script>
import ItemsOfEstate from "./ItemsOfEstate"; // Page that shows items of selected estate
import Search from "./Search"; // Page that shows items filtered by number of bedrooms
import Login from "./Login"; // Login page
import DetailOfItem from "./DetailOfItem"; // Page that shows details of certain item
import MyRentals from "./MyRentals"; // Page that shows items co-rented by a client

export default {
  methods: {
    // for tab_Home
    browseDetail: function(args) {
      this.$navigateTo(DetailOfItem, {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedItem: args.item
        }
      });
    },

    // for tab_Estate
    browseItemsOfEstate: function(args) {
      // console.log("Item with index: " + args.index + " tapped");
      // console.log("Product selected: " + args.item);
      this.$navigateTo(ItemsOfEstate, {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedEstate: args.item.name
        }
      });
    },

    // for tab_Bedrooms
    searchWithBedrooms: function(args) {
      // console.log("search with num of bedrooms");
      this.$navigateTo(Search, {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedCondition: args.item
        }
      });
    },

    // for tab_Account
    onItemTapForTab4: async function(args) {
      if (args.item == "Login") {
        // console.log("Product selected: " + args.item);
        this.$navigateTo(Login, {
          transition: {},
          transitionIOS: {},
          transitionAndroid: {},
          props: {
            $delegate: this
          }
        });
      } else if (args.item == "Logoff") {
        var result = await confirm({
          title: "Confirm",
          message: "Sure to logout?",
          okButtonText: "Yes",
          cancelButtonText: "Cancel"
        });

        if (result) {
          var response = await fetch(global.rootURL + "/user/logout", {
            method: "GET",
            credentials: "same-origin"
          });
          if (response.ok) {
            global.isLogined = false;
            alert({
              title: "",
              message: "Logoff successfully",
              okButtonText: "OK"
            });
            this.updateLogin();
          } else {
            alert(response.statusText);
          }
        }
      } else {
        this.$navigateTo(MyRentals, {
          transition: {},
          transitionIOS: {},
          transitionAndroid: {},
          props: {}
        });
      }
    },

    // for updating original page after logining of clients
    updateLogin: function() {
      if (global.isLogined) {
        this.itemsOfTab4 = ["Logoff", "My Rentals"];
        this.username = global.$username;
      } else {
        this.itemsOfTab4 = ["Login"];
        this.username = "Account Name";
      }
    }
  },

  data() {
    return {

      feeds: [], // highlighted items

      numbers: ["<= 2", ">= 3"], //  filter condition of tab_Bedrooms

      itemsOfTab4: ["Login"], // changable

      username: global.$username
    };
  },

  async mounted() {
    global.rootURL = "https://8a811552.ngrok.io"; // global rootUrl connected to the sails.js
    var response = await fetch(global.rootURL, {
      method: "GET",
      credentials: "same-origin"
    });
    if (response.ok) {
      this.feeds = await response.json();
      console.log(JSON.stringify(this.feeds));
    } else {
      alert(response.statusText);
    }
  }
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>