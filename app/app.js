import Vue from 'nativescript-vue';

import Home from './components/Home';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

Vue.prototype.$estates = [{
    name: "Festival City",
    location: {
        latitude: "22.3692",
        longitude: "114.1743",
    }
},
{
    name: "Tin Ma Court",
    location: {
        latitude: "22.3429",
        longitude: "114.1871"
    }

},
{
    name: "City One Shatin",
    location: {
        latitude: "22.3863",
        longitude: "114.2038",
    }

}];

global.$username = 'Account Name';

global.isLogined = false;

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();