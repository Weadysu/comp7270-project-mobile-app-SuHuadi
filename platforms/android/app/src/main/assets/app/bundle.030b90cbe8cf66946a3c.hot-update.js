webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Location.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["estateName"],

  data() {
    // console.log(1);
    var estate = this.$estates.filter(item => item.name == this.estateName)[0];
    console.log(estate);
    var apiUrl = "https://leafletapi.mtchoy.now.sh/index.html?lat=" + estate.location.latitude + "&lng=" + estate.location.longitude + "&zoom=17&markerLat=" + estate.location.latitude + "&markerLng=" + estate.location.longitude + "&markerTitle=" + estate.name + "&locate=true";
    return {
      apiUrl: apiUrl
    };
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2NhdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0EsdUJBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpQkFDQSxxREFDQSx3QkFEQSxHQUVBLE9BRkEsR0FHQSx5QkFIQSxHQUlBLHFCQUpBLEdBS0Esd0JBTEEsR0FNQSxhQU5BLEdBT0EseUJBUEEsR0FRQSxlQVJBLEdBU0EsV0FUQSxHQVVBLGNBWEE7QUFhQTtBQUNBO0FBREE7QUFHQTs7QUF2QkEsRyIsImZpbGUiOiJidW5kbGUuMDMwYjkwY2JlOGNmNjY5NDZhM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhciB0aXRsZT5cbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XCJHbyBiYWNrXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCIgQHRhcD1cIiRuYXZpZ2F0ZUJhY2tcIiAvPlxuICAgIDwvQWN0aW9uQmFyPlxuICAgIDxXZWJWaWV3IDpzcmM9XCJhcGlVcmxcIiAvPlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiZXN0YXRlTmFtZVwiXSxcbiAgZGF0YSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygxKTtcbiAgICB2YXIgZXN0YXRlID0gdGhpcy4kZXN0YXRlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgPT0gdGhpcy5lc3RhdGVOYW1lKVswXTtcbiAgICBjb25zb2xlLmxvZyhlc3RhdGUpO1xuXG4gICAgdmFyIGFwaVVybCA9XG4gICAgICBcImh0dHBzOi8vbGVhZmxldGFwaS5tdGNob3kubm93LnNoL2luZGV4Lmh0bWw/bGF0PVwiICtcbiAgICAgIGVzdGF0ZS5sb2NhdGlvbi5sYXRpdHVkZSArXG4gICAgICBcIiZsbmc9XCIgK1xuICAgICAgZXN0YXRlLmxvY2F0aW9uLmxvbmdpdHVkZSArXG4gICAgICBcIiZ6b29tPTE3Jm1hcmtlckxhdD1cIiArXG4gICAgICBlc3RhdGUubG9jYXRpb24ubGF0aXR1ZGUgK1xuICAgICAgXCImbWFya2VyTG5nPVwiICtcbiAgICAgIGVzdGF0ZS5sb2NhdGlvbi5sb25naXR1ZGUgK1xuICAgICAgXCImbWFya2VyVGl0bGU9XCIgK1xuICAgICAgZXN0YXRlLm5hbWUgK1xuICAgICAgXCImbG9jYXRlPXRydWVcIjtcblxuICAgIHJldHVybiB7XG4gICAgICBhcGlVcmw6IGFwaVVybFxuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZT5cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==