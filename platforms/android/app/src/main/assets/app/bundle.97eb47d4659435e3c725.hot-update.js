webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MyRentals.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _DetailOfItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DetailOfItem.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data() {
    return {
      feeds: []
    };
  },

  methods: {
    onItemTap: function onItemTap(args) {
      console.log("browse detail");
      this.$navigateTo(_DetailOfItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedItem: args.item
        }
      });
    }
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var response = yield fetch(global.rootURL + "/user/myRental", {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        _this.feeds = yield response.json();
        console.log(JSON.stringify(_this.feeds));
      } else {
        console.log(response.statusText);
      }
    })();
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NeVJlbnRhbHMudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHNCQURBO0FBRUEseUJBRkE7QUFHQSw2QkFIQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFaQSxHQVBBOztBQXNCQTtBQUFBOztBQUFBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7O0FBS0E7QUFDQTtBQUVBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQVpBO0FBYUE7O0FBbkNBLEciLCJmaWxlIjoiYnVuZGxlLjk3ZWI0N2Q0NjU5NDM1ZTNjNzI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBSZW50YWxzXCI+XG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVwiR28gYmFja1wiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIEB0YXA9XCIkbmF2aWdhdGVCYWNrXCIgLz5cbiAgICA8L0FjdGlvbkJhcj5cblxuICAgIDxMaXN0VmlldyBmb3I9XCJmZWVkIGluIGZlZWRzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIj5cbiAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwgYXV0byxcIiByb3dzPVwiYXV0b1wiPlxuICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgb3c9XCIwXCIgY29sPVwiMFwiPlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZmVlZC5wcm9wZXJ0eVRpdGxlXCIgY2xhc3M9XCJ0LTI1IGxhYmVsVGl0bGVcIiAvPlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZmVlZC5lc3RhdGVcIiBjbGFzcz1cInQtMTVcIiAvPlxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pY29uczgtbW9yZS10aGFuLTEwMC5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6MjA7IHdpZHRoOjIwO1wiXG4gICAgICAgICAgICByb3c9XCIwXCJcbiAgICAgICAgICAgIGNvbD1cIjFcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICA8L0xpc3RWaWV3PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IERldGFpbE9mSXRlbSBmcm9tIFwiLi9EZXRhaWxPZkl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmZWVkczogW11cbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnJvd3NlIGRldGFpbFwiKTtcblxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhEZXRhaWxPZkl0ZW0sIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBhcmdzLml0ZW1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgKyBcIi91c2VyL215UmVudGFsXCIsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgdGhpcy5mZWVkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mZWVkcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9