<template>
  <Page>
    <ActionBar title>
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <StackLayout orientation="vertical">
      <Image :src="selectedItem.imageURL" />
      <StackLayout orientation="vertical" class="m-10">
        <Label :text="selectedItem.propertyTitle" class="h1 labelTitle" />
        <StackLayout orientation="horizontal" class>
          <Label text="Estate: " class="t-20" />
          <Label :text="selectedItem.estate" class="t-20" />
          <Label text=",   Bedrooms: " class="t-20" />
          <Label :text="selectedItem.bedrooms" class="t-20" />
        </StackLayout>
        <StackLayout orientation="horizontal" class>
          <Label text="Rent: $" class="t-20" />
          <Label :text="selectedItem.rent" class="t-20" />
          <Label text=",   Tenants: " class="t-20" />
          <Label :text="selectedItem.expectedTenants" class="t-20" />
          <Label text=",   Area: " class="t-20" />
          <Label :text="selectedItem.grossArea" class="t-20" />
        </StackLayout>
        <FlexboxLayout>
          <Button :text="RorM" @tap="corentOrMoveOut" style="width:100%;" class="btn m-t-20" />
          <Button text="Address" @tap="browseAddress" style="width:100%; " class="btn m-t-20" />
        </FlexboxLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import Location from "./Location";

export default {
  props: ["selectedItem"],
  data() {
    return {
      RorM: ""
    };
  },

  methods: {
    browseAddress: function() {
      console.log("location");
      this.$navigateTo(Location, {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          estateName: this.selectedItem.estate
        }
      });
    },

    // Called by corentOrMoveOut function
    coRent: async function() {
      var searchURL =
        global.rootURL +
        "/user/" +
        this.selectedItem.id +
        "/rentedBy/add/" +
        global.$userId;

      var response = await fetch(searchURL, {
        method: "POST",
        credentials: "same-origin"
      });
      if (response.ok) {
        var data = await response.json();
        if (data.isFull) {
          alert({
            title: "",
            message: "Already Full ",
            okButtonText: "OK"
          });
        } else {
          alert({
            title: "",
            message: "Move-in successfully ",
            okButtonText: "OK "
          }).then(() => {
            this.RorM = "Move-out";
          });
        }
      } else {
        alert(response.statusText);
      }
    },

    // Called by corentOrMoveOut function
    moveout: async function() {
      var searchURL =
        global.rootURL +
        "/user/" +
        this.selectedItem.id +
        "/rentedBy/remove/" +
        global.$userId;

      var response = await fetch(searchURL, {
        method: "DELETE",
        credentials: "same-origin"
      });
      if (response.ok) {
        alert({
          title: "",
          message: "Move-out successfully ",
          okButtonText: "OK"
        }).then(() => {
          this.RorM = "Move-in";
        });
      } else {
        console.log(response.statusText);
      }
    },

    corentOrMoveOut: function() {
      if (global.isLogined) {
        if (this.RorM == "Move-in") {
          this.coRent();
        } else if (this.RorM == "Move-out") {
          this.moveout();
        }
      } else {
        alert({
          title: "",
          message: "Please login first",
          okButtonText: "OK"
        });
      }
    }
  },

  async mounted() {
    // Show corresponding text in Move-in button
    if (global.isLogined) {
      var url = global.rootURL + "/rental/" + this.selectedItem.id;

      var response = await fetch(url, {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        var data = await response.json();
        this.RorM = data.isRented ? "Move-out" : "Move-in";
      } else {
        alert(response.statusText);
      }
    } else {
      this.RorM = "Move-in";
    }
  }
};
</script>

<style scoped>
.btn {
  height: 50;
  background-color: rgb(35, 91, 212);
  border-radius: 5;
  font-size: 20;
  color: rgb(255, 255, 255);
  font-weight: 400;
}
</style>