"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
class LoginPageRoutingModule {
}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) { return new (t || LoginPageRoutingModule)(); };
LoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageRoutingModule });
LoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_myAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1784);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_auth___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth/ */ 1577);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);


















function LoginPage_ion_select_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-select-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", country_r5.dialCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", country_r5.dialCode, " ", country_r5.name, " ");
  }
}

function LoginPage_ion_text_27_ion_text_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " * Please enter the Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_text_27_ion_text_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " * Please enter a valid Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_text_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LoginPage_ion_text_27_ion_text_1_Template, 2, 0, "ion-text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginPage_ion_text_27_ion_text_2_Template, 2, 0, "ion-text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.form.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.form.get("phone").hasError("minlength") && !ctx_r1.form.get("phone").hasError("required"));
  }
}

function LoginPage_ion_label_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 27);
  }
}

function LoginPage_ion_progress_bar_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-progress-bar", 28);
  }
}

class LoginPage {
  constructor(modalCtrl, auth, router, nav, authY, avatar, overlay, menuCtrl, platform) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.menuCtrl = menuCtrl;
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
    this.slideOpts = {
      initialSlide: 0,
      speed: 300,
      autoplay: true
    };

    if (!(0,_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.isPlatform)('capacitor')) {
      _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.initialize();
    }

    let country = 'Nigeria';
    this.CountryCode = '+234';
    this.numberT = '+234';
    platform.ready().then(() => {
      if (platform.width() >= 768) {
        this.myCase = true;
      } else {
        this.myCase = false;
      }
    });
  }

  HideSplash() {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__.SplashScreen.hide();
    })();
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.menuCtrl.enable(false);

      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(10)]
        })
      }); // this.router.navigateByUrl('details');
      // this.show();
    })();
  }

  countryCodeChange($event) {
    console.log($event.detail.value.toString());
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  Show() {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setOverlaysWebView({
        overlay: false
      }); // StatusBar.setStyle({ style: Style.Light });
    })();
  }

  Hide() {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setOverlaysWebView({
        overlay: true
      }); // StatusBar.setStyle({ style: Style.Light });
    })();
  }

  signIn() {
    var _this2 = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this2.form.valid) {
          _this2.form.markAllAsTouched();

          return;
        }

        console.log(_this2.form.value);
        _this2.approve2 = true;
        const response = yield _this2.auth.signInWithPhoneNumber(_this2.numberT + _this2.form.value.phone);
        _this2.approve2 = false;
        const options = {
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent,
          componentProps: {
            phone: _this2.form.value.phone,
            countryCode: _this2.numberT
          },
          swipeToClose: true
        };

        const modal = _this2.modalCtrl.create(options);

        (yield modal).present();
        const data = (yield modal).onWillDismiss();

        _this2.authY.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            _this2.avatar.getUserProfile(user).subscribe( /*#__PURE__*/function () {
              var _ref2 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_myAdmin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                if (!data) {
                  _this2.router.navigateByUrl('details');

                  _this2.overlay.hideLoader();
                } else {
                  _this2.router.navigateByUrl('home');

                  _this2.overlay.hideLoader();
                }
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());

        console.log(data);
      } catch (e) {
        console.log(e);

        _this2.overlay.showAlert('Error', JSON.stringify(e));

        _this2.approve2 = false;
      }
    })();
  }

}

LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_fire_auth___WEBPACK_IMPORTED_MODULE_14__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_7__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_8__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform));
};

LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 32,
  vars: 10,
  consts: [[1, "ion-no-border", 3, "translucent"], ["lines", "none"], [1, "ion-padding"], ["color", "primary", 1, "ion-text-center"], ["pager", "true", 3, "options"], ["src", "../assets/imgs/main.svg"], ["src", "../assets/imgs/main1.svg"], ["src", "../assets/imgs/main2.svg"], [1, "ion-no-border"], [1, "ion-no-padding"], [1, "ion-no-padding", "kush"], [1, "ion-margin-horizontal"], [1, "ion-padding", 3, "formGroup"], ["id", "sign-in-button"], [1, "ion-margin-vertical"], ["slot", "start", 3, "placeholder", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "phone", "placeholder", "Mobile Number", "type", "tel", "clearInput", "", "minlength", "10", "maxlength", "10", 3, "ionFocus", "ionBlur"], ["class", "ion-text-center", 4, "ngIf"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 3, "disabled", "click"], [4, "ngIf"], ["color", "light", "slot", "end", "name", "arrow-forward", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], [3, "value"], [1, "ion-text-center"], ["class", "error", "color", "danger", 4, "ngIf"], ["color", "danger", 1, "error"], ["color", "light", "slot", "end", "name", "arrow-forward"], ["color", "light", "type", "indeterminate"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-list", 1)(2, "ion-list-header", 2)(3, "ion-label", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "PANA ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "MAnage With Confidence and integrity");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-slides", 4)(9, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "ion-img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ion-img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "ion-img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-footer", 8)(17, "ion-row", 9)(18, "ion-list", 10)(19, "ion-item-group", 11)(20, "form", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 14)(23, "ion-item")(24, "ion-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function LoginPage_Template_ion_select_ionChange_24_listener($event) {
        return ctx.countryCodeChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, LoginPage_ion_select_option_25_Template, 2, 3, "ion-select-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "ion-input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionFocus", function LoginPage_Template_ion_input_ionFocus_26_listener() {
        return ctx.Show();
      })("ionBlur", function LoginPage_Template_ion_input_ionBlur_26_listener() {
        return ctx.Hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, LoginPage_ion_text_27_Template, 3, 2, "ion-text", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "ion-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_28_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, LoginPage_ion_label_29_Template, 2, 0, "ion-label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, LoginPage_ion_icon_30_Template, 1, 0, "ion-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, LoginPage_ion_progress_bar_31_Template, 1, 0, "ion-progress-bar", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.slideOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", ctx.CountryCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.CountryJson);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.form.get("phone").valid && ctx.form.get("phone").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.form.get("phone").valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName],
  styles: ["@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  background: transparent;\n  display: block;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 0.75em !important;\n}\nion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\nion-img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: auto;\n}\nion-slides[_ngcontent-%COMP%] {\n  height: 440px;\n}\n.kush[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\nion-select[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  --placeholder-opacity: 1;\n  width: 30%;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 500;\n}\n.pm-awesome-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0lPTklDJTIwUFJPSkVDVFMvbXlBZG1pbi9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBQ0Usd0JBQUE7RUNBSjtFREVFO0lBQ0UsNkJBQUE7RUNBSjtBQUNGO0FER0U7RUFDRTtJQUNFLHdCQUFBO0VDREo7RURHRTtJQUNFLDRCQUFBO0VDREo7QUFDRjtBRElBO0VBQ0Msb0VBQUE7QUNGRDtBREtBO0VBQ0MscUVBQUE7QUNGRDtBRE1JO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FDSFI7QURJUTtFQUNJLG1CQUFBO0FDRlo7QURTZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDUHBCO0FEV1k7RUFDSSxpQkFBQTtBQ1RoQjtBRGFRO0VBQ0ksNEJBQUE7QUNYWjtBRGlCQTtFQUVFLFlBQUE7QUNmRjtBRGtCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDZkY7QURrQkE7RUFDRSxhQUFBO0FDZkY7QURrQkE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsK0JBQUE7RUFDQSx3QkFBQTtFQUNDLFVBQUE7RUFDRCx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2ZGO0FEa0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNmSjtBRG1CQTtFQUVFLHVEQUFBO0FDakJGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gICAgfVxuICB9XG4gIFxuLnNsaWRlLWxlZnQge1xuXHRhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbi5zbGlkZS1yaWdodCB7XG5cdGFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMi41dmg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogOHZoO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taW5wdXQsIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi10b29sYmFyLCBpb24taGVhZGVye1xuIFxuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbmlvbi1pbWd7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDQ0MHB4O1xufVxuXG4ua3VzaHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1zZWxlY3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICB3aWR0aDogMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucG0tYXdlc29tZS1kaXZpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG4uc2hhZG93LXRvcFxue1xuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xufVxuIiwiQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgfVxufVxuLnNsaWRlLWxlZnQge1xuICBhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLnNsaWRlLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG5pb24tZm9vdGVyIGlvbi1yb3cge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWZhYi1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLWlucHV0LCBpb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLXRleHQge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCAuZXJyb3Ige1xuICBmb250LXNpemU6IDAuNzVlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciwgaW9uLWhlYWRlciB7XG4gIGhlaWdodDogNDRweDtcbn1cblxuaW9uLWltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDQ0MHB4O1xufVxuXG4ua3VzaCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucG0tYXdlc29tZS1kaXZpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNoYWRvdy10b3Age1xuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xufSJdfQ== */"]
});

/***/ }),

/***/ 5579:
/*!*************************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/definitions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 1784:
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAuth": () => (/* binding */ GoogleAuth)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5579);

const GoogleAuth = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('GoogleAuth', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_codetrix-studio_capacitor-google-auth_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4707)).then(m => new m.GoogleAuthWeb())
});



/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map