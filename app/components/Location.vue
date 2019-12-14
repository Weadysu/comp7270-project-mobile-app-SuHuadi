<template>
    <Page>
        <ActionBar title="">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back"
                @tap="$navigateBack" />
        </ActionBar>
        <WebView :src="apiUrl"/>
    </Page>
</template>

<script>
    export default {
        props: ["estateName"],
        data() {
            // console.log(1);
            var estate = this.$estates.filter(
                item => item.name == this.estateName
            )[0];
            console.log(estate);

            var apiUrl =
                "https://leafletapi.mtchoy.now.sh/index.html?lat=" +
                estate.location.latitude +
                "&lng=" +
                estate.location.longitude +
                "&zoom=17&markerLat=" +
                estate.location.latitude +
                "&markerLng=" +
                estate.location.longitude +
                "&markerTitle=" +
                estate.name +
                "&locate=true";

            return {
                apiUrl: apiUrl
            };
        }
    };
</script>
<style>
</style>