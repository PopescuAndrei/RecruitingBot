webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_support_email__ = __webpack_require__("../../../../../src/app/domain/support.email.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_user__ = __webpack_require__("../../../../../src/app/domain/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppStoreService = (function () {
    function AppStoreService(http) {
        this.http = http;
        var dummyUser = new __WEBPACK_IMPORTED_MODULE_3__domain_user__["a" /* User */](0, "Andrei", "Popescu", new __WEBPACK_IMPORTED_MODULE_0__domain_support_email__["a" /* Email */]("andrei.popescu93@gmail.com"), "pass");
        this.dataStore = { loggedInUser: dummyUser };
        this._loggedUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](dummyUser);
    }
    AppStoreService.prototype.getLoggedInUser = function () {
        return this._loggedUser.asObservable();
    };
    AppStoreService.prototype.afterLogin = function (user) {
        this.dataStore.loggedInUser = user;
    };
    AppStoreService.prototype.afterLogout = function () {
        this.dataStore.loggedInUser = null;
    };
    return AppStoreService;
}());
AppStoreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppStoreService);

var _a;
//# sourceMappingURL=app-store.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n        <sidebar></sidebar>\n    </div>\n    <div class=\"main-panel\">\n        <navbar></navbar>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer></footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_skill_service__ = __webpack_require__("../../../../../src/app/services/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positions_edit_position_edit_position_component__ = __webpack_require__("../../../../../src/app/positions/edit-position/edit-position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interview_edit_question_edit_question_component__ = __webpack_require__("../../../../../src/app/interview/edit-question/edit-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positions_create_position_create_position_component__ = __webpack_require__("../../../../../src/app/positions/create-position/create-position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_questions_service__ = __webpack_require__("../../../../../src/app/services/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula_components_dragular_module__ = __webpack_require__("../../../../ng2-dragula/components/dragular.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula_components_dragular_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_dragula_components_dragular_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__candidates_chat_view_chat_view_component__ = __webpack_require__("../../../../../src/app/candidates/chat-view/chat-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_positions_service__ = __webpack_require__("../../../../../src/app/services/positions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__positions_position_view_position_view_component__ = __webpack_require__("../../../../../src/app/positions/position-view/position-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__positions_position_card_position_card_component__ = __webpack_require__("../../../../../src/app/positions/position-card/position-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__candidates_experience_timeline_experience_timeline_component__ = __webpack_require__("../../../../../src/app/candidates/experience-timeline/experience-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_store_service__ = __webpack_require__("../../../../../src/app/app-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__candidates_comment_view_comment_view_component__ = __webpack_require__("../../../../../src/app/candidates/comment-view/comment-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__candidates_education_timeline_education_timeline_component__ = __webpack_require__("../../../../../src/app/candidates/education-timeline/education-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__candidates_candidate_card_candidate_card_component__ = __webpack_require__("../../../../../src/app/candidates/candidate-card/candidate-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__interview_interview_component__ = __webpack_require__("../../../../../src/app/interview/interview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__positions_positions_component__ = __webpack_require__("../../../../../src/app/positions/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__candidates_candidate_view_candidate_view_component__ = __webpack_require__("../../../../../src/app/candidates/candidate-view/candidate-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__candidates_candidates_component__ = __webpack_require__("../../../../../src/app/candidates/candidates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_26__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_33__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__candidates_candidates_component__["a" /* CandidatesComponent */], __WEBPACK_IMPORTED_MODULE_17__candidates_candidate_card_candidate_card_component__["a" /* CandidateCardComponent */], __WEBPACK_IMPORTED_MODULE_15__candidates_comment_view_comment_view_component__["a" /* CommentViewComponent */], __WEBPACK_IMPORTED_MODULE_8__candidates_chat_view_chat_view_component__["a" /* ChatViewComponent */], __WEBPACK_IMPORTED_MODULE_13__candidates_experience_timeline_experience_timeline_component__["a" /* ExperienceTimelineComponent */], __WEBPACK_IMPORTED_MODULE_16__candidates_education_timeline_education_timeline_component__["a" /* EducationTimelineComponent */], __WEBPACK_IMPORTED_MODULE_21__candidates_candidate_view_candidate_view_component__["a" /* CandidateViewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__positions_positions_component__["a" /* PositionsComponent */], __WEBPACK_IMPORTED_MODULE_12__positions_position_card_position_card_component__["a" /* PositionCardComponent */], __WEBPACK_IMPORTED_MODULE_11__positions_position_view_position_view_component__["a" /* PositionViewComponent */], __WEBPACK_IMPORTED_MODULE_3__positions_create_position_create_position_component__["a" /* CreatePositionComponent */], __WEBPACK_IMPORTED_MODULE_1__positions_edit_position_edit_position_component__["a" /* EditPositionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__interview_interview_component__["a" /* InterviewComponent */], __WEBPACK_IMPORTED_MODULE_2__interview_edit_question_edit_question_component__["a" /* EditQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_19__settings_settings_component__["a" /* SettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_29__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_30__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_32__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_31__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dragula_components_dragular_module__["DragulaModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_candidates_service__["a" /* CandidatesService */], __WEBPACK_IMPORTED_MODULE_5__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_9__services_positions_service__["a" /* PositionsService */], __WEBPACK_IMPORTED_MODULE_6__services_questions_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_0__services_skill_service__["a" /* SkillService */],
            __WEBPACK_IMPORTED_MODULE_14__app_store_service__["a" /* AppStoreService */], __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__positions_edit_position_edit_position_component__ = __webpack_require__("../../../../../src/app/positions/edit-position/edit-position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interview_edit_question_edit_question_component__ = __webpack_require__("../../../../../src/app/interview/edit-question/edit-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positions_create_position_create_position_component__ = __webpack_require__("../../../../../src/app/positions/create-position/create-position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__candidates_chat_view_chat_view_component__ = __webpack_require__("../../../../../src/app/candidates/chat-view/chat-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__positions_position_view_position_view_component__ = __webpack_require__("../../../../../src/app/positions/position-view/position-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__candidates_comment_view_comment_view_component__ = __webpack_require__("../../../../../src/app/candidates/comment-view/comment-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interview_interview_component__ = __webpack_require__("../../../../../src/app/interview/interview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__positions_positions_component__ = __webpack_require__("../../../../../src/app/positions/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__candidates_candidate_view_candidate_view_component__ = __webpack_require__("../../../../../src/app/candidates/candidate-view/candidate-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__candidates_candidates_component__ = __webpack_require__("../../../../../src/app/candidates/candidates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });












var AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */]
    }, {
        path: 'candidates',
        component: __WEBPACK_IMPORTED_MODULE_10__candidates_candidates_component__["a" /* CandidatesComponent */]
    }, {
        path: 'candidates/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__candidates_candidate_view_candidate_view_component__["a" /* CandidateViewComponent */]
    }, {
        path: 'candidates/:id/comments',
        component: __WEBPACK_IMPORTED_MODULE_5__candidates_comment_view_comment_view_component__["a" /* CommentViewComponent */]
    }, {
        path: 'candidates/:id/chat',
        component: __WEBPACK_IMPORTED_MODULE_3__candidates_chat_view_chat_view_component__["a" /* ChatViewComponent */]
    }, {
        path: 'positions',
        component: __WEBPACK_IMPORTED_MODULE_8__positions_positions_component__["a" /* PositionsComponent */]
    }, {
        path: 'positions/new',
        component: __WEBPACK_IMPORTED_MODULE_2__positions_create_position_create_position_component__["a" /* CreatePositionComponent */]
    }, {
        path: 'positions/edit-position/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__positions_edit_position_edit_position_component__["a" /* EditPositionComponent */]
    }, {
        path: 'positions/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__positions_position_view_position_view_component__["a" /* PositionViewComponent */]
    }, {
        path: 'interview',
        component: __WEBPACK_IMPORTED_MODULE_7__interview_interview_component__["a" /* InterviewComponent */]
    }, {
        path: 'interview/edit-question/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__interview_edit_question_edit_question_component__["a" /* EditQuestionComponent */]
    }, {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__["a" /* SettingsComponent */]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/candidate-card/candidate-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  background-color:#462A51;\r\n  padding-top:40px;\r\n  font-family: 'Muli', sans-serif;\r\n}\r\n\r\n.btn.btn-latest{\r\n    background-color:transparent;\r\n    border-style:solid;\r\n    border-color:#462A51;\r\n    color:#462A51;\r\n  border-radius:0;\r\n  margin:5px;\r\n}\r\n\r\n.btn.btn-latest:hover{\r\n    background-color:#462A51;\r\n    color:#fff;\r\n  border-radius:0;\r\n  margin:5px;\r\n}\r\n\r\n.btn.btn-heart{\r\n    background-color:transparent;\r\n    border-style:solid;\r\n    border-color:#462A51;\r\n    color:#462A51;\r\n  border-radius:0;\r\n  margin:5px;\r\n}\r\n\r\n.btn.btn-heart.active{\r\n    background-color:#462A51;\r\n    color:#fff;\r\n  border-radius:0;\r\n  margin:5px;\r\n}\r\n\r\n.fa.fa-comment{\r\n  color:#DD0330;\r\n}\r\n\r\n.fa-thumbs-up {\r\n  color: #DD0330;\r\n}\r\n\r\n.fa-info-circle {\r\n    color: #DD0330;\r\n}\r\n\r\n.candidate-name {\r\n    color: #DD0330;\r\n}\r\n\r\n.candidate-description {\r\n  color:black;\r\n  font-size: 12px;\r\n}\r\n\r\n#right-bar{\r\n  color:#fff;\r\n}\r\n\r\n.img:hover {\r\n    -webkit-animation: pulse 1s;\r\n    animation: pulse 1s;\r\n}\r\n\r\na{\r\n  color:#fff;\r\n}\r\n\r\n.img-center {\r\n  width:96px;\r\n  height:96px;\r\n  display:block;\r\n  margin:auto;\r\n}\r\n\r\n.img-rounded {\r\n  border-radius: 50%;\r\n  border-width: 2px;\r\n  border-style:solid;\r\n}\r\n\r\n.panel {\r\n  border-radius: 6px;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 20px;\r\n  z-index: 1;  \r\n  background-color: #FFFFFF;\r\n  color: #252422;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/candidate-card/candidate-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 col-sm-6 col-xs-12\">\n    <div class=\"panel panel-default\">\n        <a [routerLink]=\"['/candidates', candidate.id]\" >\n            <div class=\"panel-body\">\n                <img [src]=\"candidate.avatar\" class=\"img-responsive img-responsive infinite pulse img-center img-rounded\" alt=\"Responsive image\">\n                <h3 class=\"candidate-name text-center\">{{candidate.firstName}} {{candidate.lastName}}</h3>\n                <p class=\"candidate-description text-center\">{{candidate.email.address}}</p>\n            </div>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/candidate-card/candidate-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__candidates_component__ = __webpack_require__("../../../../../src/app/candidates/candidates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandidateCardComponent = (function () {
    function CandidateCardComponent(candidatesComponent) {
        this.candidatesComponent = candidatesComponent;
    }
    CandidateCardComponent.prototype.ngOnInit = function () {
    };
    return CandidateCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CandidateCardComponent.prototype, "candidate", void 0);
CandidateCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'candidate-card',
        template: __webpack_require__("../../../../../src/app/candidates/candidate-card/candidate-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/candidate-card/candidate-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__candidates_component__["a" /* CandidatesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__candidates_component__["a" /* CandidatesComponent */]) === "function" && _a || Object])
], CandidateCardComponent);

var _a;
//# sourceMappingURL=candidate-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/candidate-view/candidate-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Override panel*/\r\n.card-user {\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.image{\r\n    height: 70px;\r\n}\r\n\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nem {\r\n  color: #959595;\r\n  font-style: italic;\r\n}\r\n\r\n.tooltip-example {\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 50%;\r\n  width: 100%;\r\n}\r\n\r\n.tooltip {\r\n  display: inline;\r\n  -webkit-perspective: 500px;\r\n  perspective: 500px;\r\n}\r\n.tooltip:hover {\r\n  cursor: pointer;\r\n}\r\n.tooltip:hover .tooltip__content {\r\n  -webkit-transform: translate3d(-50%, -10%, 0);\r\n  transform: translate3d(-50%, -10%, 0);\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n.tooltip__content {\r\n  transition: all 200ms ease;\r\n  -webkit-transform: translate3d(-50%, 0%, 0);\r\n  transform: translate3d(-50%, 0%, 0);\r\n  -webkit-transform-origin: 0 10px;\r\n  transform-origin: 0 10px;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  color: #2f2f2f;\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  left: 50%;\r\n  opacity: 0;\r\n  padding: 10px 20px;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  text-align: left;\r\n  bottom: 100%;\r\n}\r\n.tooltip__content:before {\r\n  border-color: transparent;\r\n  border-top-color: #fff;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  content: ' ';\r\n  display: block;\r\n  height: 0;\r\n  left: 50%;\r\n  margin-left: -10px;\r\n  position: absolute;\r\n  bottom: -20px;\r\n  width: 0;\r\n}\r\n.tooltip__content:after {\r\n  content: ' ';\r\n  display: block;\r\n  position: absolute;\r\n  bottom: -20px;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 20px;\r\n}\r\n.tooltip__content:hover {\r\n  -webkit-transform: rotateX(0deg) translate3d(-50%, -10%, 0);\r\n  transform: rotateX(0deg) translate3d(-50%, -10%, 0);\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n/* SKILLS */\r\n\r\n\r\nul.bean-skillset {\r\n  list-style-type: none;\r\n  padding-right:0px;\r\n  padding-left:0px;\r\n\tfloat: left;\r\n\twidth: 100%;\r\n}\r\n\r\n.skill-percent { \r\n\tfloat: right; \r\n}\r\n\r\nli.skill-bar {\r\n\tbackground-color: #7BC673;\r\n\tcolor: #FFF;\r\n  font: bold 12px/23px \"Helvetica Neue\", Arial, Helvetica, Geneva, sans-serif;\r\n  margin-top:5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 2px 8px;\r\n\twidth: 300px;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);        \r\n}\r\n  \r\n/* Interests */\r\ndl {\r\n  padding: 10px 0 0 10px;\r\n}\r\n\r\ndl dt { \r\n  margin-bottom: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\ndl dd {\r\n  display: inline-table;\r\n  width: auto;\r\n  font-size: 12px;\r\n  padding: 10px;\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n  background-color: #c70039;\r\n  color: white;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  margin-left:5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  border-radius: 0;\r\n  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(0, 0, 0, 0.2);\r\n  border-radius: 0;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:window-inactive {\r\n  background: rgba(0, 0, 0, 0.3);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/candidate-view/candidate-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\"><!-- ROW -->\n        <div class=\"col-lg-4 col-md-5\">\n            <div class=\"card card-user\">\n                <div class=\"image cyan\"></div>\n                <div class=\"content\">\n                    <div class=\"author\">\n                        <img class=\"avatar border-white\" [src]=\"candidate?.avatar || ''\" alt=\"...\"/>\n                        <h4 class=\"title\">\n                            <span class=\"cyan-text\">{{candidate?.firstName}} {{candidate?.lastName}}</span>\n                            <br />\n                            <a href=\"#\"><small><span class=\"black-text\">{{candidate?.email.address}}</span></small></a>\n                        </h4>\n                    </div>\n                    <p class=\"description text-center\">{{candidate?.description}}</p>\n                    \n                    <div class=\"text-center\">\n                        <a [routerLink]=\"['/candidates', candidateId, 'chat']\"><button class=\"btn btn-round dark-primary-color\">Chat Thread</button></a>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"text-center\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-1\">\n                            <a [routerLink]=\"['/candidates', candidateId, 'comments']\">\n                                <h5>\n                                    <span class=\"cyan-text\">{{candidateCommentsNumber}}</span>\n                                    <br /><small>Comments</small>\n                                </h5>\n                            </a>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h5>\n                            <span class=\"candidate-rating\">{{candidateLikesNumber}}</span><br />\n                            <small>Likes</small>\n                            </h5>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <h5>\n                            <span class=\"candidate-rating\">{{candidateRating}}</span>\n                            <br /><small>/5</small>\n                            </h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"col-lg-4 col-md-5\">\n            <div class=\"card card-user white-backgound\">\n                <div class=\"image blue\">\n                    <h2 class=\"text-center white-text\" style=\"vertical-align: middle;\">Skills</h2>\n                </div>\n                <div class=\"content\" style=\"height: 261px; overflow-y: hidden\">\n                    <ul class=\"bean-skillset\">\n                        <li *ngFor=\"let skill of candidateSkills\" class=\"skill-bar\" style=\"background-color:#449C76;\" [ngStyle]=\"{'width': (skill.level + '%') }\">\n                            <span>{{skill.name}}</span>\n                            <span class=\"skill-percent\">{{(skill.level/100) | percent}}</span>\n                        </li>      \n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-5\">\n            <div class=\"card card-user white-backgound\">\n                <div class=\"image green\">\n                    <h2 class=\"text-center white-text\" style=\"vertical-align: middle;\">Interests</h2>\n                </div>\n                <div class=\"content\" style=\"height: 261px; overflow-y: hidden\">\n                    <dl>\n                        <dd *ngFor=\"let interest of candidateInterests\">\n                            <span>{{interest.name}}</span>\n                        </dd>      \n                    </dl>\n                </div>\n            </div>\n        </div>    \n    </div><!-- END ROW -->\n\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n            <div class=\"card card-user white-background\">\n                <div class=\"image white\">\n                    <h2 class=\"text-center indigo-text\" style=\"vertical-align: middle;\"><strong>Experience</strong></h2>\n                </div>\n                <div class=\"content\" style=\"height: 500px; overflow-x: hidden\">\n                    <experience-timeline [candidateExperience]=\"candidateExperience\"></experience-timeline>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6\">\n            <div class=\"card card-user white-backgound\">\n                <div class=\"image white\">\n                    <h2 class=\"text-center indigo-text\" style=\"vertical-align: middle;\"><strong>Education</strong></h2>\n                </div>\n                <div class=\"content\" style=\"height: 500px; overflow-x: hidden\">\n                    <education-timeline [candidateEducation]=\"candidateEducation\"></education-timeline>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8\">\n            <div class=\"card card-user white-backgound\">\n                <div class=\"header\">\n                    <h4 class=\"title text-center\"><strong>Languages</strong></h4>\n                </div>\n                <div class=\"content table-responsive table-full-width\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Language</th>\n                                <th>Writing</th>\n                                <th>Understanding</th>\n                                <th>Speaking</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let language of candidateLanguages\">\n                                <td>{{language.name}}</td>\n                                <td>{{language.writing}}</td>\n                                <td>{{language.understanding}}</td>\n                                <td>{{language.speaking}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/candidate-view/candidate-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CandidateViewComponent = (function () {
    function CandidateViewComponent(route, candidateService) {
        this.route = route;
        this.candidateService = candidateService;
    }
    CandidateViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) { return _this.candidateId = params['id']; });
        this.candidateService.getCandidate(this.candidateId)
            .subscribe(function (data) { return _this.candidate = data; });
        this.candidateService.getCandidateEducation(this.candidateId)
            .subscribe(function (data) { return _this.candidateEducation = data; });
        this.candidateService.getCandidateExperience(this.candidateId)
            .subscribe(function (data) { return _this.candidateExperience = data; });
        this.candidateService.getCandidateSkills(this.candidateId)
            .subscribe(function (data) { return _this.candidateSkills = data; });
        this.candidateService.getCandidateInterests(this.candidateId)
            .subscribe(function (data) { return _this.candidateInterests = data; });
        this.candidateService.getCandidateLanguages(this.candidateId)
            .subscribe(function (data) { return _this.candidateLanguages = data; });
        this.candidateService.getCandidateLikesNumber(this.candidateId)
            .subscribe(function (data) { return _this.candidateLikesNumber = data; }, function (error) { return _this.candidateLikesNumber = 20; });
        this.candidateService.getCandidateRating(this.candidateId)
            .subscribe(function (data) { return _this.candidateRating = data; }, function (error) { return _this.candidateRating = 4.8; });
        this.candidateService.getCandidateCommentsNumber(this.candidateId)
            .subscribe(function (data) { return _this.candidateCommentsNumber = data; }, function (error) { return _this.candidateCommentsNumber = 45; });
    };
    return CandidateViewComponent;
}());
CandidateViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'candidate-view',
        template: __webpack_require__("../../../../../src/app/candidates/candidate-view/candidate-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/candidate-view/candidate-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_candidates_service__["a" /* CandidatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_candidates_service__["a" /* CandidatesService */]) === "function" && _b || Object])
], CandidateViewComponent);

var _a, _b;
//# sourceMappingURL=candidate-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/candidates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/candidates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngFor=\"let candidateRow of candidates\" class=\"row active-with-click\">\n    <candidate-card *ngFor=\"let candidate of candidateRow\" [candidate]=\"candidate\"></candidate-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/candidates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandidatesComponent = (function () {
    function CandidatesComponent(candidateService) {
        this.candidateService = candidateService;
    }
    CandidatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.candidateService.getCandidates()
            .subscribe(function (data) { return _this.candidates = data; });
    };
    return CandidatesComponent;
}());
CandidatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'candidates',
        template: __webpack_require__("../../../../../src/app/candidates/candidates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/candidates.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_candidates_service__["a" /* CandidatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_candidates_service__["a" /* CandidatesService */]) === "function" && _a || Object])
], CandidatesComponent);

var _a;
//# sourceMappingURL=candidates.component.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/chat-view/chat-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-history {\r\n  height: 500px;\r\n  overflow-y: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.chat-item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: start;\r\n  -ms-flex-align: start;\r\n  align-items: flex-start;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.chat-item img {\r\n  width: 36px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chat-item--me .message {\r\n  width: 100%;\r\n  margin-left: 15px;\r\n  background: #DCF8C6;\r\n}\r\n\r\n.chat-item--me .message::before {\r\n  right: 100%;\r\n  border: solid transparent;\r\n  border-right-color: #f6f6f6;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-width: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.chat-item--other .message {\r\n  width: 100%;\r\n  margin-right: 15px;\r\n  background: #FFFFFF;\r\n}\r\n\r\n.chat-item--other .message::after {\r\n  left: 100%;\r\n  border: solid transparent;\r\n  border-left-color: #f6f6f6;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-width: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.message {\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  position: relative;\r\n}\r\n\r\n.message__user-name {\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  color: #000;\r\n}\r\n\r\n.message__time {\r\n  font-size: 11px;\r\n  color: #999;\r\n}\r\n\r\n.message__text {\r\n  font-size: 13px;\r\n  color: #777777;\r\n}\r\n\r\n.btns-row {\r\n  margin-top: 5px;\r\n}\r\n\r\n.chat-controls {\r\n  margin-top: 10px;\r\n  border-top: 1px solid #f6f6f6;\r\n  padding: 20px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.chat-controls__textarea {\r\n  width: 100%;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  resize: none;\r\n  outline: none;\r\n}\r\n\r\n.chat-controls__btn {\r\n  padding: 0 15px;\r\n  background: #75b1e8;\r\n  line-height: 25px;\r\n  display: inline-block;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  border-radius: 3px;\r\n}\r\n\r\n.attach-file {\r\n  color: #999;\r\n  float: right;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  border-radius: 0;\r\n  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(0, 0, 0, 0.2);\r\n  border-radius: 0;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:window-inactive {\r\n  background: rgba(0, 0, 0, 0.3);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/chat-view/chat-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-history\">\n  <ul>\n    <li *ngFor=\"let message of candidateConversation\" class=\"chat-item list-no-bullets\"\n      [ngClass]=\"{'chat-item--me': message.fromRobot === false, 'chat-item--other':message.fromRobot === true}\">\n      <img *ngIf=\"message.fromRobot === false\" [src]=\"message.from.avatar\" alt=\"{{message.from.firstName}} {{message.from.lastName}}\" />\n      <div class=\"message\">\n        <span class=\"message__user-name\">{{message.from.firstName}} {{message.from.lastName}}</span>\n        <time class=\"message__time\">\n          <i class=\"fa fa-clock-o\"></i>\n          {{message.time | date: 'mediumTime'}}\n        </time>\n        <p class=\"message__text\">{{message.message}}</p>\n      </div>\n      <img *ngIf=\"message.fromRobot === true\" [src]=\"message.from.avatar\" alt=\"{{message.from.firstName}} {{message.from.lastName}}\" />\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/chat-view/chat-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatViewComponent = (function () {
    function ChatViewComponent(route, candidateService, chatService) {
        this.route = route;
        this.candidateService = candidateService;
        this.chatService = chatService;
    }
    ChatViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) { return _this.candidateId = params['id']; });
        this.candidateService.getCandidate(this.candidateId)
            .subscribe(function (data) { return _this.candidate = data; });
        this.chatService.getConversation(this.candidateId)
            .subscribe(function (data) { return _this.candidateConversation = data; });
    };
    return ChatViewComponent;
}());
ChatViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'chat-view',
        template: __webpack_require__("../../../../../src/app/candidates/chat-view/chat-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/chat-view/chat-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__["a" /* CandidatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__["a" /* CandidatesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_chat_service__["a" /* ChatService */]) === "function" && _c || Object])
], ChatViewComponent);

var _a, _b, _c;
//# sourceMappingURL=chat-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/comment-view/comment-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detailBox {\r\n    width:100%;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.titleBox {\r\n    background-color:#fdfdfd;\r\n    padding:10px;\r\n}\r\n\r\n.titleBox label{\r\n  color:#444;\r\n  margin:0;\r\n  display:inline-block;\r\n}\r\n\r\n.commentBox {\r\n    border-top:1px dotted #bbb;\r\n}\r\n\r\n.commentBox .form-group:first-child, .actionBox .form-group:first-child {\r\n    width:80%;\r\n}\r\n\r\n.commentBox .form-group:nth-child(2), .actionBox .form-group:nth-child(2) {\r\n    width:18%;\r\n}\r\n\r\n.actionBox .form-group * {\r\n    width:100%;\r\n}\r\n\r\n.taskDescription {\r\n    margin-top:10px 0;\r\n}\r\n\r\n.commentList {\r\n    padding:0;\r\n    list-style:none;\r\n    max-height:400px;\r\n    min-height:400px;\r\n    overflow:auto;\r\n}\r\n\r\n.commentList li {\r\n    margin:0;\r\n    margin-top:10px;\r\n}\r\n\r\n.commentList li > div {\r\n    display:table-cell;\r\n}\r\n\r\n.commenterImage {\r\n    width:30px;\r\n    margin-right:5px;\r\n    height:100%;\r\n    float:left;\r\n}\r\n\r\n.commenterImage img {\r\n    width:100%;\r\n    border-radius:50%;\r\n}\r\n\r\n.commentText p {\r\n    margin:0;\r\n}\r\n\r\n.sub-text {\r\n    color:#aaa;\r\n    font-family:verdana;\r\n    font-size:11px;\r\n}\r\n\r\n.actionBox {\r\n    background-color:#fdfdfd;\r\n    border-top:1px dotted #bbb;\r\n    padding:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/comment-view/comment-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-custom\" style=\"padding-top:15px;\">\n    <div class=\"col-md-12\">\n        <div class=\"detailBox\">\n            <div class=\"titleBox\">\n                <label>Comments</label>\n            </div>\n            <div class=\"actionBox\">\n                <ul class=\"commentList\">\n                    <li *ngFor=\"let comment of comments\">\n                        <div class=\"commenterImage\">\n                            <img [src]=\"comment.avatarSrc\"/>\n                        </div>\n                        <div class=\"commentText\">\n                            <p><strong class=\"text-dark-color\">{{comment.author}}: </strong>{{comment.message}}</p> <span class=\"date sub-text\">on {{ comment.date | date: 'medium' }}</span>\n\n                        </div>\n                    </li>\n                </ul>\n                <form class=\"form-inline\" role=\"form\" [formGroup]=\"commentForm\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"message\" placeholder=\"Add comment...\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-round dark-primary-color\" type=\"submit\" value=\"Add Comment\" (click)=\"addComment()\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>    \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/comment-view/comment-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_messages__ = __webpack_require__("../../../../../src/app/util/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_store_service__ = __webpack_require__("../../../../../src/app/app-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_comment__ = __webpack_require__("../../../../../src/app/domain/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommentViewComponent = (function () {
    function CommentViewComponent(route, appStore, candidateService, notificationService) {
        this.route = route;
        this.appStore = appStore;
        this.candidateService = candidateService;
        this.notificationService = notificationService;
    }
    CommentViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //here we should have the api call
        this.route.params.forEach(function (params) { return _this.candidateId = params['id']; });
        this.candidateService.getCandidateComments(this.candidateId)
            .subscribe(function (data) { return _this.comments = data; });
        this.initCommentForm();
        this.appStore.getLoggedInUser().subscribe(function (user) { return _this.user = user; });
    };
    CommentViewComponent.prototype.initCommentForm = function () {
        this.commentForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormGroup */]({
            message: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormControl */]()
        });
    };
    ;
    CommentViewComponent.prototype.addComment = function () {
        if (this.commentForm.value.message) {
            var newComment = new __WEBPACK_IMPORTED_MODULE_5__domain_comment__["a" /* Comment */](this.user.firstName + " " + this.user.lastName, this.user.avatar, this.commentForm.value.message, new Date());
            this.notificationService.showSuccess(__WEBPACK_IMPORTED_MODULE_0__util_messages__["g" /* COMMENT_SAVED */]);
            this.comments.push(newComment);
            this.initCommentForm();
        }
        else {
            this.notificationService.showError(__WEBPACK_IMPORTED_MODULE_0__util_messages__["h" /* COMMENT_NOT_SAVED */]);
        }
    };
    return CommentViewComponent;
}());
CommentViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'comment-view',
        template: __webpack_require__("../../../../../src/app/candidates/comment-view/comment-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/comment-view/comment-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_store_service__["a" /* AppStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_store_service__["a" /* AppStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_candidates_service__["a" /* CandidatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_candidates_service__["a" /* CandidatesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], CommentViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=comment-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/education-timeline/education-timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline ul {\r\n  padding: 1em 0 0 2em;\r\n  margin: 0;\r\n  list-style: none;\r\n  position: relative;\r\n}\r\n\r\n.timeline ul::before {\r\n  content: ' ';\r\n  height: 100%;\r\n  width: 1px;\r\n  background-color: #d9d9d9;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 2.5em;\r\n  z-index: -ț1;\r\n}\r\n\r\n.timeline li div {\r\n  display: inline-block;\r\n  margin: 1em 0;\r\n  vertical-align: top;\r\n}\r\n\r\n.timeline .bullet {\r\n  width: 1em;\r\n  height: 1em;\r\n  box-sizing: border-box;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  z-index: 1;\r\n  margin-right: 1em;\r\n  border: 2px solid #3868A6;\r\n}\r\n\r\n.timeline .time {\r\n  width: 20%;\r\n  font-size: 0.75em;\r\n  padding-top: 0.25em;\r\n}\r\n\r\n.timeline .desc {\r\n  width: 70%;\r\n}\r\n\r\n.timeline h3 {\r\n  font-size: 0.9em;\r\n  font-weight: 400;\r\n  margin: 0;\r\n}\r\n\r\n.timeline h4 {\r\n  margin: 0;\r\n  font-size: 0.7em;\r\n  font-weight: 400;\r\n}\r\n\r\n.timeline .people img {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.credits,\r\n.video {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  color: #808080;\r\n  font-size: 100%;\r\n  text-decoration: underline;\r\n}\r\n\r\n.credits {\r\n  left: 10px;\r\n}\r\n\r\n.video {\r\n  right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/education-timeline/education-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline\">\n  <ul>\n    <li *ngFor=\"let item of candidateEducation\">\n      <div class=\"bullet\"></div>\n      <div class=\"time cyan-text\" style=\"font-size:1em;\">{{item.periodFrom | date: 'MMM, yyyy'}} - {{item.periodTo | date: 'MMM, yyyy'}}</div>\n      <div class=\"desc\">\n        <h3 class=\"blue-text\" style=\"font-size:1.2em; font-weight: bolder; margin-bottom:2px;\">{{item.major}}</h3>\n        <h4 class=\"red-text\" style=\"font-size:1.0em; font-weight: bold; margin-bottom:8px;\" >@ {{item.institution}}</h4>\n        <p style=\"font-size:1.1em;\">\n          <strong class=\"blue-text\">Grade: </strong><span class=\"red-text\">{{item.grade}}</span>\n        </p>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/education-timeline/education-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationTimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationTimelineComponent = (function () {
    function EducationTimelineComponent() {
    }
    EducationTimelineComponent.prototype.ngOnInit = function () {
    };
    return EducationTimelineComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EducationTimelineComponent.prototype, "candidateEducation", void 0);
EducationTimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'education-timeline',
        template: __webpack_require__("../../../../../src/app/candidates/education-timeline/education-timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/education-timeline/education-timeline.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EducationTimelineComponent);

//# sourceMappingURL=education-timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/experience-timeline/experience-timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .timeline ul {\r\n      padding: 1em 0 0 2em;\r\n      margin: 0;\r\n      list-style: none;\r\n      position: relative;\r\n    }\r\n\r\n    .timeline ul::before {\r\n      content: ' ';\r\n      height: 100%;\r\n      width: 1px;\r\n      background-color: #d9d9d9;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 2.5em;\r\n      z-index: -ț1;\r\n    }\r\n\r\n    .timeline li div {\r\n      display: inline-block;\r\n      margin: 1em 0;\r\n      vertical-align: top;\r\n    }\r\n\r\n    .timeline .bullet {\r\n      width: 1em;\r\n      height: 1em;\r\n      box-sizing: border-box;\r\n      border-radius: 50%;\r\n      background: #fff;\r\n      z-index: 1;\r\n      margin-right: 1em;\r\n      border: 2px solid #3868A6;\r\n    }\r\n\r\n    .timeline .time {\r\n      width: 20%;\r\n      font-size: 0.75em;\r\n      padding-top: 0.25em;\r\n    }\r\n\r\n    .timeline .desc {\r\n      width: 70%;\r\n    }\r\n\r\n    .timeline h3 {\r\n      font-size: 0.9em;\r\n      font-weight: 400;\r\n      margin: 0;\r\n    }\r\n\r\n    .timeline h4 {\r\n      margin: 0;\r\n      font-size: 0.7em;\r\n      font-weight: 400;\r\n    }\r\n\r\n    .timeline .people img {\r\n      width: 30px;\r\n      height: 30px;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    .credits,\r\n    .video {\r\n      position: absolute;\r\n      bottom: 10px;\r\n      color: #808080;\r\n      font-size: 100%;\r\n      text-decoration: underline;\r\n    }\r\n\r\n    .credits {\r\n      left: 10px;\r\n    }\r\n\r\n    .video {\r\n      right: 10px;\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/experience-timeline/experience-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline\">\n  <ul>\n    <li *ngFor=\"let experience of candidateExperience\">\n      <div class=\"bullet\"></div>\n      <div class=\"time cyan-text\" style=\"font-size:1em;\">{{experience.periodFrom | date: 'MMM, yyyy'}} - {{experience.periodTo | date: 'MMM, yyyy'}}</div>\n      <div class=\"desc\">\n        <h3 class=\"blue-text\" style=\"font-size:1.2em; font-weight: bolder; margin-bottom:2px;\">{{experience.title}}</h3>\n        <h4 class=\"red-text\" style=\"font-size:1.0em; font-weight: bold; margin-bottom:8px;\" >@ {{experience.company}}</h4>\n        <p style=\"font-size:0.8em;\">{{experience.description}}</p>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/experience-timeline/experience-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceTimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceTimelineComponent = (function () {
    function ExperienceTimelineComponent() {
    }
    ExperienceTimelineComponent.prototype.ngOnInit = function () {
    };
    return ExperienceTimelineComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExperienceTimelineComponent.prototype, "candidateExperience", void 0);
ExperienceTimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'experience-timeline',
        template: __webpack_require__("../../../../../src/app/candidates/experience-timeline/experience-timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/experience-timeline/experience-timeline.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExperienceTimelineComponent);

//# sourceMappingURL=experience-timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Override panel*/\r\n.card {\r\n\tbox-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n  \r\n\r\n.numbers-first-part {\r\n\tfont-size:15px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.numbers-second-part {\r\n\tfont-size: 22px;\r\n\tfont-weight: bolder;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <a [routerLink]=\"['/positions']\" >\n                    <div class=\"card\">\n                        <div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-5\">\n                                    <div class=\"icon-big icon-warning text-center\">\n                                        <i class=\"ti-bookmark\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-7\">\n                                    <div class=\"numbers\">\n                                        <p class=\"numbers-first-part blue-text\">Available</p>\n                                        <p class=\"numbers-second-part red-text\">Positions</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <a [routerLink]=\"['/candidates']\" >\n                    <div class=\"card\">\n                        <div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-5\">\n                                    <div class=\"icon-big icon-danger text-center\">\n                                        <i class=\"ti-id-badge\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-7\">\n                                    <div class=\"numbers\">\n                                        <p class=\"numbers-first-part blue-text\">Current</p>\n                                        <p class=\"numbers-second-part red-text\">Candidates</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <a [routerLink]=\"['/interview']\" >\n                    <div class=\"card\">\n                        <div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-5\">\n                                    <div class=\"icon-big icon-success text-center\">\n                                        <i class=\"ti-bookmark\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-7\">\n                                    <div class=\"numbers\">\n                                        <p class=\"numbers-first-part blue-text\">Interview</p>\n                                        <p class=\"numbers-second-part red-text\">Structure</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <a [routerLink]=\"['/settings']\" >\n                    <div class=\"card\">\n                        <div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-5\">\n                                    <div class=\"icon-big icon-info text-center\">\n                                        <i class=\"ti-settings\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-7\">\n                                    <div class=\"numbers\">\n                                        <p class=\"numbers-first-part blue-text\">Edit</p>\n                                        <p class=\"numbers-second-part red-text\">Settings</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n\n        <div class=\"row\">                   \n            <div class=\"col-lg-6 col-sm-6\">\n                <a [routerLink]=\"['/questions']\" >\n                    <div class=\"card\">\n                        <div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-5\">\n                                    <div class=\"icon-big icon-success text-center\">\n                                        <i class=\"ti-help\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-7\">\n                                    <div class=\"numbers\">\n                                        <p class=\"numbers-first-part blue-text\">New</p>\n                                        <p class=\"numbers-second-part red-text\">Question</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>     \n            <div class=\"col-lg-6 col-sm-6\">\n                <a [routerLink]=\"['/positions','new']\" >\n                    <div class=\"card\">\n                        <div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-5\">\n                                    <div class=\"icon-big icon-warning text-center\">\n                                        <i class=\"ti-shine\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-7\">\n                                    <div class=\"numbers\">\n                                        <p class=\"numbers-first-part blue-text\">New</p>\n                                        <p class=\"numbers-second-part red-text\">Position</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12\">\n                <div class=\"card \">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Candidates</h4>\n                        <p class=\"category\">Total candidates applications in last 3 months.</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartActivity\" class=\"ct-chart\"></div>\n\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> SEP\n                                <i class=\"fa fa-circle text-warning\"></i> AUG\n                                <i class=\"fa fa-circle text-danger\"></i> JUL\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-check\"></i> {{date | date:'medium'}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card \">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Mappings</h4>\n                        <p class=\"category\">Url mappings for controllers</p>\n                    </div>\n                    <div class=\"content\">\n                        <ul class=\"list-no-bullets\">\n                            <li *ngFor=\"let url of urls\">\n                                {{url}}\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_router_utils__ = __webpack_require__("../../../../../src/app/util/router.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.currentDate = new Date();
        this.urls = new Array();
        this.urls.push("1.  GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidatesUrl());
        this.urls.push("2.  GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateUrl(1));
        this.urls.push("3.  GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateSkillsUrl(1));
        this.urls.push("4.  GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateInterestsUrl(1));
        this.urls.push("5.  GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateExperienceUrl(1));
        this.urls.push("6.  GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateEducationUrl(1));
        this.urls.push("7.  GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateLanguagesUrl(1));
        this.urls.push("8.  GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateCommentsUrl(1));
        this.urls.push("9.  POST   :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].createCommentUrl(1));
        this.urls.push("10. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateLikesUrl(1));
        this.urls.push("11. POST   :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].likeCandidateUrl(1));
        this.urls.push("12. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateRatingUrl(1));
        this.urls.push("13. POST   :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].rateCandidateUrl(1));
        this.urls.push("14. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateChatUrl(1));
        this.urls.push("15. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].positionsUrl());
        this.urls.push("16. POST   :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].createPositionUrl());
        this.urls.push("17. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].positionUrl(1));
        this.urls.push("18. DELETE :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].deletePositionUrl(1));
        this.urls.push("19. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].positionRequirementsUrl(1));
        this.urls.push("20. POST   :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].createPositionRequirementUrl(1));
        this.urls.push("21. DELETE :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].deletePositionRequirementUrl(1, 2));
        this.urls.push("22. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].positionCandidatesUrl(1));
        this.urls.push("23. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].questionsUrl());
        this.urls.push("24. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].questionUrl(1));
        this.urls.push("25. POST   :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].createQuestionUrl());
        this.urls.push("26. DELETE :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].deleteQuestionUrl(1));
        this.urls.push("27. GET    :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].repliesUrl(1));
        this.urls.push("28. POST   :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].createReplyUrl(1));
        this.urls.push("29. DELETE :" + __WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].deleteReplyUrl(1, 2));
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795],
                [832, 101, 105, 200, 230, 532, 470, 480, 450, 300, 200, 700]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#chartActivity', data, options, responsiveOptions);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/domain/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(author, avatarSrc, message, date) {
        this.author = author;
        this.avatarSrc = avatarSrc;
        this.message = message;
        this.date = date;
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/domain/position.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_constants__ = __webpack_require__("../../../../../src/app/util/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });

var Position = (function () {
    function Position(id, name, description, creationDate, image, lastUpdate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
        this.lastUpdate = lastUpdate;
        this.image = image;
        if (image === null) {
            this.image = __WEBPACK_IMPORTED_MODULE_0__util_constants__["c" /* POSITION_BACKGROUNDS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__util_constants__["c" /* POSITION_BACKGROUNDS */].length)];
        }
    }
    return Position;
}());

//# sourceMappingURL=position.js.map

/***/ }),

/***/ "../../../../../src/app/domain/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(id, position, query) {
        this.id = id;
        this.position = position;
        this.query = query;
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ "../../../../../src/app/domain/reply.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reply; });
var Reply = (function () {
    function Reply(id, question, replyMessage) {
        this.id = id;
        this.question = question;
        this.replyMessage = replyMessage;
    }
    return Reply;
}());

//# sourceMappingURL=reply.js.map

/***/ }),

/***/ "../../../../../src/app/domain/skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
var Skill = (function () {
    function Skill(name, level) {
        this.name = name;
        this.level = level;
    }
    return Skill;
}());

//# sourceMappingURL=skill.js.map

/***/ }),

/***/ "../../../../../src/app/domain/support.email.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email; });
var Email = (function () {
    function Email(address) {
        this.address = address;
    }
    return Email;
}());

//# sourceMappingURL=support.email.js.map

/***/ }),

/***/ "../../../../../src/app/domain/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_constants__ = __webpack_require__("../../../../../src/app/util/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });

var User = (function () {
    // TODO: avatar
    function User(id, firstName, lastName, email, password, avatar) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.setAvatar();
    }
    User.prototype.setAvatar = function () {
        if (Math.random() > 0.5) {
            this.avatar = __WEBPACK_IMPORTED_MODULE_0__util_constants__["a" /* MALE_AVATARS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__util_constants__["a" /* MALE_AVATARS */].length)];
        }
        else {
            this.avatar = __WEBPACK_IMPORTED_MODULE_0__util_constants__["b" /* FEMALE_AVATARS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__util_constants__["b" /* FEMALE_AVATARS */].length)];
        }
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/interview/edit-question/edit-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Override panel*/\r\n.card-user {\r\n\tbox-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n.image{\r\n    height: 60px;\r\n}\r\n\r\n  .form-add-question {\r\n\twidth: 100%;\r\n\tpadding-left:40px;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.notice {\r\n\tpadding: 15px;\r\n\tbackground-color: #fafafa;\r\n\tborder-left: 6px solid #7f7f84;\r\n\tmargin-bottom: 10px;\r\n\tborder-color: #6AB73E;\r\n\tbox-shadow: 0 5px 8px -6px rgba(0,0,0,.2);\r\n}\r\n\r\n.notice-sm {\r\n\tpadding: 10px;\r\n\tfont-size: 80%;\r\n}\r\n.notice-lg {\r\n\tpadding: 35px;\r\n\tfont-size: large;\r\n}\r\n\r\n.notice>strong {\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n.notice-moved {\r\n\tborder-color: #3868A6;\r\n}\r\n\r\n.position {\r\n\tpadding: 5px;\r\n\tpadding-left:10px;\r\n\tpadding-right:10px;\r\n\tborder-radius: 25%;\r\n\tmargin-right: 10px;\r\n\tbackground-color:#7f7f84;\r\n}\r\n\r\n.position-moved {\r\n\tbackground-color: #3868A6;\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n.question-buttons {\r\n\tmargin-top: -5px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.question-button button {\r\n\tcolor:#D03A43;\r\n\topacity: 0.9;\r\n}\r\n\r\n.question-buttons button:hover {\r\n\tcolor:#FFFFFF;\r\n\tbackground-color: #D03A43;\r\n\tborder-color: #D03A43;\r\n\topacity: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interview/edit-question/edit-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\r\n\t<div class=\"row\">\r\n\t\t<form class=\"form-inline form-edit-question\" role=\"form\" [formGroup] = \"editQuestionForm\">\r\n\t\t\t<div class=\"col-md-12 col-xs-12\">\r\n\t\t\t\t<div class=\"notice\">\r\n\t\t\t\t\t<strong class=\"position\">{{question.position}}</strong>\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<input type=\"text\" style=\"width: 95%;\" class=\"form-control\" formControlName=\"question\" value=\"{{question.query}}\">\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card card-user white-backgound\">\r\n\t\t\t\t<div class=\"image blue\">\r\n\t\t\t\t\t<h3 class=\"text-center white-text\" style=\"vertical-align: middle;\">Replies:</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"content\" style=\"height: 360px; overflow-y: hidden\">\r\n\t\t\t\t\t<div class=\"row\" style=\"padding-bottom:10px; padding-left:70px;\">\r\n\t\t\t\t\t\t<form class=\"form-inline form-add-reply\" role=\"form\" [formGroup] = \"addReplyForm\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\" style=\"width:80%\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  style=\"width:100%;\" formControlName=\"reply\" value=\"{{newReply}}\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\" style=\"width:15%\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-round red white-text\" style=\"width:100%;\" type=\"submit\" value=\"Add Reply\" (click)=\"addReply()\">Add new reply</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"replies\">\r\n\t\t\t\t\t\t<ol class=\"replies-list list-no-bullets\">\r\n\t\t\t\t\t\t\t<li *ngFor = \"let reply of questionReplies\" [attr.data-id]=\"reply.id\">\r\n\t\t\t\t\t\t\t\t<div class=\"notice\">\r\n\t\t\t\t\t\t\t\t\t{{reply.replyMessage}}\r\n\t\t\t\t\t\t\t\t\t<span class=\"question-buttons\" style=\"float:right; vertical-align: middle;\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"editReply(reply)\"></i></button>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"form-group\" style=\"width:100%;\">\r\n\t\t\t<button class=\"btn btn-round blue white-text\" style=\"width:100%;\" type=\"submit\" value=\"Save All\" (click)=\"saveAll()\">Save All</button>\r\n\t\t</div>\t\t\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/interview/edit-question/edit-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_reply__ = __webpack_require__("../../../../../src/app/domain/reply.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_questions_service__ = __webpack_require__("../../../../../src/app/services/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditQuestionComponent = (function () {
    function EditQuestionComponent(route, notificationService, questionService) {
        this.route = route;
        this.notificationService = notificationService;
        this.questionService = questionService;
    }
    EditQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) { return _this.questionId = params['id']; });
        this.questionService.getQuestion(this.questionId)
            .subscribe(function (data) { return _this.question = data; });
        this.questionService.getQuestionReplies(this.questionId)
            .subscribe(function (data) { return _this.questionReplies = data; });
    };
    /**
     * Init the form for adding a reply
     */
    EditQuestionComponent.prototype.initAddReplyForm = function () {
        this.addReplyForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            reply: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormControl */]()
        });
    };
    /**
     * Init the form for editing a question
     */
    EditQuestionComponent.prototype.initEditQuestionForm = function () {
        this.editQuestionForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            question: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormControl */]()
        });
    };
    /**
     * Add a reply in the list
     */
    EditQuestionComponent.prototype.addReply = function () {
        if (this.addReplyForm.value.reply) {
            var newReply = new __WEBPACK_IMPORTED_MODULE_2__domain_reply__["a" /* Reply */](null, this.question, this.addReplyForm.value.reply);
            this.questionReplies.push(newReply);
            this.initAddReplyForm();
        }
        else {
            console.log("not working");
        }
    };
    /**
     * Remove a specific {@code Reply} from the questionReplies List;
     * @param reply
     */
    EditQuestionComponent.prototype.removeReply = function (reply) {
        console.log("remove clicked");
        var replyIndex = this.questionReplies.indexOf(reply);
        this.questionReplies.splice(replyIndex, 1);
    };
    EditQuestionComponent.prototype.save = function () {
        this.notificationService.showSuccess("Save successfull");
    };
    return EditQuestionComponent;
}());
EditQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'edit-question',
        template: __webpack_require__("../../../../../src/app/interview/edit-question/edit-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/interview/edit-question/edit-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_questions_service__["a" /* QuestionsService */]) === "function" && _c || Object])
], EditQuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/interview/interview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-add-question {\r\n\twidth: 100%;\r\n\tpadding-left:40px;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.notice {\r\n\tpadding: 15px;\r\n\tbackground-color: #fafafa;\r\n\tborder-left: 6px solid #7f7f84;\r\n\tmargin-bottom: 10px;\r\n\tborder-color: #6AB73E;\r\n\tbox-shadow: 0 5px 8px -6px rgba(0,0,0,.2);\r\n}\r\n\r\n.notice-sm {\r\n\tpadding: 10px;\r\n\tfont-size: 80%;\r\n}\r\n.notice-lg {\r\n\tpadding: 35px;\r\n\tfont-size: large;\r\n}\r\n\r\n.notice>strong {\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n.notice-moved {\r\n\tborder-color: #3868A6;\r\n}\r\n\r\n.well-hint {\r\n\tbackground-color:#dcdcdc;\r\n\tmargin-left:40px;\r\n}\r\n\r\n.hint {\r\n\tcolor:#3868A6;\r\n}\r\n\r\n.hint-keyword {\r\n\tcolor:#D03A43;\r\n}\r\n\r\n.position {\r\n\tpadding: 5px;\r\n\tpadding-left:10px;\r\n\tpadding-right:10px;\r\n\tborder-radius: 25%;\r\n\tmargin-right: 10px;\r\n\tbackground-color:#7f7f84;\r\n}\r\n\r\n.position-moved {\r\n\tbackground-color: #3868A6;\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n.question-buttons {\r\n\tmargin-top: -5px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.question-button button {\r\n\tcolor:#D03A43;\r\n\topacity: 0.9;\r\n}\r\n\r\n.question-buttons button:hover {\r\n\tcolor:#FFFFFF;\r\n\tbackground-color: #D03A43;\r\n\tborder-color: #D03A43;\r\n\topacity: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interview/interview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <div class=\"row\">\n      <form class=\"form-inline form-add-question\" role=\"form\" [formGroup]=\"addQuestionForm\">\n        <div class=\"col-md-8\">  \n            <div class=\"form-group\" style=\"width:100%;\">\n              <input type=\"text\"  style=\"width:100%;\" class=\"form-control\" formControlName=\"question\" placeholder=\"Type in a question...\" required>\n            </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\" style=\"width:100%;\">\n            <button class=\"btn btn-round red white-text\" style=\"width:100%;\" type=\"submit\" value=\"Add Comment\" (click)=\"addQuestion()\">Add Question</button>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\" style=\"width:100%;\">\n            <button class=\"btn btn-round blue white-text\" style=\"width:100%;\" type=\"submit\" value=\"Save All\" (click)=\"saveAll()\">Save All</button>\n          </div>\n        </div>\n      </form>      \n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"well well-hint\">\n        <span class=\"hint\">Did you know you can use the following keywords in your text:</span>\n        <ul class=\"list-no-bullets\">\n          <li>\n            <span class=\"hint-keyword\">:candidate</span> to refer the candidate by his/hers name;\n          </li>\n          <li>\n            <span class=\"hint-keyword\">:candidate</span> to refer the candidate by his/hers name;\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <ol [dragula]=\"'questions-bag'\" [dragulaModel]=\"questions\" class=\"questions-list list-no-bullets\">\n    <li *ngFor=\"let question of questions\" [attr.data-id]=\"question.id\">\n        <div class=\"notice\">\n            <strong class=\"position\">{{question.position}}</strong> {{question.query}}\n            <span class=\"question-buttons\" style=\"float:right; vertical-align: middle;\">\n                <a [routerLink]=\"['/interview/edit-question/', question.id]\"><button type=\"button\" class=\"btn\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button></a>\n                <button type=\"button\" class=\"btn\"><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"removeQuestion(question)\"></i></button>\n            </span>\n        </div>\n    </li>\n  </ol>\n</div>"

/***/ }),

/***/ "../../../../../src/app/interview/interview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_components_dragula_provider__ = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_components_dragula_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_components_dragula_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_questions_service__ = __webpack_require__("../../../../../src/app/services/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_question__ = __webpack_require__("../../../../../src/app/domain/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InterviewComponent = (function () {
    function InterviewComponent(questionService, dragulaService, notificationService) {
        this.questionService = questionService;
        this.dragulaService = dragulaService;
        this.notificationService = notificationService;
        this.dragulaService.setOptions('questions-bag', {
            revertOnSpill: true
        });
    }
    InterviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions()
            .subscribe(function (data) { return _this.questions = data; });
        this.dragulaService
            .drop
            .subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
        this.dragulaService
            .dropModel
            .subscribe(function (value) {
            _this.updateOrder();
        });
        this.initAddQuestionForm();
    };
    InterviewComponent.prototype.initAddQuestionForm = function () {
        this.addQuestionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            question: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]()
        });
    };
    /**
     * Destroy the bag when leaving the component so that
     * ng-dragula doesn't double initialize
     */
    InterviewComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('questions-bag');
    };
    /**
     * Adds a question in the list
     */
    InterviewComponent.prototype.addQuestion = function () {
        if (this.addQuestionForm.value.question) {
            var newQuestion = new __WEBPACK_IMPORTED_MODULE_4__domain_question__["a" /* Question */](null, this.questions.length + 1, this.addQuestionForm.value.question);
            this.questions.push(newQuestion);
            this.initAddQuestionForm();
        }
        else {
            console.log("not working");
        }
    };
    /**
     * Removes a question from the list
     * @param question
     */
    InterviewComponent.prototype.removeQuestion = function (question) {
        console.log("remove clicked");
        var index = this.questions.indexOf(question);
        if (index !== 1) {
            this.questions.splice(index, 1);
        }
        this.updateOrder();
    };
    /**
     * Updates the positions of the questions relative to
     * their position in the UI
     */
    InterviewComponent.prototype.updateOrder = function () {
        var i = 1;
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            question.position = i;
            i++;
        }
    };
    /**
     * Checks if a UI element has a style class attached to it
     * @param el
     * @param name
     */
    InterviewComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    /**
     * Adds a style class to an UI element
     * @param el
     * @param name
     */
    InterviewComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    /**
     * Removes a style class from a UI element
     * @param el
     * @param name
     */
    InterviewComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    /**
     * On drop event for a question
     * @param args
     */
    InterviewComponent.prototype.onDrop = function (args) {
        var e = args[0];
        var notice = e.children[0];
        var position = notice.children[0];
        this.addClass(notice, 'notice-moved');
        this.addClass(position, 'position-moved');
    };
    /**
     * Save all questions in the list and update their positions
     */
    InterviewComponent.prototype.saveAll = function () {
        this.notificationService.showSuccess("Save succesful");
        //this.questions.dbSaveAdicaAjaxCall();
    };
    return InterviewComponent;
}());
InterviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'interview',
        template: __webpack_require__("../../../../../src/app/interview/interview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/interview/interview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_questions_service__["a" /* QuestionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_components_dragula_provider__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_components_dragula_provider__["DragulaService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], InterviewComponent);

var _a, _b, _c;
//# sourceMappingURL=interview.component.js.map

/***/ }),

/***/ "../../../../../src/app/positions/create-position/create-position.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/positions/create-position/create-position.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  create-position works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/positions/create-position/create-position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_positions_service__ = __webpack_require__("../../../../../src/app/services/positions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_messages__ = __webpack_require__("../../../../../src/app/util/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_skill_service__ = __webpack_require__("../../../../../src/app/services/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_skill__ = __webpack_require__("../../../../../src/app/domain/skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_store_service__ = __webpack_require__("../../../../../src/app/app-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__domain_position__ = __webpack_require__("../../../../../src/app/domain/position.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_messages__ = __webpack_require__("../../../../../src/app/util/messages.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePositionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CreatePositionComponent = (function () {
    function CreatePositionComponent(router, skillService, positionService, appStore, notificationService) {
        this.router = router;
        this.skillService = skillService;
        this.positionService = positionService;
        this.appStore = appStore;
        this.notificationService = notificationService;
    }
    CreatePositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skillService.getAllSkills()
            .subscribe(function (data) { return _this.existingSkills = data; });
        this.positionRequirements = new Array();
        this.initPositionForm();
        this.initSkillForm();
        this.appStore.getLoggedInUser().subscribe(function (user) { return _this.user = user; });
    };
    CreatePositionComponent.prototype.initPositionForm = function () {
        this.positionForm = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormControl */]()
        });
    };
    ;
    CreatePositionComponent.prototype.initSkillForm = function () {
        this.skillForm = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormGroup */]({
            skillName: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormControl */](),
            level: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormControl */]()
        });
    };
    ;
    CreatePositionComponent.prototype.addPosition = function () {
        var _this = this;
        if (this.positionForm.value.name && this.positionForm.value.description) {
            var newPosition = new __WEBPACK_IMPORTED_MODULE_9__domain_position__["a" /* Position */](null, this.positionForm.value.name, this.positionForm.value.description, new Date(), null, new Date());
            this.positionService.createPosition(newPosition)
                .subscribe(function (position) { return _this.position = position; });
            this.notificationService.showSuccess(__WEBPACK_IMPORTED_MODULE_2__util_messages__["a" /* POSITION_SAVED */]);
        }
        else {
            this.notificationService.showError(__WEBPACK_IMPORTED_MODULE_2__util_messages__["b" /* POSITION_NOT_SAVED */]);
        }
    };
    ;
    CreatePositionComponent.prototype.addSkill = function () {
        if (this.skillForm.value.skillName && this.skillForm.value.level) {
            var skill = new __WEBPACK_IMPORTED_MODULE_5__domain_skill__["a" /* Skill */](this.skillForm.value.skillName, this.skillForm.value.level);
            this.positionRequirements.push(skill);
            this.notificationService.showInfo(__WEBPACK_IMPORTED_MODULE_10__util_messages__["c" /* SKILL_ADDED */]);
            this.initSkillForm();
        }
        else {
            this.notificationService.showError(__WEBPACK_IMPORTED_MODULE_2__util_messages__["d" /* SKILL_NOT_ADDED */]);
        }
    };
    CreatePositionComponent.prototype.saveSkills = function () {
        if (this.position.id != 0 || this.position.id != null) {
            this.skillService.createSkillsForPosition(this.position.id, this.positionRequirements);
            this.initSkillForm();
            this.initPositionForm();
            this.notificationService.showSuccess(__WEBPACK_IMPORTED_MODULE_2__util_messages__["e" /* SKILLS_SAVED */]);
            this.router.navigate(["/positions"]);
        }
        else {
            this.notificationService.showError(__WEBPACK_IMPORTED_MODULE_2__util_messages__["f" /* POSITION_NOT_EXISTING */]);
        }
    };
    return CreatePositionComponent;
}());
CreatePositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'create-position',
        template: __webpack_require__("../../../../../src/app/positions/create-position/create-position.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/create-position/create-position.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_skill_service__["a" /* SkillService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_skill_service__["a" /* SkillService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_positions_service__["a" /* PositionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_positions_service__["a" /* PositionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__app_store_service__["a" /* AppStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_store_service__["a" /* AppStoreService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], CreatePositionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-position.component.js.map

/***/ }),

/***/ "../../../../../src/app/positions/edit-position/edit-position.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin: 0 auto;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 3em;\r\n  max-height: 550px;\r\n}\r\n\r\n.card .card-content {\r\n  position: relative;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  margin-top: 2%;\r\n  padding-bottom: 8%;\r\n  overflow: hidden;\r\n  min-height: 200px;\r\n  max-height: 370px;\r\n}\r\n\r\n.card .card-content .card-content-name {\r\n  font-size: 25px;\r\n}\r\n\r\n.card .card-content .card-content-job {\r\n  max-height: 150px;\r\n  color: #9575CD;\r\n  font-size: 15px;\r\n}\r\n\r\n.card .card-content p {\r\n  margin: 0;\r\n  z-index: 2;\r\n}\r\n\r\n.card .card-content .card-content-button:focus {\r\n  outline: none;\r\n}\r\n\r\n.card .card-image {\r\n  width: 100%;\r\n  position: relative;\r\n  margin-bottom: -1%;\r\n  z-index: 2;\r\n  transition: z-index 0s 0.2s;\r\n  background-color: #000000;\r\n}\r\n\r\n.card .card-image img {\r\n  width: 100%;\r\n  opacity: 0.5;\r\n}\r\n\r\n.image {\r\n  position: relative;\r\n  max-height: 120px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.overlay {\r\n  border-top-left-radius: 500px;\r\n  border-top-right-radius: 500px;\r\n  z-index: 999999;\r\n  position: absolute;\r\n  color: yellow;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  left: 150px;\r\n  top: 350px;\r\n  display: block;\r\n}\r\n\r\n.requirements-list {\r\n  max-height: 145px;\r\n}\r\n\r\n.contact-card {\r\n  max-width: 100%;\r\n  background: #fff;\r\n  padding: 8px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px silver;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.contact-card-image {\r\n  width: 50px;\r\n  height: 50px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  margin-right: 15px;\r\n  overflow: hidden;\r\n}\r\n\r\n.contact-card-image img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.contact-card-name {\r\n  text-transform: capitalize;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/positions/edit-position/edit-position.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img [src]=\"position.image\" alt=\"{{position.name}}\" class=\"image darken\">\n        <p class=\"overlay\">{{position.name}}</p>\n      </div>\n      <div class=\"card-content\">\n        <p class=\"card-content-job\">{{position.description}}</p>\n        <h4 class=\"red-text\">Requirements</h4>\n        <ul class=\"requirements-list list-no-bullets\">\n          <li *ngFor=\"let requirement of position.requirements\">\n            <i class=\"ti-check-box\"></i>\n              <span>\n                <span class=\"blue-text\">{{requirement.level}}</span>\n                @ \n                <span>{{requirement.name}}</span>\n              </span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "../../../../../src/app/positions/edit-position/edit-position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_skill_service__ = __webpack_require__("../../../../../src/app/services/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_positions_service__ = __webpack_require__("../../../../../src/app/services/positions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPositionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPositionComponent = (function () {
    function EditPositionComponent(route, positionsService, skillService) {
        this.route = route;
        this.positionsService = positionsService;
        this.skillService = skillService;
    }
    EditPositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) { return _this.positionId = params['id']; });
        this.positionsService.getPosition(this.positionId)
            .subscribe(function (data) { return _this.position = data; });
        this.skillService.getAllSkills()
            .subscribe(function (data) { return _this.skillList = data; });
    };
    return EditPositionComponent;
}());
EditPositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'edit-position',
        template: __webpack_require__("../../../../../src/app/positions/edit-position/edit-position.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/edit-position/edit-position.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_positions_service__["a" /* PositionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_positions_service__["a" /* PositionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_skill_service__["a" /* SkillService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_skill_service__["a" /* SkillService */]) === "function" && _c || Object])
], EditPositionComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-position.component.js.map

/***/ }),

/***/ "../../../../../src/app/positions/position-card/position-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin: 0 auto;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 3em;\r\n}\r\n.card .card-content {\r\n  position: relative;\r\n  padding: 5%;\r\n  padding-top: 15%;\r\n  margin-top: -10%;\r\n  padding-bottom: 8%;\r\n  overflow: hidden;\r\n  min-height: 200px;\r\n}\r\n\r\n.card .card-content .card-content-button {\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n  color: white;\r\n  position: absolute;\r\n  right: 4%;\r\n  top: 17px;\r\n  z-index: 3;\r\n  transition-duration: 0.2s;\r\n}\r\n.card .card-content .card-content-button i {\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.card .card-content .card-content-name {\r\n  font-size: 25px;\r\n}\r\n.card .card-content .card-content-job {\r\n  color: #9575CD;\r\n  font-size: 15px;\r\n}\r\n.card .card-content p {\r\n  margin: 0;\r\n  z-index: 2;\r\n}\r\n.card .card-content .card-content-button:focus {\r\n  outline: none;\r\n}\r\n.card .card-image {\r\n  width: 100%;\r\n  position: relative;\r\n  margin-bottom: -1%;\r\n  z-index: 2;\r\n  transition: z-index 0s 0.2s;\r\n}\r\n.card .card-image i {\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 5%;\r\n  color: white;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n}\r\n.card .card-image img {\r\n  width: 100%;\r\n}\r\n\r\n.image {\r\n  max-height: 200px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-top-left-radius: 25px;\r\n  border-top-right-radius: 25px;\r\n}\r\n\r\n.button-first {\r\n  margin-right: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/positions/position-card/position-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-sm-6 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-image\">\n      <img [src]=\"position.image\" alt=\"{{position.name}}\" class=\"image\">\n    </div>\n    <div class=\"card-content\">\n      <a [routerLink]=\"['/positions/edit-position', position.id]\" >\n        <button class=\"card-content-button red button-first\">\n          <i class=\"material-icons\">Edit</i>\n        </button>\n      </a>\n      <a [routerLink]=\"['/positions', position.id]\" >\n        <button class=\"card-content-button red blue\">\n          <i class=\"material-icons\">View</i>\n        </button>\n      </a>\n      <p class=\"card-content-name red-text\">{{position.name}}</p>\n      <p class=\"card-content-job\">{{position.description}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/positions/position-card/position-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_position__ = __webpack_require__("../../../../../src/app/domain/position.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positions_component__ = __webpack_require__("../../../../../src/app/positions/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionCardComponent = (function () {
    function PositionCardComponent(positionsComponent) {
        this.positionsComponent = positionsComponent;
    }
    PositionCardComponent.prototype.ngOnInit = function () {
    };
    return PositionCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__domain_position__["a" /* Position */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__domain_position__["a" /* Position */]) === "function" && _a || Object)
], PositionCardComponent.prototype, "position", void 0);
PositionCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'position-card',
        template: __webpack_require__("../../../../../src/app/positions/position-card/position-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/position-card/position-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__positions_component__["a" /* PositionsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__positions_component__["a" /* PositionsComponent */]) === "function" && _b || Object])
], PositionCardComponent);

var _a, _b;
//# sourceMappingURL=position-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/positions/position-view/position-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin: 0 auto;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 3em;\r\n  max-height: 550px;\r\n}\r\n\r\n.card .card-content {\r\n  position: relative;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  margin-top: 2%;\r\n  padding-bottom: 8%;\r\n  overflow: hidden;\r\n  min-height: 200px;\r\n  max-height: 370px;\r\n}\r\n\r\n.card .card-content .card-content-name {\r\n  font-size: 25px;\r\n}\r\n\r\n.card .card-content .card-content-job {\r\n  max-height: 150px;\r\n  color: #9575CD;\r\n  font-size: 15px;\r\n}\r\n\r\n.card .card-content p {\r\n  margin: 0;\r\n  z-index: 2;\r\n}\r\n\r\n.card .card-content .card-content-button:focus {\r\n  outline: none;\r\n}\r\n\r\n.card .card-image {\r\n  width: 100%;\r\n  position: relative;\r\n  margin-bottom: -1%;\r\n  z-index: 2;\r\n  transition: z-index 0s 0.2s;\r\n  background-color: #000000;\r\n}\r\n\r\n.card .card-image img {\r\n  width: 100%;\r\n  opacity: 0.5;\r\n}\r\n\r\n.image {\r\n  position: relative;\r\n  max-height: 120px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n/* Centered text */\r\n.centered {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n\tfont-size: 24px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.requirements-list {\r\n  max-height: 145px;\r\n}\r\n\r\n.contact-card {\r\n  max-width: 100%;\r\n  background: #fff;\r\n  padding: 8px;\r\n  margin-left:4px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px silver;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.contact-card-image {\r\n  width: 50px;\r\n  height: 50px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  margin-right: 15px;\r\n  overflow: hidden;\r\n  border-radius: 25px;\r\n}\r\n\r\n.contact-card-image img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.contact-card-name {\r\n  text-transform: capitalize;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/positions/position-view/position-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-7 col-sm-7 col-xs-12\">\r\n\t<div class=\"card\">\r\n\t\t<div class=\"card-image\">\r\n\t\t\t<img [src]=\"position?.image || ''\" alt=\"{{position?.name}}\" class=\"image darken\">\r\n\t\t\t<p class=\"centered\">{{position?.name}}</p>\r\n\t\t</div>\r\n\t\t<div class=\"card-content\">\r\n\t\t\t<p class=\"card-content-job\">{{position?.description}}</p>\r\n\t\t\t<h4 class=\"red-text\">Requirements</h4>\r\n\t\t\t<ul class=\"requirements-list list-no-bullets\">\r\n\t\t\t<li *ngFor=\"let requirement of positionRequirements\">\r\n\t\t\t\t<i class=\"ti-check-box\"></i>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<span class=\"blue-text\">{{requirement?.level}}</span>\r\n\t\t\t\t\t@ \r\n\t\t\t\t\t<span>{{requirement?.name}}</span>\r\n\t\t\t\t</span>\r\n\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"col-md-5 col-sm-5 col-xs-12\">\r\n\t<div class=\"card card-user white-backgound\">\r\n\t\t<div class=\"image red\">\r\n\t\t\t<h2 class=\"text-center white-text\" style=\"vertical-align: middle;\">Candidates</h2>\r\n\t\t</div>\r\n\t\t<div class=\"content\" style=\"height: 367px; overflow-y: scroll\">\r\n\t\t\t<div class=\"row contact-card\" *ngFor=\"let cs of candidateScores\">\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<img [src]=\"cs.candidate.avatar\" class=\"contact-card-image\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 contact-card-info\">\r\n\t\t\t\t\t<div class=\"contact-card-name\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/candidates', cs.candidate.id]\">{{cs.candidate.firstName}} {{cs.candidate.lastName}}</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"contact-card-number\">{{cs.candidate.email.address}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\" style=\"max-height: 50px; margin-left:25px; float:right;\">\r\n\t\t\t\t\t<p class=\"blue-text\"><strong>Score:</strong></p>\r\n\t\t\t\t\t<p class=\"red-text\">{{cs.score}}/100</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/positions/position-view/position-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_positions_service__ = __webpack_require__("../../../../../src/app/services/positions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionViewComponent = (function () {
    function PositionViewComponent(route, positionsService) {
        this.route = route;
        this.positionsService = positionsService;
    }
    PositionViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //api call
        this.route.params.forEach(function (params) { return _this.positionId = params['id']; });
        this.positionsService.getPosition(this.positionId)
            .subscribe(function (data) { return _this.position = data; });
        this.positionsService.getPositionCandidates(this.positionId)
            .subscribe(function (data) { return _this.candidateScores = data; });
        this.positionsService.getPositionRequirements(this.positionId)
            .subscribe(function (data) { return _this.positionRequirements = data; });
    };
    return PositionViewComponent;
}());
PositionViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'position-view',
        template: __webpack_require__("../../../../../src/app/positions/position-view/position-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/position-view/position-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_positions_service__["a" /* PositionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_positions_service__["a" /* PositionsService */]) === "function" && _b || Object])
], PositionViewComponent);

var _a, _b;
//# sourceMappingURL=position-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/positions/positions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/positions/positions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngFor=\"let positionRow of positions\" class=\"row active-with-click\">\n    <position-card *ngFor=\"let position of positionRow\" [position]=\"position\"></position-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/positions/positions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_positions_service__ = __webpack_require__("../../../../../src/app/services/positions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionsComponent = (function () {
    function PositionsComponent(positionsService) {
        this.positionsService = positionsService;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.positionsService.getPositions()
            .subscribe(function (data) { return _this.positions = data; });
    };
    return PositionsComponent;
}());
PositionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'positions',
        template: __webpack_require__("../../../../../src/app/positions/positions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/positions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_positions_service__["a" /* PositionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_positions_service__["a" /* PositionsService */]) === "function" && _a || Object])
], PositionsComponent);

var _a;
//# sourceMappingURL=positions.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/candidates.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_router_utils__ = __webpack_require__("../../../../../src/app/util/router.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidatesService = (function () {
    function CandidatesService(http) {
        this.http = http;
    }
    CandidatesService.prototype.getCandidate = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidates = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidatesUrl())
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateSkills = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateSkillsUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateEducation = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateEducationUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateInterests = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateInterestsUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateExperience = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateExperienceUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateLanguages = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateLanguagesUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateComments = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateCommentsUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateLikesNumber = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateLikesUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateCommentsNumber = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateCommentsNumberUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    CandidatesService.prototype.getCandidateRating = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateRatingUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    return CandidatesService;
}());
CandidatesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CandidatesService);

var _a;
//# sourceMappingURL=candidates.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_router_utils__ = __webpack_require__("../../../../../src/app/util/router.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getConversation = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateChatUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.showInfo = function (notificationMessage) {
        $.notify({
            icon: "ti-gift",
            message: notificationMessage
        }, {
            type: 'info',
            timer: 4000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    };
    NotificationService.prototype.showSuccess = function (notificationMessage) {
        $.notify({
            icon: "ti-gift",
            message: notificationMessage
        }, {
            type: 'success',
            timer: 4000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    };
    NotificationService.prototype.showError = function (notificationMessage) {
        $.notify({
            icon: "ti-gift",
            message: notificationMessage
        }, {
            type: 'danger',
            timer: 4000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/positions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_router_utils__ = __webpack_require__("../../../../../src/app/util/router.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionsService = (function () {
    function PositionsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    PositionsService.prototype.getPosition = function (positionId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].positionUrl(positionId))
            .map(function (res) { return res.json(); });
    };
    PositionsService.prototype.createPosition = function (position) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].createPositionUrl(), JSON.stringify(position), this.options)
            .map(function (res) { return res.json(); });
    };
    PositionsService.prototype.deletePosition = function (positionId) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].deletePositionUrl(positionId))
            .map(function (res) { return res.json(); });
    };
    PositionsService.prototype.getPositions = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].positionsUrl())
            .map(function (res) { return res.json(); });
    };
    PositionsService.prototype.getPositionCandidates = function (positionId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].positionCandidatesUrl(positionId))
            .map(function (res) { return res.json(); });
    };
    PositionsService.prototype.getPositionRequirements = function (positionId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].positionRequirementsUrl(positionId))
            .map(function (res) { return res.json(); });
    };
    return PositionsService;
}());
PositionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PositionsService);

var _a;
//# sourceMappingURL=positions.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/questions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_router_utils__ = __webpack_require__("../../../../../src/app/util/router.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsService = (function () {
    function QuestionsService(http) {
        this.http = http;
    }
    QuestionsService.prototype.getQuestions = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].questionsUrl())
            .map(function (res) { return res.json(); });
    };
    QuestionsService.prototype.getQuestion = function (questionId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].questionUrl(questionId))
            .map(function (res) { return res.json(); });
    };
    // TODO: replace any with Reply model
    QuestionsService.prototype.getQuestionReplies = function (questionId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].repliesUrl(questionId))
            .map(function (res) { return res.json(); });
    };
    return QuestionsService;
}());
QuestionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuestionsService);

var _a;
//# sourceMappingURL=questions.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/skill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_router_utils__ = __webpack_require__("../../../../../src/app/util/router.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillService = (function () {
    function SkillService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    SkillService.prototype.getAllSkills = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].allSkillsUrl())
            .map(function (res) { return res.json(); });
    };
    // TODO: add skill routings
    SkillService.prototype.getSkillsForCandidate = function (candidateId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateSkillsUrl(candidateId))
            .map(function (res) { return res.json(); });
    };
    SkillService.prototype.createSkillsForPosition = function (positionId, skills) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].createPositionRequirementsBulkUrl(positionId), JSON.stringify(skills), this.options)
            .map(function (res) { return res.json(); });
    };
    return SkillService;
}());
SkillService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SkillService);

var _a;
//# sourceMappingURL=skill.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; Today, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.test = new Date();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle red-text\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n            <a class=\"navbar-brand red-text\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"ti-bell\"></i>\n                            <p class=\"notification\">5</p>\n                            <p>Notifications</p>\n                            <b class=\"caret\"></b>\n                      </a>\n                      <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                      </ul>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"../../assets/img/angular.png\" alt=\"\">\n            </div>\n            HR-Ninja\n        </a>\n    </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', class: '' },
    { path: 'positions', title: 'Available Positions', icon: 'ti-announcement', class: '' },
    { path: 'candidates', title: 'Candidates', icon: 'ti-user', class: '' },
    { path: 'interview', title: 'Interview', icon: 'ti-notepad', class: '' },
    { path: 'settings', title: 'Profile Settings', icon: 'ti-settings', class: '' }
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html")
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/util/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MALE_AVATARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEMALE_AVATARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return POSITION_BACKGROUNDS; });
var MALE_AVATARS = [
    'assets/img/faces/mCandidate1.png',
    'assets/img/faces/mCandidate2.png',
    'assets/img/faces/mCandidate3.png',
    'assets/img/faces/mCandidate4.png',
    'assets/img/faces/mCandidate5.png',
    'assets/img/faces/mCandidate6.png',
    'assets/img/faces/mCandidate7.png'
];
var FEMALE_AVATARS = [
    'assets/img/faces/fCandidate1.png',
    'assets/img/faces/fCandidate2.png',
    'assets/img/faces/fCandidate3.png',
    'assets/img/faces/fCandidate4.png',
    'assets/img/faces/fCandidate5.png',
    'assets/img/faces/fCandidate6.png',
    'assets/img/faces/fCandidate7.png'
];
var POSITION_BACKGROUNDS = [
    'assets/img/pos-bg/1.jpg',
    'assets/img/pos-bg/2.png',
    'assets/img/pos-bg/3.png',
    'assets/img/pos-bg/4.jpg',
    'assets/img/pos-bg/5.png',
    'assets/img/pos-bg/6.jpg'
];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/util/messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COMMENT_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COMMENT_NOT_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POSITION_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POSITION_NOT_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return POSITION_NOT_EXISTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SKILL_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SKILL_NOT_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SKILLS_SAVED; });
/* unused harmony export SKILLS_NOT_SAVED */
var COMMENT_SAVED = "The comment was saved";
var COMMENT_NOT_SAVED = "The comment was not saved. Please try again!";
var POSITION_SAVED = "The position was saved";
var POSITION_NOT_SAVED = "Uuups. Something went terribly wrong. Please try again";
var POSITION_NOT_EXISTING = "Please add the position first";
var SKILL_ADDED = "The skill was added. Don't forget to save!!!";
var SKILL_NOT_ADDED = "The skill was not added. Please try again!";
var SKILLS_SAVED = "The skills were saved!";
var SKILLS_NOT_SAVED = "The skills were not saved. Please try again!";
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "../../../../../src/app/util/router.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterUtils; });

var RouterUtils = (function () {
    function RouterUtils() {
    }
    RouterUtils.candidatesUrl = function () {
        return this.baseUrl + this.candidates;
    };
    RouterUtils.candidateUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId;
    };
    RouterUtils.candidateSkillsUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.skills;
    };
    RouterUtils.candidateInterestsUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.interests;
    };
    RouterUtils.candidateExperienceUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.experience;
    };
    RouterUtils.candidateEducationUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.education;
    };
    RouterUtils.candidateLanguagesUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.languages;
    };
    RouterUtils.candidateCommentsUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.comments;
    };
    RouterUtils.candidateCommentsNumberUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.commentsNumber;
    };
    RouterUtils.createCommentUrl = function (candidateId) {
        return this.candidateCommentsUrl(candidateId);
    };
    RouterUtils.candidateLikesUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.likes;
    };
    RouterUtils.likeCandidateUrl = function (candidateId) {
        return this.candidateLikesUrl(candidateId);
    };
    RouterUtils.candidateRatingUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.rating;
    };
    RouterUtils.rateCandidateUrl = function (candidateId) {
        return this.candidateRatingUrl(candidateId);
    };
    RouterUtils.candidateChatUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.chat;
    };
    RouterUtils.allSkillsUrl = function () {
        return this.baseUrl + this.allSkillsUrl;
    };
    RouterUtils.positionsUrl = function () {
        return this.baseUrl + this.positions;
    };
    RouterUtils.positionUrl = function (positionId) {
        return this.baseUrl + this.position + positionId;
    };
    RouterUtils.createPositionUrl = function () {
        return this.positionsUrl();
    };
    RouterUtils.deletePositionUrl = function (positionId) {
        return this.positionUrl(positionId);
    };
    RouterUtils.positionRequirementsUrl = function (positionId) {
        return this.baseUrl + this.position + positionId + this.positionRequirements;
    };
    RouterUtils.createPositionRequirementUrl = function (positionId) {
        return this.positionRequirementsUrl(positionId);
    };
    RouterUtils.createPositionRequirementsBulkUrl = function (positionId) {
        return this.createPositionRequirementsBulkUrl(positionId);
    };
    RouterUtils.deletePositionRequirementUrl = function (positionId, skillId) {
        return this.positionRequirementsUrl(positionId) + "/" + skillId;
    };
    RouterUtils.positionCandidatesUrl = function (positionId) {
        return this.baseUrl + this.position + positionId + this.positionCandidates;
    };
    RouterUtils.questionsUrl = function () {
        return this.baseUrl + this.questions;
    };
    RouterUtils.questionUrl = function (questionId) {
        return this.baseUrl + this.question + questionId;
    };
    RouterUtils.createQuestionUrl = function () {
        return this.questionsUrl();
    };
    RouterUtils.deleteQuestionUrl = function (questionId) {
        return this.questionUrl(questionId);
    };
    RouterUtils.repliesUrl = function (questionId) {
        return this.baseUrl + this.question + questionId + this.replies;
    };
    RouterUtils.createReplyUrl = function (questionId) {
        return this.repliesUrl(questionId);
    };
    RouterUtils.deleteReplyUrl = function (questionId, replyId) {
        return this.repliesUrl(questionId) + "/" + replyId;
    };
    return RouterUtils;
}());

RouterUtils.baseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].herokuUrl ? "https://recruitingmessbot.herokuapp.com/api" : "http://localhost:8080/api";
RouterUtils.candidates = "/candidates";
RouterUtils.candidate = "/candidates/";
RouterUtils.skills = "/skills/";
RouterUtils.interests = "/interests";
RouterUtils.experience = "/experience";
RouterUtils.education = "/education";
RouterUtils.languages = "/languages";
RouterUtils.comments = "/comments";
RouterUtils.commentsNumber = "/noComments";
RouterUtils.likes = "/likes";
RouterUtils.rating = "/rating";
RouterUtils.chat = "/chat";
RouterUtils.positions = "/positions";
RouterUtils.position = "/positions/";
RouterUtils.positionRequirements = "/skills";
RouterUtils.savePositionRequirementsBulk = '/skillsBulk';
RouterUtils.positionCandidates = "/candidates";
RouterUtils.questions = "/questions";
RouterUtils.question = "/questions/";
RouterUtils.replies = "/replies";
//# sourceMappingURL=router.utils.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    herokuUrl: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map