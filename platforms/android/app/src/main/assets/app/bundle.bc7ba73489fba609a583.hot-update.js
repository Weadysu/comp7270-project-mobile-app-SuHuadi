webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DetailOfItem.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Location.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectedItem"],

  data() {
    return {
      RorM: ""
    };
  },

  methods: {
    browseAddress: function browseAddress() {
      console.log("location");
      this.$navigateTo(_Location__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          estateName: this.selectedItem.estate
        }
      });
    },
    coRent: function () {
      var _coRent = _asyncToGenerator(function* () {
        var searchURL = global.rootURL + "/user/" + this.selectedItem.id + "/rentedBy/add/" + global.$userId;
        var response = yield fetch(searchURL, {
          method: "POST",
          credentials: "same-origin"
        });

        if (response.ok) {
          var data = yield response.json();

          if (data.isFull) {
            alert({
              title: "",
              message: "Already Full ",
              okButtonText: "OK"
            });
          } else {
            alert({
              title: "",
              message: "Co-Rent successfully ",
              okButtonText: "OK "
            }).then(() => {
              this.RorM = "Move-out";
            });
          }
        } else {
          alert(response.statusText);
        }
      });

      function coRent() {
        return _coRent.apply(this, arguments);
      }

      return coRent;
    }(),
    moveout: function () {
      var _moveout = _asyncToGenerator(function* () {
        var searchURL = global.rootURL + "/user/" + this.selectedItem.id + "/rentedBy/remove/" + global.$userId;
        var response = yield fetch(searchURL, {
          method: "DELETE",
          credentials: "same-origin"
        });

        if (response.ok) {
          alert({
            title: "",
            message: "Move-out successfully ",
            okButtonText: "OK"
          }).then(() => {
            this.RorM = "Co-Rent";
          });
        } else {
          console.log(response.statusText);
        }
      });

      function moveout() {
        return _moveout.apply(this, arguments);
      }

      return moveout;
    }(),
    corentOrMoveOut: function corentOrMoveOut() {
      if (global.isLogined) {
        if (this.RorM == "Co-Rent") {
          this.coRent();
        } else if (this.RorM == "Move-out") {
          this.moveout();
        }
      } else {
        alert("Please login first");
      }
    }
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (global.isLogined) {
        var url = global.rootURL + "/rental/" + _this.selectedItem.id;
        var response = yield fetch(url, {
          method: "GET",
          credentials: "same-origin"
        });

        if (response.ok) {
          var data = yield response.json();
          _this.RorM = data.isRented ? "Move-out" : "Co-Rent";
        } else {
          alert(response.statusText);
        }
      } else {
        _this.RorM = "Co-Rent";
      }
    })();
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/DetailOfItem.vue?vue&type=style&index=0&id=2ac69696&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn[data-v-2ac69696] {\n  height: 50;\n  background-color: rgb(35, 91, 212);\n  border-radius: 5;\n  font-size: 20;\n  color: rgb(255, 255, 255);\n  font-weight: 400;\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/DetailOfItem.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DetailOfItem.vue?vue&type=template&id=2ac69696&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "" } },
        [
          _c("NavigationButton", {
            attrs: { text: "Go back", "android.systemIcon": "ic_menu_back" },
            on: { tap: _vm.$navigateBack }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { attrs: { orientation: "vertical" } },
        [
          _c("Image", { attrs: { src: _vm.selectedItem.imageURL } }),
          _c(
            "StackLayout",
            { staticClass: "m-10", attrs: { orientation: "vertical" } },
            [
              _c("Label", {
                staticClass: "h1 labelTitle",
                attrs: { text: _vm.selectedItem.propertyTitle }
              }),
              _c(
                "StackLayout",
                { attrs: { orientation: "horizontal" } },
                [
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: "Estate: " }
                  }),
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedItem.estate }
                  }),
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: ",   Bedrooms: " }
                  }),
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedItem.bedrooms }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { orientation: "horizontal" } },
                [
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: "Rent: $" }
                  }),
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedItem.rent }
                  }),
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: ",   Tenants: " }
                  }),
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedItem.expectedTenants }
                  }),
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: ",   Area: " }
                  }),
                  _c("Label", {
                    staticClass: "t-20",
                    attrs: { text: _vm.selectedItem.grossArea }
                  })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                [
                  _c("Button", {
                    staticClass: "btn m-t-20",
                    staticStyle: { width: "100%" },
                    attrs: { text: _vm.RorM },
                    on: { tap: _vm.corentOrMoveOut }
                  }),
                  _c("Button", {
                    staticClass: "btn m-t-20",
                    staticStyle: { width: "100%" },
                    attrs: { text: "Address" },
                    on: { tap: _vm.browseAddress }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9EZXRhaWxPZkl0ZW0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGV0YWlsT2ZJdGVtLnZ1ZT9iOGMzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGV0YWlsT2ZJdGVtLnZ1ZT9mNzMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBRUE7QUFDQSx5QkFEQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHlCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQVFBLEtBWEE7QUFhQTtBQUFBO0FBQ0Esd0JBQ0EsaUJBQ0EsUUFEQSxHQUVBLG9CQUZBLEdBR0EsZ0JBSEEsR0FJQSxjQUxBO0FBT0E7QUFDQSx3QkFEQTtBQUVBO0FBRkE7O0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxzQ0FGQTtBQUdBO0FBSEE7QUFLQSxXQU5BLE1BTUE7QUFDQTtBQUNBLHVCQURBO0FBRUEsOENBRkE7QUFHQTtBQUhBLGVBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQSxhQU5BO0FBT0E7QUFDQSxTQWpCQSxNQWlCQTtBQUNBO0FBQ0E7QUFDQSxPQWhDQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxPQWJBO0FBK0NBO0FBQUE7QUFDQSx3QkFDQSxpQkFDQSxRQURBLEdBRUEsb0JBRkEsR0FHQSxtQkFIQSxHQUlBLGNBTEE7QUFPQTtBQUNBLDBCQURBO0FBRUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0EscUJBREE7QUFFQSw2Q0FGQTtBQUdBO0FBSEEsYUFJQSxJQUpBLENBSUE7QUFDQTtBQUNBLFdBTkE7QUFPQSxTQVJBLE1BUUE7QUFDQTtBQUNBO0FBQ0EsT0F2QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0EvQ0E7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBbEZBLEdBUkE7O0FBNkZBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQSx1QkFEQTtBQUVBO0FBRkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLE9BZEEsTUFjQTtBQUNBO0FBQ0E7QUFqQkE7QUFrQkE7O0FBL0dBLEc7Ozs7Ozs7O0FDbkNBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsNEJBQTRCLGVBQWUsdUNBQXVDLHFCQUFxQixrQkFBa0IsOEJBQThCLHFCQUFxQixHQUFHOztBQUV0TTs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyw4QkFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLHlDQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQix1REFBdUQ7QUFDdEYsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEVBQUU7QUFDaEM7QUFDQTtBQUNBLG9CQUFvQix3REFBd0Q7QUFDNUUsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLDBCQUEwQixFQUFFO0FBQzlDO0FBQ0EsdUJBQXVCLFNBQVMsaUNBQWlDLEVBQUU7QUFDbkU7QUFDQTtBQUNBLGFBQWEsOEJBQThCLDBCQUEwQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQixTQUFTLDRCQUE0QixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLDRCQUE0QixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnQkFBZ0I7QUFDbEQsNEJBQTRCLGlCQUFpQjtBQUM3Qyx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDRCQUE0QixrQkFBa0I7QUFDOUMseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmJjN2JhNzM0ODlmYmE2MDlhNTgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXIgdGl0bGU+XG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVwiR28gYmFja1wiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIEB0YXA9XCIkbmF2aWdhdGVCYWNrXCIgLz5cbiAgICA8L0FjdGlvbkJhcj5cbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgPEltYWdlIDpzcmM9XCJzZWxlY3RlZEl0ZW0uaW1hZ2VVUkxcIiAvPlxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBjbGFzcz1cIm0tMTBcIj5cbiAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRJdGVtLnByb3BlcnR5VGl0bGVcIiBjbGFzcz1cImgxIGxhYmVsVGl0bGVcIiAvPlxuICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJFc3RhdGU6IFwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRJdGVtLmVzdGF0ZVwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCIsICAgQmVkcm9vbXM6IFwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRJdGVtLmJlZHJvb21zXCIgY2xhc3M9XCJ0LTIwXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGNsYXNzPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUmVudDogJFwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRJdGVtLnJlbnRcIiBjbGFzcz1cInQtMjBcIiAvPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiLCAgIFRlbmFudHM6IFwiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRJdGVtLmV4cGVjdGVkVGVuYW50c1wiIGNsYXNzPVwidC0yMFwiIC8+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCIsICAgQXJlYTogXCIgY2xhc3M9XCJ0LTIwXCIgLz5cbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzZWxlY3RlZEl0ZW0uZ3Jvc3NBcmVhXCIgY2xhc3M9XCJ0LTIwXCIgLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgPEJ1dHRvbiA6dGV4dD1cIlJvck1cIiBAdGFwPVwiY29yZW50T3JNb3ZlT3V0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIG0tdC0yMFwiIC8+XG4gICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkcmVzc1wiIEB0YXA9XCJicm93c2VBZGRyZXNzXCIgc3R5bGU9XCJ3aWR0aDoxMDAlOyBcIiBjbGFzcz1cImJ0biBtLXQtMjBcIiAvPlxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vTG9jYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wic2VsZWN0ZWRJdGVtXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBSb3JNOiBcIlwiXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYnJvd3NlQWRkcmVzczogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxvY2F0aW9uXCIpO1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2NhdGlvbiwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXG4gICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBlc3RhdGVOYW1lOiB0aGlzLnNlbGVjdGVkSXRlbS5lc3RhdGVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNvUmVudDogYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VhcmNoVVJMID1cbiAgICAgICAgZ2xvYmFsLnJvb3RVUkwgK1xuICAgICAgICBcIi91c2VyL1wiICtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uaWQgK1xuICAgICAgICBcIi9yZW50ZWRCeS9hZGQvXCIgK1xuICAgICAgICBnbG9iYWwuJHVzZXJJZDtcblxuICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2VhcmNoVVJMLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5pc0Z1bGwpIHtcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWxyZWFkeSBGdWxsIFwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ28tUmVudCBzdWNjZXNzZnVsbHkgXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0sgXCJcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUm9yTSA9IFwiTW92ZS1vdXRcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdmVvdXQ6IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlYXJjaFVSTCA9XG4gICAgICAgIGdsb2JhbC5yb290VVJMICtcbiAgICAgICAgXCIvdXNlci9cIiArXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmlkICtcbiAgICAgICAgXCIvcmVudGVkQnkvcmVtb3ZlL1wiICtcbiAgICAgICAgZ2xvYmFsLiR1c2VySWQ7XG5cbiAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNlYXJjaFVSTCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIk1vdmUtb3V0IHN1Y2Nlc3NmdWxseSBcIixcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLlJvck0gPSBcIkNvLVJlbnRcIjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29yZW50T3JNb3ZlT3V0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChnbG9iYWwuaXNMb2dpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLlJvck0gPT0gXCJDby1SZW50XCIpIHtcbiAgICAgICAgICB0aGlzLmNvUmVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuUm9yTSA9PSBcIk1vdmUtb3V0XCIpIHtcbiAgICAgICAgICB0aGlzLm1vdmVvdXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgbG9naW4gZmlyc3RcIik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgaWYgKGdsb2JhbC5pc0xvZ2luZWQpIHtcbiAgICAgIHZhciB1cmwgPSBnbG9iYWwucm9vdFVSTCArIFwiL3JlbnRhbC9cIiArIHRoaXMuc2VsZWN0ZWRJdGVtLmlkO1xuXG4gICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB0aGlzLlJvck0gPSBkYXRhLmlzUmVudGVkID8gXCJNb3ZlLW91dFwiIDogXCJDby1SZW50XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5Sb3JNID0gXCJDby1SZW50XCI7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uYnRuIHtcbiAgaGVpZ2h0OiA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCA5MSwgMjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNTtcbiAgZm9udC1zaXplOiAyMDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuW2RhdGEtdi0yYWM2OTY5Nl0ge1xcbiAgaGVpZ2h0OiA1MDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgOTEsIDIxMik7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvRGV0YWlsT2ZJdGVtLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJHbyBiYWNrXCIsIFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLiRuYXZpZ2F0ZUJhY2sgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnNlbGVjdGVkSXRlbS5pbWFnZVVSTCB9IH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtLTEwXCIsIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMSBsYWJlbFRpdGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkSXRlbS5wcm9wZXJ0eVRpdGxlIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJFc3RhdGU6IFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkSXRlbS5lc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiwgICBCZWRyb29tczogXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2VsZWN0ZWRJdGVtLmJlZHJvb21zIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSZW50OiAkXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2VsZWN0ZWRJdGVtLnJlbnQgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiwgICBUZW5hbnRzOiBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5zZWxlY3RlZEl0ZW0uZXhwZWN0ZWRUZW5hbnRzIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIsICAgQXJlYTogXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uc2VsZWN0ZWRJdGVtLmdyb3NzQXJlYSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBtLXQtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5Sb3JNIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNvcmVudE9yTW92ZU91dCB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYnJvd3NlQWRkcmVzcyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==