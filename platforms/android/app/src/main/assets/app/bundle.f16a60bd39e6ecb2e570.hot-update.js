webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["$delegate"],

  data() {
    return {
      isLoggingIn: true,
      user: {
        email: "foo@foo.com",
        password: "foo"
      }
    };
  },

  methods: {
    submit: function () {
      var _submit = _asyncToGenerator(function* () {
        console.log("try to login");
        var url = global.rootURL + "/user/login";
        var formData = new FormData();

        if (this.username) {
          formData.append("username", this.username);
        }

        if (this.password) {
          formData.append("password", this.password);
        }

        var response = yield fetch(url, {
          method: "POST",
          credentials: "same-origin",
          body: formData
        });
        console.log("hahaha");

        if (response.ok) {
          var data = yield response.json();
          global.$userId = data.userId;
          alert({
            title: "",
            message: data.message,
            okButtonText: "OK"
          }).then(() => {
            console.log(1);
            global.isLogined = true;
            global.$username = this.username;
            this.$delegate.updateLogin();
            console.log(2);
            this.$navigateBack();
          });
        } else if (response.status == 401) {
          var data = yield response.text();
          alert({
            title: "",
            message: data,
            okButtonText: "OK"
          });
        } else {
          alert({
            title: "",
            message: response.statusText,
            okButtonText: "OK"
          });
        }
      });

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n  align-items: center;\n  flex-direction: column;\n}\n.form[data-v-c27482c4] {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n}\n.input-field[data-v-c27482c4] {\n  margin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n  font-size: 18;\n}\n.input-field .input[data-v-c27482c4] {\n  font-size: 30;\n}\n.btn-primary[data-v-c27482c4] {\n  height: 50;\n  margin: 30 5 15 5;\n  background-color: rgb(35, 91, 212);\n  border-radius: 5;\n  font-size: 20;\n  font-weight: 600;\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MDE0NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBO0FBQ0Esc0JBREE7O0FBRUE7QUFDQTtBQUNBLHVCQURBO0FBRUE7QUFDQSw0QkFEQTtBQUVBO0FBRkE7QUFGQTtBQU9BLEdBVkE7O0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSx3QkFEQTtBQUVBLG9DQUZBO0FBR0E7QUFIQTtBQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxpQ0FGQTtBQUdBO0FBSEEsYUFJQSxJQUpBLENBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQVhBO0FBWUEsU0FmQSxNQWVBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEseUJBRkE7QUFHQTtBQUhBO0FBS0EsU0FQQSxNQU9BO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHdDQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0EsT0E3Q0E7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEQTtBQVpBLEc7Ozs7Ozs7O0FDdkNBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsNkJBQTZCLHdCQUF3QiwyQkFBMkIsR0FBRywwQkFBMEIsb0JBQW9CLHFCQUFxQixpQkFBaUIsR0FBRyxpQ0FBaUMsc0JBQXNCLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLHdDQUF3QyxrQkFBa0IsR0FBRyxpQ0FBaUMsZUFBZSxzQkFBc0IsdUNBQXVDLHFCQUFxQixrQkFBa0IscUJBQXFCLEdBQUc7O0FBRXBoQjs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyw4QkFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLHlDQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixnREFBZ0Q7QUFDL0UsU0FBUztBQUNUIiwiZmlsZSI6ImJ1bmRsZS5mMTZhNjBiZDM5ZTZlY2IyZTU3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8QWN0aW9uQmFyIHRpdGxlPlxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cIkdvIGJhY2tcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiBAdGFwPVwiJG5hdmlnYXRlQmFja1wiIC8+XG4gICAgPC9BY3Rpb25CYXI+XG4gICAgPEZsZXhib3hMYXlvdXQ+XG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXG4gICAgICAgICAgICBoaW50PVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgbWFyZ2luQm90dG9tPVwiMjVcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdMb2cgb2ZmJ1wiXG4gICAgICAgICAgQHRhcD1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3M9XCJidG4tcHJpbWFyeSBtLXQtMjBcIlxuICAgICAgICAvPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCIkZGVsZWdhdGVcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgdXNlcjoge1xuICAgICAgICBlbWFpbDogXCJmb29AZm9vLmNvbVwiLFxuICAgICAgICBwYXNzd29yZDogXCJmb29cIlxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHN1Ym1pdDogYXN5bmMgZnVuY3Rpb24gc3VibWl0KCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0cnkgdG8gbG9naW5cIik7XG4gICAgICB2YXIgdXJsID0gZ2xvYmFsLnJvb3RVUkwgKyBcIi91c2VyL2xvZ2luXCI7XG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGlmICh0aGlzLnVzZXJuYW1lKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJuYW1lXCIsIHRoaXMudXNlcm5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFzc3dvcmQpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGFzc3dvcmRcIiwgdGhpcy5wYXNzd29yZCk7XG4gICAgICB9XG4gICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJoYWhhaGFcIik7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGdsb2JhbC4kdXNlcklkID0gZGF0YS51c2VySWQ7XG4gICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgICAgZ2xvYmFsLmlzTG9naW5lZCA9IHRydWU7XG4gICAgICAgICAgZ2xvYmFsLiR1c2VybmFtZSA9IHRoaXMudXNlcm5hbWU7XG4gICAgICAgICAgdGhpcy4kZGVsZWdhdGUudXBkYXRlTG9naW4oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygyKTtcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICBtZXNzYWdlOiBkYXRhLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoe1xuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucGFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDMwO1xuICBtYXJnaW4tcmlnaHQ6IDMwO1xuICBmbGV4LWdyb3c6IDI7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDI1O1xufVxuXG4uaW5wdXQge1xuICBmb250LXNpemU6IDE4O1xufVxuXG4uaW5wdXQtZmllbGQgLmlucHV0IHtcbiAgZm9udC1zaXplOiAzMDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgaGVpZ2h0OiA1MDtcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgOTEsIDIxMik7XG4gIGJvcmRlci1yYWRpdXM6IDU7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm1bZGF0YS12LWMyNzQ4MmM0XSB7XFxuICBtYXJnaW4tbGVmdDogMzA7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgZmxleC1ncm93OiAyO1xcbn1cXG4uaW5wdXQtZmllbGRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTtcXG59XFxuLmlucHV0W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgZm9udC1zaXplOiAxODtcXG59XFxuLmlucHV0LWZpZWxkIC5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gIGZvbnQtc2l6ZTogMzA7XFxufVxcbi5idG4tcHJpbWFyeVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gIGhlaWdodDogNTA7XFxuICBtYXJnaW46IDMwIDUgMTUgNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgOTEsIDIxMik7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=