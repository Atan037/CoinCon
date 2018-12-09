(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _body_expense_expense_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/expense/expense.component */ "./src/app/body/expense/expense.component.ts");
/* harmony import */ var _body_income_income_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/income/income.component */ "./src/app/body/income/income.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: '', redirectTo: '/expenses', pathMatch: 'full' },
    { path: 'expenses', component: _body_expense_expense_component__WEBPACK_IMPORTED_MODULE_2__["ExpenseComponent"] },
    { path: 'income', component: _body_income_income_component__WEBPACK_IMPORTED_MODULE_3__["IncomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full'},
//   { path: 'home', component: HomeComponent},
//    { path: 'service', component: ServicesComponent },
//    { path: 'about', component: AboutComponent },
//    { path: 'guide', component: GuideComponent },
//   { path: 'dm', component: DaoMasterComponent , children: [
//     { path: 'status', component: StatusComponent },
//     { path: 'charities', component: SelectCharityComponent, children: [
//       { path: ':id', component: CharityDetailComponent },
//     ] },
//     { path: 'donate', component: SpecifyDonationComponent, children: [
//       { path: ':id', component: CharityDetailComponent }
//     ] },
//     { path: 'setup', component: SetupCharitiesComponent }
//   ] }
// ];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\n  <app-body></app-body>\n</app-main-nav>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'coincon';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _body_expense_expense_create_expense_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./body/expense/expense-create/expense-create.component */ "./src/app/body/expense/expense-create/expense-create.component.ts");
/* harmony import */ var _body_expense_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body/expense/expense-list/expense-list.component */ "./src/app/body/expense/expense-list/expense-list.component.ts");
/* harmony import */ var _body_expense_expense_list_expense_detail_expense_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./body/expense/expense-list/expense-detail/expense-detail.component */ "./src/app/body/expense/expense-list/expense-detail/expense-detail.component.ts");
/* harmony import */ var _body_expense_expense_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/expense/expense.component */ "./src/app/body/expense/expense.component.ts");
/* harmony import */ var _body_income_income_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./body/income/income.component */ "./src/app/body/income/income.component.ts");
/* harmony import */ var _body_income_income_create_income_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./body/income/income-create/income-create.component */ "./src/app/body/income/income-create/income-create.component.ts");
/* harmony import */ var _body_income_income_list_income_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./body/income/income-list/income-list.component */ "./src/app/body/income/income-list/income-list.component.ts");
/* harmony import */ var _body_income_income_list_income_detail_income_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./body/income/income-list/income-detail/income-detail.component */ "./src/app/body/income/income-list/income-detail/income-detail.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _body_expense_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./body/expense.service */ "./src/app/body/expense.service.ts");
/* harmony import */ var _body_income_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./body/income.service */ "./src/app/body/income.service.ts");
/* harmony import */ var _body_category_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./body/category.service */ "./src/app/body/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _body_expense_expense_create_expense_create_component__WEBPACK_IMPORTED_MODULE_9__["ExpenseCreateComponent"],
                _body_expense_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_10__["ExpenseListComponent"],
                _body_expense_expense_list_expense_detail_expense_detail_component__WEBPACK_IMPORTED_MODULE_11__["ExpenseDetailComponent"],
                _body_expense_expense_component__WEBPACK_IMPORTED_MODULE_12__["ExpenseComponent"],
                _body_income_income_component__WEBPACK_IMPORTED_MODULE_13__["IncomeComponent"],
                _body_income_income_create_income_create_component__WEBPACK_IMPORTED_MODULE_14__["IncomeCreateComponent"],
                _body_income_income_list_income_list_component__WEBPACK_IMPORTED_MODULE_15__["IncomeListComponent"],
                _body_income_income_list_income_detail_income_detail_component__WEBPACK_IMPORTED_MODULE_16__["IncomeDetailComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_17__["MainNavComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_18__["BodyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
            ],
            providers: [
                _body_expense_service__WEBPACK_IMPORTED_MODULE_19__["ExpenseService"],
                _body_income_service__WEBPACK_IMPORTED_MODULE_20__["IncomeService"],
                _body_category_service__WEBPACK_IMPORTED_MODULE_21__["CategoryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 750px;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n  </mat-card-header>\n  <mat-card-content>\n    <router-outlet></router-outlet>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/body/category.service.ts":
/*!******************************************!*\
  !*** ./src/app/body/category.service.ts ***!
  \******************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryService = /** @class */ (function () {
    function CategoryService() {
        this.categories = [
            {
                name: 'Leisure Activities',
                subCategory: [
                    'Cinema',
                    'Club Contribution',
                    'Celebration',
                    'Presents',
                    'Other'
                ]
            }
        ];
    }
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/body/expense.service.ts":
/*!*****************************************!*\
  !*** ./src/app/body/expense.service.ts ***!
  \*****************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
// const apiUrl = 'http://localhost/3000/api/expenses';
var apiUrl = 'api/expenses';
var ExpenseService = /** @class */ (function () {
    function ExpenseService(http) {
        this.http = http;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            expenseDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            subCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            paymentMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            timestamp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Date.now())
        });
    }
    ExpenseService.prototype.initializeFormGroup = function () {
        this.form.setValue({
            $key: null,
            amount: '',
            expenseDescription: '',
            category: '',
            subCategory: '',
            paymentMethod: '',
            timestamp: Date.now()
        });
    };
    ExpenseService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ExpenseService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ExpenseService.prototype.getExpenses = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExpenseService.prototype.getExpense = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExpenseService.prototype.postExpenses = function (data) {
        return this.http
            .post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExpenseService.prototype.updateExpense = function (data) {
        return this.http
            .put(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExpenseService.prototype.deleteExpense = function (id) {
        var url = apiUrl + "/" + id;
        return this.http
            .delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExpenseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ExpenseService);
    return ExpenseService;
}());



/***/ }),

/***/ "./src/app/body/expense/expense-create/expense-create.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/body/expense/expense-create/expense-create.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-top: 10px;\n  max-width: 120px;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  max-width: 100%;\n}\n\n.marginRight {\n  margin-right: 30px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9leHBlbnNlL2V4cGVuc2UtY3JlYXRlL2V4cGVuc2UtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvZXhwZW5zZS9leHBlbnNlLWNyZWF0ZS9leHBlbnNlLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5tYXJnaW5SaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/body/expense/expense-create/expense-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/body/expense/expense-create/expense-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"expenseService.form\" (submit)=\"onSubmit()\">\n  <div class=\"example-container\">\n    <mat-form-field>\n      <input formControlName=\"amount\" matInput type=\"number\" placeholder=\"€\" />\n      <mat-error>Expense amount is missing</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea\n        formControlName=\"expenseDescription\"\n        matInput\n        placeholder=\"Describtion\"\n      ></textarea>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select formControlName=\"category\" placeholder=\"Category\">\n        <mat-option\n          *ngFor=\"let category of categoryService.categories; let i = index\"\n          value=\"{{ category.name }}\"\n          (click)=\"selectedI(i)\"\n          ngDefaultControl>\n          {{ category.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"categorySelected\">\n      <mat-select formControlName=\"subCategory\" placeholder=\"Sub-Category\">\n        <mat-option\n          *ngFor=\"let subCategory of categoryService.categories[selectedCategoryIndex].subCategory; let i = index\"\n          value=\"{{ subCategory }}\"\n          ngDefaultControl>\n          {{ subCategory }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Payment method:</label> <br />\n\n      <mat-radio-group formControlName=\"paymentMethod\">\n        <mat-radio-button\n          class=\"example-margin marginRight\"\n          color=\"primary\"\n          value=\"cash\"\n        >\n          Cash\n        </mat-radio-button>\n\n        <mat-radio-button class=\"example-margin\" value=\"card\" color=\"primary\">\n          Bank Card\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      type=\"submit\"\n      [disabled]=\"expenseService.form.invalid\"\n    >\n      ADD EXPENSE\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/body/expense/expense-create/expense-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/body/expense/expense-create/expense-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExpenseCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseCreateComponent", function() { return ExpenseCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _expense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../expense.service */ "./src/app/body/expense.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category.service */ "./src/app/body/category.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpenseCreateComponent = /** @class */ (function () {
    function ExpenseCreateComponent(expenseService, categoryService, snackBar) {
        this.expenseService = expenseService;
        this.categoryService = categoryService;
        this.snackBar = snackBar;
        this.categorySelected = false;
        this.selectedCategoryIndex = 0;
        this.cofig = {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        };
    }
    ExpenseCreateComponent.prototype.ngOnInit = function () { };
    ExpenseCreateComponent.prototype.selectedI = function (categoryIndex) {
        this.selectedCategoryIndex = categoryIndex;
        this.categorySelected = true;
    };
    ExpenseCreateComponent.prototype.onSubmit = function () {
        console.log('Submited');
        this.onSuccess('Expense created successfully');
    };
    ExpenseCreateComponent.prototype.onSuccess = function (msg) {
        this.snackBar.open(msg, '', this.cofig);
    };
    ExpenseCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-create',
            template: __webpack_require__(/*! ./expense-create.component.html */ "./src/app/body/expense/expense-create/expense-create.component.html"),
            styles: [__webpack_require__(/*! ./expense-create.component.css */ "./src/app/body/expense/expense-create/expense-create.component.css")]
        }),
        __metadata("design:paramtypes", [_expense_service__WEBPACK_IMPORTED_MODULE_1__["ExpenseService"],
            _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ExpenseCreateComponent);
    return ExpenseCreateComponent;
}());



/***/ }),

/***/ "./src/app/body/expense/expense-list/expense-detail/expense-detail.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/body/expense/expense-list/expense-detail/expense-detail.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvZXhwZW5zZS9leHBlbnNlLWxpc3QvZXhwZW5zZS1kZXRhaWwvZXhwZW5zZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/body/expense/expense-list/expense-detail/expense-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/body/expense/expense-list/expense-detail/expense-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  expense-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/body/expense/expense-list/expense-detail/expense-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/body/expense/expense-list/expense-detail/expense-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ExpenseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseDetailComponent", function() { return ExpenseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpenseDetailComponent = /** @class */ (function () {
    function ExpenseDetailComponent() {
    }
    ExpenseDetailComponent.prototype.ngOnInit = function () {
    };
    ExpenseDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-detail',
            template: __webpack_require__(/*! ./expense-detail.component.html */ "./src/app/body/expense/expense-list/expense-detail/expense-detail.component.html"),
            styles: [__webpack_require__(/*! ./expense-detail.component.css */ "./src/app/body/expense/expense-list/expense-detail/expense-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpenseDetailComponent);
    return ExpenseDetailComponent;
}());



/***/ }),

/***/ "./src/app/body/expense/expense-list/expense-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/body/expense/expense-list/expense-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvZXhwZW5zZS9leHBlbnNlLWxpc3QvZXhwZW5zZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/body/expense/expense-list/expense-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/body/expense/expense-list/expense-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let expense of expenses\">\n    <mat-expansion-panel-header>\n      <mat-panel-title> {{ expense.amount }} </mat-panel-title>\n      <mat-panel-description> {{ expense.category }} </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>Sub-Category: {{ expense.subCategory }}</p>\n    <p>Description: {{ expense.expenseDescription }}</p>\n    <p>Payment Method: {{ expense.paymentMethod }}</p>\n    <p>Date: {{ expense.timestamp }}</p>\n  </mat-expansion-panel>\n</mat-accordion>\n<button mat-raised-button (click)=\"getExpenses()\">Get Expenses</button>"

/***/ }),

/***/ "./src/app/body/expense/expense-list/expense-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/body/expense/expense-list/expense-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExpenseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseListComponent", function() { return ExpenseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _expense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../expense.service */ "./src/app/body/expense.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpenseListComponent = /** @class */ (function () {
    function ExpenseListComponent(expenseService) {
        this.expenseService = expenseService;
    }
    // this.subCategory = Object.values(this.categoryService.array[this.selectedCategory].subCategories);
    ExpenseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expenseService.getExpenses().subscribe(function (res) {
            console.log(res);
            _this.expenses = Object.values(res.posts);
        }, function (err) {
            console.log(err);
        });
    };
    ExpenseListComponent.prototype.getExpenses = function () {
        var _this = this;
        this.expenseService.getExpenses().subscribe(function (res) {
            console.log(res);
            _this.expenses = res;
        }, function (err) {
            console.log(err);
        });
    };
    ExpenseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-list',
            template: __webpack_require__(/*! ./expense-list.component.html */ "./src/app/body/expense/expense-list/expense-list.component.html"),
            styles: [__webpack_require__(/*! ./expense-list.component.css */ "./src/app/body/expense/expense-list/expense-list.component.css")]
        }),
        __metadata("design:paramtypes", [_expense_service__WEBPACK_IMPORTED_MODULE_1__["ExpenseService"]])
    ], ExpenseListComponent);
    return ExpenseListComponent;
}());



/***/ }),

/***/ "./src/app/body/expense/expense.component.css":
/*!****************************************************!*\
  !*** ./src/app/body/expense/expense.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: auto;\n}\n\n.container {\n  width: 100% !important;\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9leHBlbnNlL2V4cGVuc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2V4cGVuc2UvZXhwZW5zZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/body/expense/expense.component.html":
/*!*****************************************************!*\
  !*** ./src/app/body/expense/expense.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>NEW EXPENSE</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <app-expense-create></app-expense-create>\n  </mat-card-content>\n</mat-card>\n\n<span class=\"container\">\n  <app-expense-list></app-expense-list>\n</span>\n"

/***/ }),

/***/ "./src/app/body/expense/expense.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/expense/expense.component.ts ***!
  \***************************************************/
/*! exports provided: ExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return ExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent() {
    }
    ExpenseComponent.prototype.ngOnInit = function () {
    };
    ExpenseComponent.prototype.selectedI = function (index) {
        console.log(index);
    };
    ExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense',
            template: __webpack_require__(/*! ./expense.component.html */ "./src/app/body/expense/expense.component.html"),
            styles: [__webpack_require__(/*! ./expense.component.css */ "./src/app/body/expense/expense.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpenseComponent);
    return ExpenseComponent;
}());



/***/ }),

/***/ "./src/app/body/income.service.ts":
/*!****************************************!*\
  !*** ./src/app/body/income.service.ts ***!
  \****************************************/
/*! exports provided: IncomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeService", function() { return IncomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncomeService = /** @class */ (function () {
    function IncomeService() {
    }
    IncomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], IncomeService);
    return IncomeService;
}());



/***/ }),

/***/ "./src/app/body/income/income-create/income-create.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/body/income/income-create/income-create.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9pbmNvbWUvaW5jb21lLWNyZWF0ZS9pbmNvbWUtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvYm9keS9pbmNvbWUvaW5jb21lLWNyZWF0ZS9pbmNvbWUtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/body/income/income-create/income-create.component.html":
/*!************************************************************************!*\
  !*** ./src/app/body/income/income-create/income-create.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Input\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Textarea\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Select\">\n        <!-- in value ein array mit den notwendigen feldern ergänzen -->\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n"

/***/ }),

/***/ "./src/app/body/income/income-create/income-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/body/income/income-create/income-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: IncomeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeCreateComponent", function() { return IncomeCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncomeCreateComponent = /** @class */ (function () {
    function IncomeCreateComponent() {
    }
    IncomeCreateComponent.prototype.ngOnInit = function () {
    };
    IncomeCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income-create',
            template: __webpack_require__(/*! ./income-create.component.html */ "./src/app/body/income/income-create/income-create.component.html"),
            styles: [__webpack_require__(/*! ./income-create.component.css */ "./src/app/body/income/income-create/income-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncomeCreateComponent);
    return IncomeCreateComponent;
}());



/***/ }),

/***/ "./src/app/body/income/income-list/income-detail/income-detail.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/body/income/income-list/income-detail/income-detail.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvaW5jb21lL2luY29tZS1saXN0L2luY29tZS1kZXRhaWwvaW5jb21lLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/body/income/income-list/income-detail/income-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/body/income/income-list/income-detail/income-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  income-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/body/income/income-list/income-detail/income-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/body/income/income-list/income-detail/income-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: IncomeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeDetailComponent", function() { return IncomeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncomeDetailComponent = /** @class */ (function () {
    function IncomeDetailComponent() {
    }
    IncomeDetailComponent.prototype.ngOnInit = function () {
    };
    IncomeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income-detail',
            template: __webpack_require__(/*! ./income-detail.component.html */ "./src/app/body/income/income-list/income-detail/income-detail.component.html"),
            styles: [__webpack_require__(/*! ./income-detail.component.css */ "./src/app/body/income/income-list/income-detail/income-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncomeDetailComponent);
    return IncomeDetailComponent;
}());



/***/ }),

/***/ "./src/app/body/income/income-list/income-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/body/income/income-list/income-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvaW5jb21lL2luY29tZS1saXN0L2luY29tZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/body/income/income-list/income-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/body/income/income-list/income-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  income-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/body/income/income-list/income-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/body/income/income-list/income-list.component.ts ***!
  \******************************************************************/
/*! exports provided: IncomeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeListComponent", function() { return IncomeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncomeListComponent = /** @class */ (function () {
    function IncomeListComponent() {
    }
    IncomeListComponent.prototype.ngOnInit = function () {
    };
    IncomeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income-list',
            template: __webpack_require__(/*! ./income-list.component.html */ "./src/app/body/income/income-list/income-list.component.html"),
            styles: [__webpack_require__(/*! ./income-list.component.css */ "./src/app/body/income/income-list/income-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncomeListComponent);
    return IncomeListComponent;
}());



/***/ }),

/***/ "./src/app/body/income/income.component.css":
/*!**************************************************!*\
  !*** ./src/app/body/income/income.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 80%;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9pbmNvbWUvaW5jb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvYm9keS9pbmNvbWUvaW5jb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/income/income.component.html":
/*!***************************************************!*\
  !*** ./src/app/body/income/income.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n\n      <app-income-create></app-income-create>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button> <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/body/income/income.component.ts":
/*!*************************************************!*\
  !*** ./src/app/body/income/income.component.ts ***!
  \*************************************************/
/*! exports provided: IncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeComponent", function() { return IncomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncomeComponent = /** @class */ (function () {
    function IncomeComponent() {
    }
    IncomeComponent.prototype.ngOnInit = function () {
    };
    IncomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income',
            template: __webpack_require__(/*! ./income.component.html */ "./src/app/body/income/income.component.html"),
            styles: [__webpack_require__(/*! ./income.component.css */ "./src/app/body/income/income.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncomeComponent);
    return IncomeComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  /* background-color: #24182e; */\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx5QkFBaUI7RUFBakIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxXQUFXO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI0MTgyZTsgKi9cbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/expenses\" class=\"linkColor \">EXPENSES</a>\n      <!-- <a mat-list-item routerLink=\"/income\">INCOME</a> -->\n      <!-- <a mat-list-item routerLink=\"/statistics\">STATISTICS</a> -->\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>coincon</span>\n    </mat-toolbar>\n    <!-- body content goes here -->\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyA_B40-ym1gOXKogNQ8PQ6PCRyEcly6vfI',
        authDomain: 'coincontroller-b96be.firebaseapp.com',
        databaseURL: 'https://coincontroller-b96be.firebaseio.com',
        projectId: 'coincontroller-b96be',
        storageBucket: 'coincontroller-b96be.appspot.com',
        messagingSenderId: '284525125402'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abdulkadirtanribilir/Desktop/CoinCon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map