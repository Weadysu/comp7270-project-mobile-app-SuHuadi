webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _ItemsOfEstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ItemsOfEstate.vue");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Search.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _DetailOfItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/DetailOfItem.vue");
/* harmony import */ var _MyRentals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/MyRentals.vue");
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
  methods: {
    browseDetail: function browseDetail(args) {
      this.$navigateTo(_DetailOfItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedItem: args.item
        }
      });
    },
    browseItemsOfEstate: function browseItemsOfEstate(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Product selected: " + args.item);
      this.$navigateTo(_ItemsOfEstate__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedEstate: args.item.name
        }
      });
    },
    searchWithBedrooms: function searchWithBedrooms(args) {
      console.log("search with num of bedrooms");
      this.$navigateTo(_Search__WEBPACK_IMPORTED_MODULE_1__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedCondition: args.item
        }
      });
    },
    onItemTapForTab4: function () {
      var _onItemTapForTab = _asyncToGenerator(function* (args) {
        if (args.item == "Login") {
          // console.log("Product selected: " + args.item);
          this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
            transition: {},
            transitionIOS: {},
            transitionAndroid: {},
            props: {
              $delegate: this
            }
          });
        } else if (args.item == "Logoff") {
          var result = yield confirm({
            title: "Confirm",
            message: "Sure to logout?",
            okButtonText: "Yes",
            cancelButtonText: "Cancel"
          });

          if (result) {
            var response = yield fetch(global.rootURL + "/user/logout", {
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
          this.$navigateTo(_MyRentals__WEBPACK_IMPORTED_MODULE_4__["default"], {
            transition: {},
            transitionIOS: {},
            transitionAndroid: {},
            props: {}
          });
        }
      });

      function onItemTapForTab4(_x) {
        return _onItemTapForTab.apply(this, arguments);
      }

      return onItemTapForTab4;
    }(),
    updateLogin: function updateLogin() {
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
      //   rentals: [
      //     {
      //       propertyTitle: "Description",
      //       imageURL:
      //         "https://cdn-hmlet.s3-ap-southeast-1.amazonaws.com/buildings/Hmlet_Foo_Ming_1.jpg",
      //       estate: "Festival City",
      //       bedrooms: "2",
      //       grossArea: "800",
      //       expectedTenants: "2",
      //       rent: "15000",
      //       box: "highLighted"
      //     },
      //     {
      //       propertyTitle: "Description",
      //       imageURL:
      //         "https://cdn-hmlet.s3-ap-southeast-1.amazonaws.com/drive/68bb2a740af71ee7b4588c5b8416f63295c620d8.jpeg",
      //       estate: "City One Shatin",
      //       bedrooms: "2",
      //       grossArea: "250",
      //       expectedTenants: "2",
      //       rent: "28000",
      //       box: "highLighted"
      //     }
      //   ],
      feeds: [],
      numbers: ["<= 2", ">= 3"],
      itemsOfTab4: ["Login"],
      username: global.$username
    };
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      global.rootURL = "https://8a811552.ngrok.io";
      var response = yield fetch(global.rootURL, {
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

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-67410f3a] {\n  vertical-align: center;\n  font-size: 20;\n  margin: 15;\n}\n.description-label[data-v-67410f3a] {\n  margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzJkMWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHlCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQVFBLEtBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEseUJBRkE7QUFHQSw2QkFIQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBUUEsS0F2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx5QkFGQTtBQUdBLDZCQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFRQSxLQW5DQTtBQXFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSw2QkFGQTtBQUdBLGlDQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFRQSxTQVZBLE1BVUE7QUFDQTtBQUNBLDRCQURBO0FBRUEsc0NBRkE7QUFHQSwrQkFIQTtBQUlBO0FBSkE7O0FBT0E7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLDhDQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0EsYUFSQSxNQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F6QkEsTUF5QkE7QUFDQTtBQUNBLDBCQURBO0FBRUEsNkJBRkE7QUFHQSxpQ0FIQTtBQUlBO0FBSkE7QUFNQTtBQUNBLE9BNUNBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLE9BckNBO0FBbUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRkEsR0FEQTs7QUErRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGVBMUJBO0FBNEJBLCtCQTVCQTtBQThCQSw0QkE5QkE7QUFnQ0E7QUFoQ0E7QUFrQ0EsR0FsSUE7O0FBb0lBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFYQTtBQVlBOztBQWhKQSxHOzs7Ozs7OztBQzFHQSx5RUFBMkIsbUJBQU8sQ0FBQyw0Q0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLG1DQUFtQywyQkFBMkIsa0JBQWtCLGVBQWUsR0FBRyx1Q0FBdUMsc0JBQXNCLEdBQUc7O0FBRXpMOztBQUVBLHdCQUF3QixtQkFBTyxDQUFDLDhCQUE4QjtBQUM5RCxJQUFJLG1CQUFPLENBQUMseUNBQXlDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLCtDQUErQztBQUM5RSxTQUFTO0FBQ1QiLCJmaWxlIjoiYnVuZGxlLjZhZmI1ZjFkMThmNzhmMDk5MTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJFc3RhdGUgUmVudGFsIEFwcFwiIC8+XG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEJvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgIDxUYWJTdHJpcD5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9ob21lXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJFc3RhdGVcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL2Zhdm9yaXRlc1wiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQmVkcm9vbXNcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NlYXJjaFwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQWNjb3VudFwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vYnJvd3NlXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgPC9UYWJTdHJpcD5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJmZWVkIGluIGZlZWRzXCIgYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIiBAaXRlbVRhcD1cImJyb3dzZURldGFpbFwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiMzY1XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJmZWVkLmltYWdlVVJMXCIgY2xhc3M9XCJpbWctcm91bmRlZFwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZmVlZC5wcm9wZXJ0eVRpdGxlXCIgY2xhc3M9XCJ0LTMwIGxhYmVsVGl0bGUgcC0wXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJmZWVkLmVzdGF0ZVwiIGNsYXNzPVwidC0xNSBwLTBcIiAvPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cInAtMFwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJSZW50OiAkXCIgY2xhc3M9XCJ0LTE1IHAtMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJmZWVkLnJlbnRcIiBjbGFzcz1cInQtMTUgcC0wXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiZXN0YXRlIGluICRlc3RhdGVzXCIgQGl0ZW1UYXA9XCJicm93c2VJdGVtc09mRXN0YXRlXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosIGF1dG8sXCIgcm93cz1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJlc3RhdGUubmFtZVwiIGNsYXNzPVwidC0zMCBtLXQtMTAgbS1iLTEwXCIgcm93PVwiMFwiIGNvbD1cIjBcIiAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwifi9hc3NldHMvaWNvbnM4LW1vcmUtdGhhbi0xMDAucG5nXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OjIwOyB3aWR0aDoyMDtcIlxuICAgICAgICAgICAgICAgICAgcm93PVwiMFwiXG4gICAgICAgICAgICAgICAgICBjb2w9XCIxXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJudW1iZXIgaW4gbnVtYmVyc1wiIEBpdGVtVGFwPVwic2VhcmNoV2l0aEJlZHJvb21zXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosIGF1dG8sXCIgcm93cz1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgcm93PVwiMFwiIGNvbD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQmVkcm9vbXMgXCIgY2xhc3M9XCJ0LTMwIG0tdC0xMCBtLWItMTBcIiAvPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibnVtYmVyXCIgY2xhc3M9XCJ0LTMwIG0tdC0xMCBtLWItMTBcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pY29uczgtbW9yZS10aGFuLTEwMC5wbmdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6MjA7IHdpZHRoOjIwO1wiXG4gICAgICAgICAgICAgICAgICByb3c9XCIwXCJcbiAgICAgICAgICAgICAgICAgIGNvbD1cIjFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9hc3NldHMvcHJvZmlsZS5wbmdcIiB3aWR0aD1cIjMwJVwiIC8+XG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VybmFtZVwiIGNsYXNzPVwidC0yNVwiIHdpZHRoPVwiNzAlXCIgLz5cbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJpdGVtIGluIGl0ZW1zT2ZUYWI0XCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBGb3JUYWI0XCI+XG4gICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqLCBhdXRvLFwiIHJvd3M9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtXCIgY2xhc3M9XCJ0LTMwIG0tdC0xMCBtLWItMTBcIiByb3c9XCIwXCIgY29sPVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwifi9hc3NldHMvaWNvbnM4LW1vcmUtdGhhbi0xMDAucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6MjA7IHdpZHRoOjIwO1wiXG4gICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIlxuICAgICAgICAgICAgICAgICAgICBjb2w9XCIxXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJdGVtc09mRXN0YXRlIGZyb20gXCIuL0l0ZW1zT2ZFc3RhdGVcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcbmltcG9ydCBEZXRhaWxPZkl0ZW0gZnJvbSBcIi4vRGV0YWlsT2ZJdGVtXCI7XG5pbXBvcnQgTXlSZW50YWxzIGZyb20gXCIuL015UmVudGFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBicm93c2VEZXRhaWw6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRGV0YWlsT2ZJdGVtLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogYXJncy5pdGVtXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBicm93c2VJdGVtc09mRXN0YXRlOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IHNlbGVjdGVkOiBcIiArIGFyZ3MuaXRlbSk7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1zT2ZFc3RhdGUsIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2VsZWN0ZWRFc3RhdGU6IGFyZ3MuaXRlbS5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzZWFyY2hXaXRoQmVkcm9vbXM6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoIHdpdGggbnVtIG9mIGJlZHJvb21zXCIpO1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhTZWFyY2gsIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2VsZWN0ZWRDb25kaXRpb246IGFyZ3MuaXRlbVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25JdGVtVGFwRm9yVGFiNDogYXN5bmMgZnVuY3Rpb24oYXJncykge1xuICAgICAgaWYgKGFyZ3MuaXRlbSA9PSBcIkxvZ2luXCIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQcm9kdWN0IHNlbGVjdGVkOiBcIiArIGFyZ3MuaXRlbSk7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICRkZWxlZ2F0ZTogdGhpc1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MuaXRlbSA9PSBcIkxvZ29mZlwiKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBjb25maXJtKHtcbiAgICAgICAgICB0aXRsZTogXCJDb25maXJtXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJTdXJlIHRvIGxvZ291dD9cIixcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgKyBcIi91c2VyL2xvZ291dFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBnbG9iYWwuaXNMb2dpbmVkID0gZmFsc2U7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxvZ29mZiBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2dpbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTXlSZW50YWxzLCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgIHByb3BzOiB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlTG9naW46IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGdsb2JhbC5pc0xvZ2luZWQpIHtcbiAgICAgICAgdGhpcy5pdGVtc09mVGFiNCA9IFtcIkxvZ29mZlwiLCBcIk15IFJlbnRhbHNcIl07XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBnbG9iYWwuJHVzZXJuYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pdGVtc09mVGFiNCA9IFtcIkxvZ2luXCJdO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gXCJBY2NvdW50IE5hbWVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgIC8vICAgcmVudGFsczogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgcHJvcGVydHlUaXRsZTogXCJEZXNjcmlwdGlvblwiLFxuICAgIC8vICAgICAgIGltYWdlVVJMOlxuICAgIC8vICAgICAgICAgXCJodHRwczovL2Nkbi1obWxldC5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2J1aWxkaW5ncy9IbWxldF9Gb29fTWluZ18xLmpwZ1wiLFxuICAgIC8vICAgICAgIGVzdGF0ZTogXCJGZXN0aXZhbCBDaXR5XCIsXG4gICAgLy8gICAgICAgYmVkcm9vbXM6IFwiMlwiLFxuICAgIC8vICAgICAgIGdyb3NzQXJlYTogXCI4MDBcIixcbiAgICAvLyAgICAgICBleHBlY3RlZFRlbmFudHM6IFwiMlwiLFxuICAgIC8vICAgICAgIHJlbnQ6IFwiMTUwMDBcIixcbiAgICAvLyAgICAgICBib3g6IFwiaGlnaExpZ2h0ZWRcIlxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgcHJvcGVydHlUaXRsZTogXCJEZXNjcmlwdGlvblwiLFxuICAgIC8vICAgICAgIGltYWdlVVJMOlxuICAgIC8vICAgICAgICAgXCJodHRwczovL2Nkbi1obWxldC5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2RyaXZlLzY4YmIyYTc0MGFmNzFlZTdiNDU4OGM1Yjg0MTZmNjMyOTVjNjIwZDguanBlZ1wiLFxuICAgIC8vICAgICAgIGVzdGF0ZTogXCJDaXR5IE9uZSBTaGF0aW5cIixcbiAgICAvLyAgICAgICBiZWRyb29tczogXCIyXCIsXG4gICAgLy8gICAgICAgZ3Jvc3NBcmVhOiBcIjI1MFwiLFxuICAgIC8vICAgICAgIGV4cGVjdGVkVGVuYW50czogXCIyXCIsXG4gICAgLy8gICAgICAgcmVudDogXCIyODAwMFwiLFxuICAgIC8vICAgICAgIGJveDogXCJoaWdoTGlnaHRlZFwiXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF0sXG5cbiAgICAgIGZlZWRzOiBbXSxcblxuICAgICAgbnVtYmVyczogW1wiPD0gMlwiLCBcIj49IDNcIl0sXG5cbiAgICAgIGl0ZW1zT2ZUYWI0OiBbXCJMb2dpblwiXSxcblxuICAgICAgdXNlcm5hbWU6IGdsb2JhbC4kdXNlcm5hbWVcbiAgICB9O1xuICB9LFxuXG4gIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgZ2xvYmFsLnJvb3RVUkwgPSBcImh0dHBzOi8vOGE4MTE1NTIubmdyb2suaW9cIjtcbiAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnbG9iYWwucm9vdFVSTCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgIH0pO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgdGhpcy5mZWVkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZmVlZHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZS1wYW5lbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIG1hcmdpbjogMTU7XG59XG5cbi5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1O1xufVxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi02NzQxMGYzYV0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTY3NDEwZjNhXSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0hvbWUudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iXSwic291cmNlUm9vdCI6IiJ9