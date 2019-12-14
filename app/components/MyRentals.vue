<template>
  <Page>
    <ActionBar title="My Rentals">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <ListView for="feed in feeds" @itemTap="onItemTap">
      <v-template>
        <GridLayout columns="*, auto," rows="auto">
          <StackLayout orientation="vertical" ow="0" col="0">
            <Label :text="feed.propertyTitle" class="t-25 labelTitle" />
            <Label :text="feed.estate" class="t-15" />
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
  </Page>
</template>

<script>
import DetailOfItem from "./DetailOfItem";

export default {
  data() {
    return {
      feeds: []
    };
  },

  methods: {
    onItemTap: function(args) {
      console.log("browse detail");

      this.$navigateTo(DetailOfItem, {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedItem: args.item
        }
      });
    }
  },

  async mounted() {
    var response = await fetch(global.rootURL + "/user/myRental", {
      method: "GET",
      credentials: "same-origin"
    });

    if (response.ok) {
      this.feeds = await response.json();

      console.log(JSON.stringify(this.feeds));
    } else {
      console.log(response.statusText);
    }
  }
};
</script>

<style>
</style>