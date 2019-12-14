webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ItemsOfEstate.vue?vue&type=script&lang=js&":
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
  props: ["selectedEstate"],

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
      var searchURL = global.rootURL + "/rental/searchForApp?estate=" + _this.selectedEstate;
      var response = yield fetch(searchURL, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9JdGVtc09mRXN0YXRlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBRUE7QUFDQSwyQkFEQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7O0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxzQkFEQTtBQUVBLHlCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBWkEsR0FSQTs7QUF1QkE7QUFBQTs7QUFBQTtBQUNBLHNCQUNBLHNFQURBO0FBR0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQWJBO0FBY0E7O0FBckNBLEciLCJmaWxlIjoiYnVuZGxlLmMyODgyODJkYzA0YzNlMjc5NzcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXIgdGl0bGU+XG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVwiR28gYmFja1wiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIEB0YXA9XCIkbmF2aWdhdGVCYWNrXCIgLz5cbiAgICA8L0FjdGlvbkJhcj5cblxuICAgIDxMaXN0VmlldyBmb3I9XCJmZWVkIGluIGZlZWRzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIj5cbiAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwgYXV0byxcIiByb3dzPVwiYXV0b1wiPlxuICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgb3c9XCIwXCIgY29sPVwiMFwiPlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZmVlZC5wcm9wZXJ0eVRpdGxlXCIgY2xhc3M9XCJ0LTI1IGxhYmVsVGl0bGVcIiAvPlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZmVlZC5lc3RhdGVcIiBjbGFzcz1cInQtMTVcIiAvPlxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pY29uczgtbW9yZS10aGFuLTEwMC5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6MjA7IHdpZHRoOjIwO1wiXG4gICAgICAgICAgICByb3c9XCIwXCJcbiAgICAgICAgICAgIGNvbD1cIjFcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICA8L0xpc3RWaWV3PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IERldGFpbE9mSXRlbSBmcm9tIFwiLi9EZXRhaWxPZkl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wic2VsZWN0ZWRFc3RhdGVcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZlZWRzOiBbXVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uSXRlbVRhcDogZnVuY3Rpb24oYXJncykge1xuICAgICAgY29uc29sZS5sb2coXCJicm93c2UgZGV0YWlsXCIpO1xuXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKERldGFpbE9mSXRlbSwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IGFyZ3MuaXRlbVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICB2YXIgc2VhcmNoVVJMID1cbiAgICAgIGdsb2JhbC5yb290VVJMICsgXCIvcmVudGFsL3NlYXJjaEZvckFwcD9lc3RhdGU9XCIgKyB0aGlzLnNlbGVjdGVkRXN0YXRlO1xuXG4gICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2VhcmNoVVJMLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgfSk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICB0aGlzLmZlZWRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mZWVkcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9