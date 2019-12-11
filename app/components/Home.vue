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
                        <Image src="res://settings"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Bedrooms"></Label>
                        <Image src="res://search"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Account"></Label>
                        <Image src="res://home"></Image>
                    </TabStripItem>
                </TabStrip>
                <TabContentItem class="tabContentItem">
                    <ListView for="feed in feeds"
                        backgroundColor="transparent"
                        @itemTap="browseDetail">
                        <v-template>
                           
                                <StackLayout orientation="vertical" height="365">
                                    <Image :src="feed.imageURL"
                                        class="img-rounded" />
                                    <Label :text="feed.propertyTitle"
                                        class="t-30 labelTitle p-0" />
                                    <Label :text="feed.estate"
                                        class="t-15 p-0" />
                                    <StackLayout orientation="horizontal"
                                        class="p-0">
                                        <Label text="Rent: $"
                                            class="t-15 p-0" />
                                        <Label :text="feed.rent"
                                            class="t-15 p-0" />
                                    </StackLayout>
                                </StackLayout>
                          
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem class="tabContentItem">
                    <ListView for="estate in $estates"
                        @itemTap="browseItemsOfEstate">
                        <v-template>
                            <GridLayout columns="*, auto," rows="auto">
                                <Label :text="estate.name"
                                    class="t-30 m-t-10 m-b-10" row="0"
                                    col="0" />
                                <Image src="~/assets/icons8-more-than-100.png"
                                    style="height:20; width:20;" row="0"
                                    col="1" />
                            </GridLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem class="tabContentItem">
                    <ListView for="number in numbers"
                        @itemTap="searchWithBedrooms">
                        <v-template>
                            <GridLayout columns="*, auto," rows="auto">
                                <StackLayout orientation="horizontal" row="0"
                                    col="0">
                                    <Label text="Bedrooms "
                                        class="t-30 m-t-10 m-b-10" />
                                    <Label :text="number"
                                        class="t-30 m-t-10 m-b-10" />
                                </StackLayout>
                                <Image src="~/assets/icons8-more-than-100.png"
                                    style="height:20; width:20;" row="0"
                                    col="1" />
                            </GridLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem class="tabContentItem">
                    <StackLayout orientation="vertical">
                        <FlexboxLayout>
                            <Image src="~/assets/profile.png" width="30%" />
                            <StackLayout verticalAlignment="center"
                                horizontalAlignment="center">
                                <Label :text="username" class="t-25"
                                    width="70%" />
                            </StackLayout>
                        </FlexboxLayout>
                        <ListView for="item in itemsOfTab4"
                            @itemTap="onItemTapForTab4">
                            <v-template>
                                <GridLayout columns="*, auto," rows="auto">
                                    <Label :text="item"
                                        class="t-30 m-t-10 m-b-10" row="0"
                                        col="0" />
                                    <Image
                                        src="~/assets/icons8-more-than-100.png"
                                        style="height:20; width:20;" row="0"
                                        col="1" />
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
    import ItemsOfEstate from "./ItemsOfEstate";
    import Search from "./Search";
    import Login from "./Login";
    import DetailOfItem from "./DetailOfItem";
    import MyRentals from "./MyRentals";

    export default {
        methods: {
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

            browseItemsOfEstate: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("Product selected: " + args.item);
                this.$navigateTo(ItemsOfEstate, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedEstate: args.item.name
                    }
                });
            },

            searchWithBedrooms: function(args) {
                console.log("search with num of bedrooms");
                this.$navigateTo(Search, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedCondition: args.item
                    }
                });
            },

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
                        var response = await fetch(
                            global.rootURL + "/user/logout", {
                                method: "GET",
                                credentials: "same-origin"
                            }
                        );
                        if (response.ok) {
                            global.isLogined = false;
                            alert("Logoff successfully");
                            this.updateLogin();
                        } else {
                            console.log(response.statusText);
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
                rentals: [{
                        propertyTitle: "Description",
                        imageURL: "https://cdn-hmlet.s3-ap-southeast-1.amazonaws.com/buildings/Hmlet_Foo_Ming_1.jpg",
                        estate: "Festival City",
                        bedrooms: "2",
                        grossArea: "800",
                        expectedTenants: "2",
                        rent: "15000",
                        box: "highLighted"
                    },
                    {
                        propertyTitle: "Description",
                        imageURL: "https://cdn-hmlet.s3-ap-southeast-1.amazonaws.com/drive/68bb2a740af71ee7b4588c5b8416f63295c620d8.jpeg",
                        estate: "City One Shatin",
                        bedrooms: "2",
                        grossArea: "250",
                        expectedTenants: "2",
                        rent: "28000",
                        box: "highLighted"
                    }
                ],

                feeds: [],

                numbers: ["<= 2", ">= 3"],

                itemsOfTab4: ["Login"],

                username: global.$username
            };
        },

        async mounted() {
            global.rootURL = "https://fafdcbb6.ngrok.io";
            var response = await fetch(global.rootURL, {
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

<style scoped>
    .tabContentItem {
        background: white;
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>