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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_user__ = __webpack_require__("../../../../../src/app/domain/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        var dummyUser = new __WEBPACK_IMPORTED_MODULE_2__domain_user__["a" /* User */](0, "Andrei", "Popescu", "andrei.popescu93@gmail.com");
        this.dataStore = { loggedInUser: dummyUser };
        this._loggedUser = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](dummyUser);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__positions_candidate_list_item_candidate_list_item_component__ = __webpack_require__("../../../../../src/app/positions/candidate-list-item/candidate-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__candidates_experience_timeline_experience_timeline_component__ = __webpack_require__("../../../../../src/app/candidates/experience-timeline/experience-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_store_service__ = __webpack_require__("../../../../../src/app/app-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__candidates_comment_view_comment_view_component__ = __webpack_require__("../../../../../src/app/candidates/comment-view/comment-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__candidates_education_timeline_education_timeline_component__ = __webpack_require__("../../../../../src/app/candidates/education-timeline/education-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__candidates_candidate_card_candidate_card_component__ = __webpack_require__("../../../../../src/app/candidates/candidate-card/candidate-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__interview_interview_component__ = __webpack_require__("../../../../../src/app/interview/interview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__positions_positions_component__ = __webpack_require__("../../../../../src/app/positions/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__candidates_candidate_view_candidate_view_component__ = __webpack_require__("../../../../../src/app/candidates/candidate-view/candidate-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__candidates_candidates_component__ = __webpack_require__("../../../../../src/app/candidates/candidates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_27__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_29__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_34__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__candidates_candidates_component__["a" /* CandidatesComponent */], __WEBPACK_IMPORTED_MODULE_18__candidates_candidate_card_candidate_card_component__["a" /* CandidateCardComponent */], __WEBPACK_IMPORTED_MODULE_16__candidates_comment_view_comment_view_component__["a" /* CommentViewComponent */], __WEBPACK_IMPORTED_MODULE_8__candidates_chat_view_chat_view_component__["a" /* ChatViewComponent */], __WEBPACK_IMPORTED_MODULE_14__candidates_experience_timeline_experience_timeline_component__["a" /* ExperienceTimelineComponent */], __WEBPACK_IMPORTED_MODULE_17__candidates_education_timeline_education_timeline_component__["a" /* EducationTimelineComponent */], __WEBPACK_IMPORTED_MODULE_22__candidates_candidate_view_candidate_view_component__["a" /* CandidateViewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__positions_positions_component__["a" /* PositionsComponent */], __WEBPACK_IMPORTED_MODULE_12__positions_position_card_position_card_component__["a" /* PositionCardComponent */], __WEBPACK_IMPORTED_MODULE_11__positions_position_view_position_view_component__["a" /* PositionViewComponent */], __WEBPACK_IMPORTED_MODULE_13__positions_candidate_list_item_candidate_list_item_component__["a" /* CandidateListItemComponent */], __WEBPACK_IMPORTED_MODULE_3__positions_create_position_create_position_component__["a" /* CreatePositionComponent */], __WEBPACK_IMPORTED_MODULE_1__positions_edit_position_edit_position_component__["a" /* EditPositionComponent */],
            __WEBPACK_IMPORTED_MODULE_19__interview_interview_component__["a" /* InterviewComponent */], __WEBPACK_IMPORTED_MODULE_2__interview_edit_question_edit_question_component__["a" /* EditQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_20__settings_settings_component__["a" /* SettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_28__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_30__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_31__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_33__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_32__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dragula_components_dragular_module__["DragulaModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_candidates_service__["a" /* CandidatesService */], __WEBPACK_IMPORTED_MODULE_5__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_9__services_positions_service__["a" /* PositionsService */], __WEBPACK_IMPORTED_MODULE_6__services_questions_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_0__services_skill_service__["a" /* SkillService */],
            __WEBPACK_IMPORTED_MODULE_15__app_store_service__["a" /* AppStoreService */], __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_29__app_component__["a" /* AppComponent */]]
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
exports.push([module.i, "body{\r\n  background-color:#462A51;\r\n  padding-top:40px;\r\n  font-family: 'Muli', sans-serif;\r\n}\r\n\r\n.btn.btn-latest{\r\n    background-color:transparent;\r\n    border-style:solid;\r\n    border-color:#462A51;\r\n    color:#462A51;\r\n  border-radius:0;\r\n  margin:5px;\r\n}\r\n\r\n.btn.btn-latest:hover{\r\n    background-color:#462A51;\r\n    color:#fff;\r\n  border-radius:0;\r\n  margin:5px;\r\n}\r\n\r\n.btn.btn-heart{\r\n    background-color:transparent;\r\n    border-style:solid;\r\n    border-color:#462A51;\r\n    color:#462A51;\r\n  border-radius:0;\r\n  margin:5px;\r\n}\r\n\r\n.btn.btn-heart.active{\r\n    background-color:#462A51;\r\n    color:#fff;\r\n  border-radius:0;\r\n  margin:5px;\r\n}\r\n\r\n.fa.fa-comment{\r\n  color:#DD0330;\r\n}\r\n\r\n.fa-thumbs-up {\r\n  color: #DD0330;\r\n}\r\n\r\n.fa-info-circle {\r\n    color: #DD0330;\r\n}\r\n\r\n.candidate-name {\r\n    color: #DD0330;\r\n}\r\n\r\n.candidate-description {\r\n  color:black;\r\n}\r\n\r\n#right-bar{\r\n  color:#fff;\r\n}\r\n\r\n.img:hover {\r\n    -webkit-animation: pulse 1s;\r\n    animation: pulse 1s;\r\n}\r\n\r\na{\r\n  color:#fff;\r\n}\r\n\r\n.img-center {\r\n  width:96px;\r\n  height:96px;\r\n  display:block;\r\n  margin:auto;\r\n}\r\n\r\n.img-rounded {\r\n  border-radius: 50%;\r\n  border-width: 2px;\r\n  border-style:solid;\r\n}\r\n\r\n.panel {\r\n  border-radius: 6px;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 20px;\r\n  z-index: 1;  \r\n  background-color: #FFFFFF;\r\n  color: #252422;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/candidate-card/candidate-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 col-sm-6 col-xs-12\">\n    <div class=\"panel panel-default\">\n        <a [routerLink]=\"['/candidates', candidate.id]\" >\n            <div class=\"panel-body\">\n                <img [src]=\"candidate.avatar\" class=\"img-responsive img-responsive infinite pulse img-center img-rounded\" alt=\"Responsive image\">\n                <h3 class=\"candidate-name text-center\">{{candidate.firstName}} {{candidate.lastName}}</h3>\n                <p class=\"candidate-description text-center\">{{candidate.description}}</p>\n                \n                <hr [style.backgroundColor]=\"candidate.color\" style=\"height:2px;\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <button type=\"button\" class=\"btn\"><i class=\"fa fa-comment\" aria-hidden=\"true\" [routerLink]=\"['/candidates', candidate.id, 'comments']\"></i> {{candidate.comments}}</button>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <button type=\"button\" class=\"btn\"><i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> {{candidate.likes}}</button>\n                    </div>\n                </div>\n            </div>\n        </a>\n    </div>\n</div>"

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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\"><!-- ROW -->\n        <div class=\"col-lg-4 col-md-5\">\n            <div class=\"card card-user\">\n                <div class=\"image cyan\"></div>\n                <div class=\"content\">\n                    <div class=\"author\">\n                        <img class=\"avatar border-white\" [src]=\"candidate?.avatar || ''\" alt=\"...\"/>\n                        <h4 class=\"title\">\n                            <span class=\"cyan-text\">{{candidate?.firstName}} {{candidate?.lastName}}</span>\n                            <br />\n                            <a href=\"#\"><small><span class=\"black-text\">{{candidate?.email}}</span></small></a>\n                        </h4>\n                    </div>\n                    <p class=\"description text-center\">{{candidate?.description}}</p>\n                </div>\n                <hr>\n                <div class=\"text-center\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-1\">\n                            <a [routerLink]=\"['/candidates', candidateId, 'comments']\">\n                                <h5>\n                                    <span class=\"cyan-text\">{{candidate?.comments}}</span>\n                                    <br /><small>Comments</small>\n                                </h5>\n                            </a>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <a [routerLink]=\"['/candidates', candidateId, 'chat']\">\n                                <h5>\n                                <span class=\"candidate-rating\">{{candidate?.likes}}</span><br />\n                                <small>Likes</small>\n                                </h5>\n                            </a>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <h5>\n                            <span class=\"candidate-rating\">{{candidate?.rating}}</span>\n                            <br /><small>/5</small>\n                            </h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"col-lg-4 col-md-5\">\n            <div class=\"card card-user white-backgound\">\n                <div class=\"image blue\">\n                    <h2 class=\"text-center white-text\" style=\"vertical-align: middle;\">Skills</h2>\n                </div>\n                <div class=\"content\" style=\"height: 261px; overflow-y: hidden\">\n                    <ul class=\"bean-skillset\">\n                        <li *ngFor=\"let skill of candidateSkills\" class=\"skill-bar\" [ngStyle]=\"{'background-color':skill.getColor(), 'width': (skill.level + '%') }\">\n                            <span>{{skill.name}}</span>\n                            <span class=\"skill-percent\">{{(skill.level/100) | percent}}</span>\n                        </li>      \n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-5\">\n            <div class=\"card card-user white-backgound\">\n                <div class=\"image green\">\n                    <h2 class=\"text-center white-text\" style=\"vertical-align: middle;\">Interests</h2>\n                </div>\n                <div class=\"content\" style=\"height: 261px; overflow-y: hidden\">\n                    <dl>\n                        <dd *ngFor=\"let interest of candidateInterests\">\n                            <span>{{interest.name}}</span>\n                        </dd>      \n                    </dl>\n                </div>\n            </div>\n        </div>    \n    </div><!-- END ROW -->\n\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n            <div class=\"card card-user white-background\">\n                <div class=\"image white\">\n                    <h2 class=\"text-center indigo-text\" style=\"vertical-align: middle;\"><strong>Experience</strong></h2>\n                </div>\n                <div class=\"content\" style=\"height: 500px; overflow-x: hidden\">\n                    <experience-timeline [candidateExperience]=\"candidateExperience\"></experience-timeline>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6\">\n            <div class=\"card card-user white-backgound\">\n                <div class=\"image white\">\n                    <h2 class=\"text-center indigo-text\" style=\"vertical-align: middle;\"><strong>Education</strong></h2>\n                </div>\n                <div class=\"content\" style=\"height: 500px; overflow-x: hidden\">\n                    <education-timeline [candidateEducation]=\"candidateEducation\"></education-timeline>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8\">\n            <div class=\"card card-user white-backgound\">\n                <div class=\"header\">\n                    <h4 class=\"title text-center\"><strong>Languages</strong></h4>\n                </div>\n                <div class=\"content table-responsive table-full-width\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Language</th>\n                                <th>Writing</th>\n                                <th>Understanding</th>\n                                <th>Speaking</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let language of candidateLanguages\">\n                                <td>{{language.name}}</td>\n                                <td>{{language.writing}}</td>\n                                <td>{{language.understanding}}</td>\n                                <td>{{language.speaking}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/candidate-view/candidate-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
            .subscribe(function (data) { return _this.candidate = data; }, function (error) { return _this.candidate = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["e" /* GENERIC_CANDIDATE */]; });
        this.candidateService.getCandidateEducation(this.candidateId)
            .subscribe(function (data) { return _this.candidateEducation = data; }, function (error) { return _this.candidateEducation = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["f" /* EDUCATION */]; });
        this.candidateService.getCandidateExperience(this.candidateId)
            .subscribe(function (data) { return _this.candidateExperience = data; }, function (error) { return _this.candidateExperience = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["g" /* EXPERIENCES */]; });
        this.candidateService.getCandidateSkills(this.candidateId)
            .subscribe(function (data) { return _this.candidateSkills = data; }, function (error) { return _this.candidateSkills = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["c" /* SKILLS */]; });
        this.candidateService.getCandidateInterests(this.candidateId)
            .subscribe(function (data) { return _this.candidateInterests = data; }, function (error) { return _this.candidateInterests = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["h" /* INTERESTS */]; });
        this.candidateService.getCandidateLanguages(this.candidateId)
            .subscribe(function (data) { return _this.candidateLanguages = data; }, function (error) { return _this.candidateLanguages = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["i" /* LANGUAGES */]; });
    };
    return CandidateViewComponent;
}());
CandidateViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'candidate-view',
        template: __webpack_require__("../../../../../src/app/candidates/candidate-view/candidate-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/candidate-view/candidate-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__["a" /* CandidatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__["a" /* CandidatesService */]) === "function" && _b || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
            .subscribe(function (data) { return _this.candidates = data; }, function (error) { return _this.candidates = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["d" /* CANDIDATES */]; });
    };
    return CandidatesComponent;
}());
CandidatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'candidates',
        template: __webpack_require__("../../../../../src/app/candidates/candidates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/candidates.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__["a" /* CandidatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_candidates_service__["a" /* CandidatesService */]) === "function" && _a || Object])
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

module.exports = "<div class=\"chat-history\">\n  <ul>\n    <li *ngFor=\"let message of candidateConversation\" class=\"chat-item list-no-bullets\"\n      [ngClass]=\"{'chat-item--me': message.from.id > 0, 'chat-item--other':message.from.id === 0}\">\n      <img *ngIf=\"message.from.id > 0\" [src]=\"message.from.avatar\" alt=\"{{message.from.firstName}} {{message.from.lastName}}\" />\n      <div class=\"message\">\n        <span class=\"message__user-name\">{{message.from.firstName}} {{message.from.lastName}}</span>\n        <time class=\"message__time\">\n          <i class=\"fa fa-clock-o\"></i>\n          {{message.time | date: 'mediumTime'}}\n        </time>\n        <p class=\"message__text\">{{message.message}}</p>\n      </div>\n      <img *ngIf=\"message.from.id === 0\" [src]=\"message.from.avatar\" alt=\"{{message.from.firstName}} {{message.from.lastName}}\" />\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/candidates/chat-view/chat-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
            .subscribe(function (data) { return _this.candidate = data; }, function (error) { return _this.candidate = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["e" /* GENERIC_CANDIDATE */]; });
        this.chatService.getConversation(this.candidateId)
            .subscribe(function (data) { return _this.candidateConversation = data; }, function (error) { return _this.candidateConversation = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["j" /* CONVERSATION */]; });
    };
    return ChatViewComponent;
}());
ChatViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'chat-view',
        template: __webpack_require__("../../../../../src/app/candidates/chat-view/chat-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/chat-view/chat-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_candidates_service__["a" /* CandidatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_candidates_service__["a" /* CandidatesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _c || Object])
], ChatViewComponent);

var _a, _b, _c;
//# sourceMappingURL=chat-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/candidates/comment-view/comment-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detailBox {\r\n    width:100%;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.titleBox {\r\n    background-color:#fdfdfd;\r\n    padding:10px;\r\n}\r\n\r\n.titleBox label{\r\n  color:#444;\r\n  margin:0;\r\n  display:inline-block;\r\n}\r\n\r\n.commentBox {\r\n    border-top:1px dotted #bbb;\r\n}\r\n\r\n.commentBox .form-group:first-child, .actionBox .form-group:first-child {\r\n    width:80%;\r\n}\r\n\r\n.commentBox .form-group:nth-child(2), .actionBox .form-group:nth-child(2) {\r\n    width:18%;\r\n}\r\n\r\n.actionBox .form-group * {\r\n    width:100%;\r\n}\r\n\r\n.taskDescription {\r\n    margin-top:10px 0;\r\n}\r\n\r\n.commentList {\r\n    padding:0;\r\n    list-style:none;\r\n    max-height:200px;\r\n    overflow:auto;\r\n}\r\n\r\n.commentList li {\r\n    margin:0;\r\n    margin-top:10px;\r\n}\r\n\r\n.commentList li > div {\r\n    display:table-cell;\r\n}\r\n\r\n.commenterImage {\r\n    width:30px;\r\n    margin-right:5px;\r\n    height:100%;\r\n    float:left;\r\n}\r\n\r\n.commenterImage img {\r\n    width:100%;\r\n    border-radius:50%;\r\n}\r\n\r\n.commentText p {\r\n    margin:0;\r\n}\r\n\r\n.sub-text {\r\n    color:#aaa;\r\n    font-family:verdana;\r\n    font-size:11px;\r\n}\r\n\r\n.actionBox {\r\n    background-color:#fdfdfd;\r\n    border-top:1px dotted #bbb;\r\n    padding:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/comment-view/comment-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-custom\" style=\"padding-top:15px;\">\n    <div class=\"col-md-8\">\n        <div class=\"detailBox\">\n            <div class=\"titleBox\">\n                <label>Comments</label>\n            </div>\n            <div class=\"actionBox\">\n                <ul class=\"commentList\">\n                    <li *ngFor=\"let comment of comments\">\n                        <div class=\"commenterImage\">\n                            <img [src]=\"comment.avatarSrc\"/>\n                        </div>\n                        <div class=\"commentText\">\n                            <p><strong class=\"text-dark-color\">{{comment.author}}: </strong>{{comment.message}}</p> <span class=\"date sub-text\">on {{ comment.date | date: 'medium' }}</span>\n\n                        </div>\n                    </li>\n                </ul>\n                <form class=\"form-inline\" role=\"form\" [formGroup]=\"commentForm\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"message\" placeholder=\"Add comment...\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-round dark-primary-color\" type=\"submit\" value=\"Add Comment\" (click)=\"addComment()\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>    \n    </div>\n</div>\n<pre>{{commentForm.value | json}}</pre>"

/***/ }),

/***/ "../../../../../src/app/candidates/comment-view/comment-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_messages__ = __webpack_require__("../../../../../src/app/util/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_candidates_service__ = __webpack_require__("../../../../../src/app/services/candidates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_store_service__ = __webpack_require__("../../../../../src/app/app-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_comment__ = __webpack_require__("../../../../../src/app/domain/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
            .subscribe(function (data) { return _this.comments = data; }, function (error) { return _this.comments = __WEBPACK_IMPORTED_MODULE_1__util_mocks__["k" /* COMMENTS */]; });
        this.initCommentForm();
        this.appStore.getLoggedInUser().subscribe(function (user) { return _this.user = user; });
    };
    CommentViewComponent.prototype.initCommentForm = function () {
        this.commentForm = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormGroup */]({
            message: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormControl */]()
        });
    };
    ;
    CommentViewComponent.prototype.addComment = function () {
        if (this.commentForm.value.message) {
            var newComment = new __WEBPACK_IMPORTED_MODULE_6__domain_comment__["a" /* Comment */](this.user.firstName + " " + this.user.lastName, this.user.avatar, this.commentForm.value.message, new Date());
            this.notificationService.showSuccess(__WEBPACK_IMPORTED_MODULE_0__util_messages__["a" /* COMMENT_SAVED */]);
            this.comments.push(newComment);
            this.initCommentForm();
        }
        else {
            this.notificationService.showError(__WEBPACK_IMPORTED_MODULE_0__util_messages__["b" /* COMMENT_NOT_SAVED */]);
        }
    };
    return CommentViewComponent;
}());
CommentViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
        selector: 'comment-view',
        template: __webpack_require__("../../../../../src/app/candidates/comment-view/comment-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/candidates/comment-view/comment-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_store_service__["a" /* AppStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_store_service__["a" /* AppStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_candidates_service__["a" /* CandidatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_candidates_service__["a" /* CandidatesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
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

module.exports = "<div class=\"timeline\">\n  <ul>\n    <li *ngFor=\"let item of candidateEducation\">\n      <div class=\"bullet\"></div>\n      <div class=\"time cyan-text\" style=\"font-size:1em;\">{{item.fromDate | date: 'MMM, yyyy'}} - {{item.toDate | date: 'MMM, yyyy'}}</div>\n      <div class=\"desc\">\n        <h3 class=\"blue-text\" style=\"font-size:1.2em; font-weight: bolder; margin-bottom:2px;\">{{item.major}}</h3>\n        <h4 class=\"red-text\" style=\"font-size:1.0em; font-weight: bold; margin-bottom:8px;\" >@ {{item.institution}}</h4>\n        <p style=\"font-size:1.1em;\">\n          <strong class=\"blue-text\">Grade: </strong><span class=\"red-text\">{{item.grade}}</span>\n        </p>\n      </div>\n    </li>\n  </ul>\n</div>"

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

/***/ "../../../../../src/app/domain/candidate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_constants__ = __webpack_require__("../../../../../src/app/util/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Candidate; });

var Candidate = (function () {
    function Candidate(id, firstName, lastName, email, gender, description, likes, comments, rating, color) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.description = description;
        this.likes = likes;
        this.comments = comments;
        this.rating = rating;
        this.color = color;
        this.setAvatar();
        this.score = Math.floor(Math.random() * 100) + 1;
    }
    Candidate.prototype.setAvatar = function () {
        if (this.gender === 'male') {
            this.avatar = __WEBPACK_IMPORTED_MODULE_0__util_constants__["a" /* MALE_AVATARS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__util_constants__["a" /* MALE_AVATARS */].length)];
        }
        else {
            this.avatar = __WEBPACK_IMPORTED_MODULE_0__util_constants__["b" /* FEMALE_AVATARS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__util_constants__["b" /* FEMALE_AVATARS */].length)];
        }
    };
    return Candidate;
}());

//# sourceMappingURL=candidate.js.map

/***/ }),

/***/ "../../../../../src/app/domain/chat-message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessage; });
var ChatMessage = (function () {
    function ChatMessage(id, from, message, time) {
        this.id = id;
        this.from = from;
        this.message = message;
        this.time = time;
    }
    return ChatMessage;
}());

//# sourceMappingURL=chat-message.js.map

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

/***/ "../../../../../src/app/domain/education.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Education; });
var Education = (function () {
    function Education(institution, major, fromDate, toDate, grade) {
        this.institution = institution;
        this.major = major;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.grade = grade;
    }
    return Education;
}());

//# sourceMappingURL=education.js.map

/***/ }),

/***/ "../../../../../src/app/domain/experience.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experience; });
var Experience = (function () {
    function Experience(title, company, description, periodFrom, periodTo) {
        this.title = title;
        this.company = company;
        this.description = description;
        this.periodFrom = periodFrom;
        this.periodTo = periodTo;
    }
    return Experience;
}());

//# sourceMappingURL=experience.js.map

/***/ }),

/***/ "../../../../../src/app/domain/language.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
var Language = (function () {
    function Language(name, understanding, writing, speaking) {
        this.name = name;
        this.understanding = understanding;
        this.writing = writing;
        this.speaking = speaking;
    }
    return Language;
}());

//# sourceMappingURL=language.js.map

/***/ }),

/***/ "../../../../../src/app/domain/position.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_constants__ = __webpack_require__("../../../../../src/app/util/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });

var Position = (function () {
    function Position(id, name, description, requirements, creationDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.requirements = requirements;
        this.creationDate = creationDate;
        this.setRandomImage();
    }
    Position.prototype.setRandomImage = function () {
        this.image = __WEBPACK_IMPORTED_MODULE_0__util_constants__["c" /* POSITION_BACKGROUNDS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__util_constants__["c" /* POSITION_BACKGROUNDS */].length)];
    };
    return Position;
}());

//# sourceMappingURL=position.js.map

/***/ }),

/***/ "../../../../../src/app/domain/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(id, position, question, answers) {
        this.id = id;
        this.position = position;
        this.question = question;
        this.answers = answers;
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

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
    Skill.prototype.getColor = function () {
        return '#449C76';
    };
    return Skill;
}());

//# sourceMappingURL=skill.js.map

/***/ }),

/***/ "../../../../../src/app/domain/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_constants__ = __webpack_require__("../../../../../src/app/util/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });

var User = (function () {
    function User(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interview/edit-question/edit-question.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-question works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/interview/edit-question/edit-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_questions_service__ = __webpack_require__("../../../../../src/app/services/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function EditQuestionComponent(route, questionService) {
        this.route = route;
        this.questionService = questionService;
    }
    EditQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) { return _this.questionId = params['id']; });
        this.questionService.getQuestion(this.questionId)
            .subscribe(function (data) { return _this.question = data; }, function (error) { return _this.question = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["a" /* QUESTIONS */][_this.questionId]; });
    };
    return EditQuestionComponent;
}());
EditQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'edit-question',
        template: __webpack_require__("../../../../../src/app/interview/edit-question/edit-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/interview/edit-question/edit-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_questions_service__["a" /* QuestionsService */]) === "function" && _b || Object])
], EditQuestionComponent);

var _a, _b;
//# sourceMappingURL=edit-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/interview/interview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-add-question {\r\n\twidth: 100%;\r\n\tpadding-left:40px;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.notice {\r\n\tpadding: 15px;\r\n\tbackground-color: #fafafa;\r\n\tborder-left: 6px solid #7f7f84;\r\n\tmargin-bottom: 10px;\r\n\tborder-color: #6AB73E;\r\n\tbox-shadow: 0 5px 8px -6px rgba(0,0,0,.2);\r\n}\r\n\r\n.notice-sm {\r\n\tpadding: 10px;\r\n\tfont-size: 80%;\r\n}\r\n.notice-lg {\r\n\tpadding: 35px;\r\n\tfont-size: large;\r\n}\r\n\r\n.notice>strong {\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n.notice-moved {\r\n\tborder-color: #3868A6;\r\n}\r\n\r\n.position {\r\n\tpadding: 5px;\r\n\tpadding-left:10px;\r\n\tpadding-right:10px;\r\n\tborder-radius: 25%;\r\n\tmargin-right: 10px;\r\n\tbackground-color:#7f7f84;\r\n}\r\n\r\n.position-moved {\r\n\tbackground-color: #3868A6;\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n.question-buttons {\r\n\tmargin-top: -5px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.question-button button {\r\n\tcolor:#D03A43;\r\n\topacity: 0.9;\r\n}\r\n\r\n.question-buttons button:hover {\r\n\tcolor:#FFFFFF;\r\n\tbackground-color: #D03A43;\r\n\tborder-color: #D03A43;\r\n\topacity: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interview/interview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <div class=\"row\">\n      <form class=\"form-inline form-add-question\" role=\"form\" [formGroup]=\"addQuestionForm\">\n        <div class=\"col-md-8\">  \n            <div class=\"form-group\" style=\"width:100%;\">\n              <input type=\"text\"  style=\"width:100%;\" class=\"form-control\" formControlName=\"question\" placeholder=\"Type in a question...\" required>\n            </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\" style=\"width:100%;\">\n            <button class=\"btn btn-round red white-text\" style=\"width:100%;\" type=\"submit\" value=\"Add Comment\" (click)=\"addQuestion()\">Add Question</button>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\" style=\"width:100%;\">\n            <button class=\"btn btn-round blue white-text\" style=\"width:100%;\" type=\"submit\" value=\"Save All\" (click)=\"saveAll()\">Save All</button>\n          </div>\n        </div>\n      </form>      \n  </div>\n\n  <ol [dragula]=\"'questions-bag'\" [dragulaModel]=\"questions\" class=\"questions-list list-no-bullets\">\n    <li *ngFor=\"let question of questions\" [attr.data-id]=\"question.id\">\n        <div class=\"notice\">\n            <strong class=\"position\">{{question.position}}</strong> {{question.question}}\n            <span class=\"question-buttons\" style=\"float:right; vertical-align: middle;\">\n                <a [routerLink]=\"['/interview/edit-question/', question.id]\"><button type=\"button\" class=\"btn\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button></a>\n                <button type=\"button\" class=\"btn\"><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"removeQuestion(question)\"></i></button>\n            </span>\n        </div>\n    </li>\n  </ol>\n</div>"

/***/ }),

/***/ "../../../../../src/app/interview/interview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__ = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_questions_service__ = __webpack_require__("../../../../../src/app/services/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_question__ = __webpack_require__("../../../../../src/app/domain/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
            .subscribe(function (data) { return _this.questions = data; }, function (error) { return _this.questions = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["a" /* QUESTIONS */]; });
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
        this.addQuestionForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            question: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]()
        });
    };
    InterviewComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('questions-bag');
    };
    InterviewComponent.prototype.addQuestion = function () {
        if (this.addQuestionForm.value.question) {
            var newQuestion = new __WEBPACK_IMPORTED_MODULE_5__domain_question__["a" /* Question */](null, this.questions.length + 1, this.addQuestionForm.value.question, new Array());
            this.questions.push(newQuestion);
            this.initAddQuestionForm();
        }
        else {
            console.log("not working");
        }
    };
    InterviewComponent.prototype.removeQuestion = function (question) {
        console.log("remove clicked");
        var index = this.questions.indexOf(question);
        if (index !== 1) {
            this.questions.splice(index, 1);
        }
        this.updateOrder();
    };
    InterviewComponent.prototype.updateOrder = function () {
        var i = 1;
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            question.position = i;
            i++;
        }
    };
    InterviewComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    InterviewComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    InterviewComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    InterviewComponent.prototype.onDrop = function (args) {
        var e = args[0];
        var notice = e.children[0];
        var position = notice.children[0];
        this.addClass(notice, 'notice-moved');
        this.addClass(position, 'position-moved');
    };
    InterviewComponent.prototype.saveAll = function () {
        this.notificationService.showSuccess("Save succesful");
        //this.questions.dbSaveAdicaAjaxCall();
    };
    return InterviewComponent;
}());
InterviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'interview',
        template: __webpack_require__("../../../../../src/app/interview/interview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/interview/interview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_questions_service__["a" /* QuestionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_components_dragula_provider__["DragulaService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], InterviewComponent);

var _a, _b, _c;
//# sourceMappingURL=interview.component.js.map

/***/ }),

/***/ "../../../../../src/app/positions/candidate-list-item/candidate-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  * {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .screen{\r\n    height: 530px;\r\n    margin: 30px auto;\r\n    width: 320px;\r\n    background: #F7F7F7;\r\n    box-shadow: 0px 0px 6px rgba(0,0,0,0.3);\r\n    border-radius: 5px;\r\n    transition: box-shadow 0.3s;\r\n  }\r\n  \r\n  .screen:hover{\r\n    box-shadow: 0px 0px 12px rgba(0,0,0,0.5);\r\n  }\r\n  \r\n  .top-nav{ \r\n    position: relative;\r\n    width: 100%;\r\n    background: #BD10E0;\r\n    height: 150px;\r\n    border-radius: 5px 5px 0 0;\r\n    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);\r\n  }\r\n  \r\n  .add-button{\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    background: #50D2C2;\r\n    outline: none;\r\n    position: absolute;\r\n    bottom: -22.5px;\r\n    left: 20px;\r\n    box-shadow: 0px 0px 4px rgba(0,0,0,0.4);\r\n    cursor: pointer;\r\n    line-height: 45px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-weight:100;\r\n    color: #fff;\r\n  }\r\n  \r\n  .add-button:active{\r\n    box-shadow: 0px 0px 1px rgba(0,0,0,0.2);\r\n    font-weight:200;\r\n  }\r\n  \r\n  .add-button:hover{\r\n    background: #50D2C2;\r\n    color:#fff;\r\n    transition: all 0.06s ease-in;\r\n    -webkit-animation: turn 1.1s .06s ease-out backwards;\r\n            animation: turn 1.1s .06s ease-out backwards;\r\n  }\r\n  \r\n  .menu-icon{\r\n    color:#fff;\r\n    margin-left: 20px;\r\n    margin-top:20px;\r\n  /*   border: 3px solid #73AD21; */\r\n  }\r\n  \r\n  .bell-icon{\r\n    color:#fff;\r\n    margin-right: 20px;\r\n    margin-top:20px;\r\n    float: right;\r\n    clear: both;\r\n  /*   border: 3px solid #73AD21; */\r\n  }\r\n  \r\n  .logo{\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    margin: auto;\r\n    margin-top: -5px;\r\n    margin-bottom: -15px;\r\n    display: block;\r\n    width: 20%;\r\n    height: 45%;\r\n  /*   border: 3px solid #73AD21; */\r\n  }\r\n  \r\n  .logo-text{\r\n    margin-top: -20px;\r\n    text-align: center;\r\n    margin: auto;\r\n    display:block;\r\n    color: #EB8AFF;\r\n    font-size: 18px;\r\n  /*   font-style: normal; */\r\n  /*   border: 3px solid #73AD21; */\r\n  }\r\n  \r\n  .logo-text::after{\r\n    content:\"By\";\r\n    display: inline-block;\r\n    color: initial;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    margin-left: 2px;\r\n  }\r\n  .container{\r\n    margin: auto;\r\n    display: table;\r\n    text-align: center;\r\n    height: 40px;\r\n  }\r\n  .list-title{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    color: #AFAFAF;\r\n    font-size: 12px;\r\n    font-weight: 200;\r\n  /*   border: 3px solid #73AD21; */\r\n  }\r\n  \r\n  .list-dashboard{\r\n    margin: auto;\r\n    margin-top: 5px;\r\n    width: 300px;\r\n    display: block;\r\n    background: #fff;\r\n    height: 100px;\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);\r\n  }\r\n  \r\n  .list-dashboard:hover{\r\n    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);\r\n  }\r\n  \r\n  .list-dashboard:nth-child(1){\r\n    margin-top: 0px;\r\n    height: 104px;\r\n  }\r\n  \r\n  .list-dashboard:nth-child(2){\r\n    height: 118px;\r\n  }\r\n  \r\n  .list-dashboard:nth-child(3){\r\n    height: 99px;\r\n  }\r\n  \r\n  .list-dashboard:hover{\r\n  /*   opacity: 0.6; */\r\n  }\r\n  \r\n  .avatar{\r\n    display: inline-block;\r\n    margin: 10px;\r\n    width: 45px;\r\n    height: 45px;\r\n    background: #BD10E0;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .avatar1{\r\n    content:url(http://www.thesocial.com/wp-content/uploads/2016/04/Andy-Backhouse-Profile-Picture-300x300.jpg);\r\n  }\r\n  \r\n  .avatar2{\r\n    content:url(https://pbs.twimg.com/profile_images/726839881310285824/pq_NAAgp.jpg);\r\n  }\r\n  \r\n  .avatar3{\r\n    content:url(http://cdn.rivertheme.com/ri-maxazine/wp-content/uploads/2015/12/pretty-girl-400x400.jpg);\r\n  }\r\n  \r\n  .avatar4{\r\n    content:url(http://www.worldsnowboardtour.com/wp-content/uploads/2012/04/billyprofilepic-100x100.jpg);\r\n  }\r\n  \r\n  .avatar5{\r\n    content:url(http://www.womeninretailsummit.com/files/2014/10/Ivka-Adam-Profile-Photo-100x100.jpg);\r\n  }\r\n  \r\n  .avatar6{\r\n    content:url(https://www.gravatar.com/avatar/b2a6363f7cae860d0123150caf40e18c?s=100&r=g&d=mm);\r\n  }\r\n  \r\n  .avatar7{\r\n    content:url(https://media.licdn.com/mpr/mpr/shrink_100_100/p/2/005/095/1cf/1fd0854.jpg);\r\n  }\r\n  \r\n  .avatar8{\r\n    content:url(https://media.licdn.com/mpr/mpr/shrink_100_100/p/7/005/074/00a/3a7628e.jpg);\r\n  }\r\n  \r\n  .col-avatar {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n  \r\n  .col-text {\r\n    float: left;\r\n    width: 70%;\r\n  /*   border: 1px solid #73AD21; */\r\n  }\r\n  \r\n  .col-menu{\r\n    float: left;\r\n    width: 5%;\r\n  }\r\n  \r\n  .menu-dots{\r\n    margin-top: 10px;\r\n    color: #C9C9C9;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n  }\r\n  \r\n  h2{\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    color: #757577;\r\n  }\r\n  \r\n  p{\r\n    font-size: 12px;\r\n    font-weight: 200;\r\n    color: #848484;\r\n  }\r\n  \r\n  .border{\r\n    clear: both;\r\n    height: 10px;\r\n    margin: 7px;\r\n    display: block;\r\n    border-bottom: 1px solid #F7F7F7;\r\n  }\r\n  \r\n  .border3{\r\n    height: 5px;\r\n    clear: both;\r\n    margin: 7px;\r\n    display: block;\r\n    border-bottom: 1px solid #F7F7F7;\r\n  }\r\n  \r\n  .type{\r\n    float: left;\r\n    margin-left: 24px;\r\n    margin-top: -6px;\r\n    color: #C9C9C9;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n  /*     border: 1px solid #73AD21; */\r\n  }\r\n  \r\n  .type2{\r\n    float: left;\r\n    margin-left: 35px;\r\n    margin-top: -3px;\r\n    font-size: 10px;\r\n    font-weight: 200;\r\n    color: #B2B2B2;\r\n  }\r\n  \r\n  .type3{\r\n    float: left;\r\n    margin-left: 25px;\r\n    margin-top: -6px;\r\n    color:#C9C9C9;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n  }\r\n  \r\n  .type4{\r\n    float: left;\r\n    margin-left: 25px;\r\n    margin-top: -3px;\r\n    font-size: 10px;\r\n    font-weight: 200;\r\n    color: #B2B2B2;\r\n  }\r\n  \r\n  .vertical-border{\r\n    float: left;\r\n    margin-left: 35px;\r\n    margin-top: -5px;\r\n    width: 1px;\r\n    height: 16px;\r\n    background: #F7F7F7;\r\n  }\r\n  \r\n  .vertical-border2{\r\n    float: left;\r\n    margin-left: 18px;\r\n    margin-top: -5px;\r\n    width: 1px;\r\n    height: 16px;\r\n    background: #F7F7F7;\r\n  }\r\n  \r\n  .vertical-border3{\r\n    float: left;\r\n    margin-left: 40px;\r\n    margin-top: -5px;\r\n    width: 1px;\r\n    height: 16px;\r\n    background: #F7F7F7;\r\n  }\r\n  \r\n  @-webkit-keyframes turn {\r\n    0% {\r\n      -webkit-transform: rotate(0) scale(1);\r\n              transform: rotate(0) scale(1);\r\n    }\r\n    50% {\r\n      -webkit-transform: rotate(375deg) scale(1.1);\r\n              transform: rotate(375deg) scale(1.1);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(0deg) scale(1);\r\n              transform: rotate(0deg) scale(1);\r\n    }\r\n  }\r\n  \r\n  @keyframes turn {\r\n    0% {\r\n      -webkit-transform: rotate(0) scale(1);\r\n              transform: rotate(0) scale(1);\r\n    }\r\n    50% {\r\n      -webkit-transform: rotate(375deg) scale(1.1);\r\n              transform: rotate(375deg) scale(1.1);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(0deg) scale(1);\r\n              transform: rotate(0deg) scale(1);\r\n    }\r\n  }\r\n  \r\n  .screen-base {\r\n    width: 33.33%;\r\n    float: left;\r\n  }\r\n  \r\n  @media screen and (max-width: 1000px) {\r\n    .screen-base {\r\n      width: 100%;\r\n      float: none;\r\n    }\r\n  }\r\n  \r\n  /****************************************/\r\n  \r\n  .logo-text2{\r\n    margin-left: 85px;\r\n    text-align: center;\r\n    display:inline-block;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 200;\r\n  /*   font-style: normal; */\r\n  /*   border: 3px solid #73AD21; */\r\n  }\r\n  \r\n  .user-list{\r\n    margin: auto;\r\n    margin-top: 15px;\r\n    width: 300px;\r\n    display: block;\r\n    background: #fff;\r\n    height: 468px;\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);\r\n  }\r\n  \r\n  .user-list:hover{\r\n    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);\r\n  }\r\n  \r\n  .container{\r\n    width: 92%;\r\n    margin: auto;\r\n  }\r\n  #name{\r\n    margin-top: 10px;\r\n    display:block;\r\n    outline: 0;\r\n      border: none;\r\n    height: 40px;\r\n      padding-left: 62px;\r\n    font-size: 14px;\r\n    color: #222;\r\n    font-style: italic;\r\n    font-weight: 300; \r\n    width: 100%;\r\n    margin-bottom: 2px;\r\n      border-bottom: 1px solid rgba(0,0,0,0.05);\r\n  /*       border: 1px solid #73AD21; */\r\n  }\r\n  \r\n  #name:focus{\r\n    border-color:#50D2C2;\r\n  }\r\n  \r\n  .text-icon{\r\n    position: absolute;\r\n    left:35px;\r\n    top:73px;\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n    color: #C9C9C9;\r\n  }\r\n  \r\n  .avatar-user-list{\r\n    display: inline-block;\r\n    margin-left: 13px;\r\n    margin-top: 8px;\r\n    width: 38px;\r\n    height: 38px;\r\n    background: #BD10E0;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .col-avatar2 {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n  \r\n  .col-text2 {\r\n    float: left;\r\n    margin-top: 8px;\r\n    width: 65%;\r\n  /*   border: 1px solid #73AD21; */\r\n  }\r\n  \r\n  .col-menu2{\r\n    float: left;\r\n    width: 10%;\r\n    margin-top: 22px;\r\n  }\r\n  \r\n  \r\n  .list-dashboard2{\r\n    display: block;\r\n    background: #fff;\r\n    color: #50D2C2;\r\n    clear: both;\r\n  }\r\n  \r\n  .list-dashboard2:hover .avatar-user-list{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .list-dashboard2:active{\r\n    background: #3B3B3B;\r\n  }\r\n  \r\n  \r\n  /***********************************************/\r\n  \r\n  .user-page{\r\n    margin: auto;\r\n    PADDING-TOP: 50PX;\r\n    margin-top: 60px;\r\n    width: 300px;\r\n    display: block;\r\n    background: #fff;\r\n    height: 423px;\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);\r\n  }\r\n  \r\n  .user-page:hover{\r\n    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);\r\n  }\r\n  \r\n  .avatar-user-page{\r\n    display: inline-block;\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 115px;\r\n    width: 90px;\r\n    height: 90px;\r\n    background: #BD10E0;\r\n    border-radius: 50%;\r\n    box-shadow: 0px 0px 4px rgba(0,0,0,0.4);\r\n    cursor: pointer;\r\n    transition: all .1s ease-in-out;\r\n  /*   border: 3px solid #fff; */\r\n  }\r\n  \r\n  .avatar-user-page:active{\r\n    box-shadow: 0px 0px 1px rgba(0,0,0,0.2);\r\n    font-weight:200;\r\n  }\r\n  \r\n  .avatar-user-page:hover{\r\n    background: #50D2C2;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .container2{\r\n    margin: auto;\r\n    display: table;\r\n    text-align: center;\r\n    height: 40px;\r\n  }\r\n  .list-title2{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    color: #757577;\r\n  /*   border: 3px solid #73AD21; */\r\n  }\r\n  \r\n  #name2{\r\n    margin-top: 10px;\r\n    display:block;\r\n    outline: 0;\r\n    background: #F7F7F7;\r\n      border: none;\r\n    height: 100px;\r\n      padding: 10px;\r\n    font-size: 14px;\r\n    color: #222;\r\n    font-style: italic;\r\n    font-weight: 300; \r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    box-shadow: inset 1px 1px 1px rgba(0,0,0,0.2);\r\n    border-radius: 2px;\r\n    resize: none;\r\n  }\r\n  \r\n  #name2:focus{\r\n    background: #EBEBEB;\r\n  /*   border-color:#50D2C2; */\r\n  }\r\n  \r\n  fieldset {\r\n    margin-left: 14px;\r\n    margin-top: 10px;\r\n    border: none;\r\n  }\r\n  \r\n  label {\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    color: #9A9A9A;\r\n  }\r\n  \r\n  label.light {\r\n    font-weight: 300;\r\n    display: inline;\r\n  }\r\n  \r\n  input[type=\"radio\"]{\r\n    margin: 0 8px 8px 0;\r\n    box-sizing: border-box; /* 1 */\r\n  }\r\n  \r\n  .nudge{\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    color: #757577;\r\n    text-align: center;\r\n  }\r\n  \r\n  .buttons{\r\n    margin-top: 0px;\r\n    width: 100%;\r\n  /*   border: 1px solid #73AD21; */\r\n    padding: 10px 10px 10px 10px;\r\n    position: relative;\r\n  }\r\n  \r\n  button {\r\n    padding: 19px 39px 18px 39px;\r\n    width: 48%;\r\n    border: none;\r\n    outline: 0;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n  }\r\n  \r\n  button:hover{\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  .left{\r\n    float: left;\r\n    color: #FFF;\r\n    background-color: #CFCFCF;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    font-style: normal;\r\n  }\r\n  \r\n  .right{\r\n    float: right;\r\n    color: #FFF;\r\n    background-color: #50D2C2;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    font-style: normal;\r\n  }\r\n  \r\n  /*****************************/\r\n  \r\n  \r\n  input[type=radio]:checked + label{\r\n    color: #444444;\r\n  }\r\n  \r\n  /**********************************Footer*************************/\r\n  footer.closure {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    color: #868686;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/positions/candidate-list-item/candidate-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let candidate of candidates\" class=\"list-dashboard\">\n    <div class=\"col-avatar\">\n      <img [src]=\"candidate.avatar\">\n    </div>\n    <div class=\"col-text\">\n      <h2>{{candidate.firstName}} {{candidate.lastName}}</h2>\n      <p>{{candidate.description}}</p>\n    </div>\n    <div class=\"col-menu\">\n      <!-- HERE GOES THE RATING -->\n    </div>\n    <div class=\"border\"></div>\n    <div class=\"type\">\n      <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <a [routerLink]=\"['/candidates', candidate.id]\">\n      <div class=\"type2\">View Profile</div>\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/positions/candidate-list-item/candidate-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateListItemComponent = (function () {
    function CandidateListItemComponent() {
    }
    CandidateListItemComponent.prototype.ngOnInit = function () {
    };
    return CandidateListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CandidateListItemComponent.prototype, "candidates", void 0);
CandidateListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'candidate-list-item',
        template: __webpack_require__("../../../../../src/app/positions/candidate-list-item/candidate-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/candidate-list-item/candidate-list-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CandidateListItemComponent);

//# sourceMappingURL=candidate-list-item.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function CreatePositionComponent() {
    }
    CreatePositionComponent.prototype.ngOnInit = function () {
    };
    return CreatePositionComponent;
}());
CreatePositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-position',
        template: __webpack_require__("../../../../../src/app/positions/create-position/create-position.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/create-position/create-position.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CreatePositionComponent);

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

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img [src]=\"position.image\" alt=\"{{position.name}}\" class=\"image darken\">\n        <p class=\"overlay\">{{position.title}}</p>\n      </div>\n      <div class=\"card-content\">\n        <p class=\"card-content-job\">{{position.description}}</p>\n        <h4 class=\"red-text\">Requirements</h4>\n        <ul class=\"requirements-list list-no-bullets\">\n          <li *ngFor=\"let requirement of position.requirements\">\n            <i class=\"ti-check-box\"></i>\n              <span>\n                <span class=\"blue-text\">{{requirement.level}}</span>\n                @ \n                <span>{{requirement.name}}</span>\n              </span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "../../../../../src/app/positions/edit-position/edit-position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_skill_service__ = __webpack_require__("../../../../../src/app/services/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_positions_service__ = __webpack_require__("../../../../../src/app/services/positions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
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
            .subscribe(function (data) { return _this.position = data; }, function (error) { return _this.position = __WEBPACK_IMPORTED_MODULE_5__util_mocks__["b" /* POSITIONS */][1][1]; });
        this.skillService.getSkills()
            .subscribe(function (data) { return _this.skillList = data; }, function (error) { return _this.skillList = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["c" /* SKILLS */]; });
    };
    return EditPositionComponent;
}());
EditPositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'edit-position',
        template: __webpack_require__("../../../../../src/app/positions/edit-position/edit-position.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/edit-position/edit-position.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_positions_service__["a" /* PositionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_positions_service__["a" /* PositionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_skill_service__["a" /* SkillService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_skill_service__["a" /* SkillService */]) === "function" && _c || Object])
], EditPositionComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-position.component.js.map

/***/ }),

/***/ "../../../../../src/app/positions/position-card/position-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin: 0 auto;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 3em;\r\n}\r\n.card .card-content {\r\n  position: relative;\r\n  padding: 5%;\r\n  padding-top: 15%;\r\n  margin-top: -10%;\r\n  padding-bottom: 8%;\r\n  overflow: hidden;\r\n  min-height: 200px;\r\n}\r\n\r\n.card .card-content .card-content-button {\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 7px 40px 0 rgba(0, 0, 0, 0.19);\r\n  color: white;\r\n  position: absolute;\r\n  right: 4%;\r\n  top: 17px;\r\n  z-index: 3;\r\n  transition-duration: 0.2s;\r\n}\r\n.card .card-content .card-content-button i {\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.card .card-content .card-content-name {\r\n  font-size: 25px;\r\n}\r\n.card .card-content .card-content-job {\r\n  color: #9575CD;\r\n  font-size: 15px;\r\n}\r\n.card .card-content p {\r\n  margin: 0;\r\n  z-index: 2;\r\n}\r\n.card .card-content .card-content-button:focus {\r\n  outline: none;\r\n}\r\n.card .card-image {\r\n  width: 100%;\r\n  position: relative;\r\n  margin-bottom: -1%;\r\n  z-index: 2;\r\n  transition: z-index 0s 0.2s;\r\n}\r\n.card .card-image i {\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 5%;\r\n  color: white;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n}\r\n.card .card-image img {\r\n  width: 100%;\r\n}\r\n\r\n.image {\r\n  max-height: 200px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;  \r\n}\r\n\r\n.button-first {\r\n  margin-right: 80px;\r\n}", ""]);

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
exports.push([module.i, ".card {\r\n  margin: 0 auto;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 3em;\r\n  max-height: 550px;\r\n}\r\n\r\n.card .card-content {\r\n  position: relative;\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  margin-top: 2%;\r\n  padding-bottom: 8%;\r\n  overflow: hidden;\r\n  min-height: 200px;\r\n  max-height: 370px;\r\n}\r\n\r\n.card .card-content .card-content-name {\r\n  font-size: 25px;\r\n}\r\n\r\n.card .card-content .card-content-job {\r\n  max-height: 150px;\r\n  color: #9575CD;\r\n  font-size: 15px;\r\n}\r\n\r\n.card .card-content p {\r\n  margin: 0;\r\n  z-index: 2;\r\n}\r\n\r\n.card .card-content .card-content-button:focus {\r\n  outline: none;\r\n}\r\n\r\n.card .card-image {\r\n  width: 100%;\r\n  position: relative;\r\n  margin-bottom: -1%;\r\n  z-index: 2;\r\n  transition: z-index 0s 0.2s;\r\n  background-color: #000000;\r\n}\r\n\r\n.card .card-image img {\r\n  width: 100%;\r\n  opacity: 0.5;\r\n}\r\n\r\n.image {\r\n  position: relative;\r\n  max-height: 120px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.overlay {\r\n\tz-index: 999999;\r\n\tposition: absolute;\r\n\tcolor: yellow;\r\n\tfont-size: 24px;\r\n\tfont-weight: bold;\r\n\tleft: 150px;\r\n\ttop: 350px;\r\n\tdisplay: block;\r\n}\r\n\r\n.requirements-list {\r\n  max-height: 145px;\r\n}\r\n\r\n.contact-card {\r\n  max-width: 100%;\r\n  background: #fff;\r\n  padding: 8px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px silver;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.contact-card-image {\r\n  width: 50px;\r\n  height: 50px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  margin-right: 15px;\r\n  overflow: hidden;\r\n}\r\n\r\n.contact-card-image img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.contact-card-name {\r\n  text-transform: capitalize;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/positions/position-view/position-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-7 col-sm-7 col-xs-12\">\r\n\t<div class=\"card\">\r\n\t\t<div class=\"card-image\">\r\n\t\t\t<img [src]=\"position.image\" alt=\"{{position.name}}\" class=\"image darken\">\r\n\t\t\t<p class=\"overlay\">{{position.title}}</p>\r\n\t\t</div>\r\n\t\t<div class=\"card-content\">\r\n\t\t\t<p class=\"card-content-job\">{{position.description}}</p>\r\n\t\t\t<h4 class=\"red-text\">Requirements</h4>\r\n\t\t\t<ul class=\"requirements-list list-no-bullets\">\r\n\t\t\t\t<li *ngFor=\"let requirement of position.requirements\">\r\n\t\t\t\t\t<i class=\"ti-check-box\"></i>\r\n\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t<span class=\"blue-text\">{{requirement.level}}</span>\r\n\t\t\t\t\t\t\t@ \r\n\t\t\t\t\t\t\t<span>{{requirement.name}}</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"col-md-5 col-sm-5 col-xs-12\">\r\n\t<div class=\"card card-user white-backgound\">\r\n\t\t<div class=\"image red\">\r\n\t\t\t<h2 class=\"text-center white-text\" style=\"vertical-align: middle;\">Candidates</h2>\r\n\t\t</div>\r\n\t\t<div class=\"content\" style=\"height: 367px; overflow-y: scroll\">\r\n\t\t\t<div class=\"contact-card\" *ngFor=\"let candidate of positionCandidates\">\r\n\t\t\t\t<div class=\"contact-card-image\">\r\n\t\t\t\t\t<img [src]=\"candidate.avatar\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"contact-card-info\">\r\n\t\t\t\t\t<div class=\"contact-card-name\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/candidates', candidate.id]\">{{candidate.firstName}} {{candidate.lastName}}</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"contact-card-number\">{{candidate.email}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style=\"max-height: 50px; margin-left:25px; float:right;\">\r\n\t\t\t\t\t<p class=\"blue-text\"><strong>Score:</strong></p>\r\n\t\t\t\t\t<p class=\"red-text\">{{candidate.score}}/100</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/positions/position-view/position-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_positions_service__ = __webpack_require__("../../../../../src/app/services/positions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_position__ = __webpack_require__("../../../../../src/app/domain/position.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.position = new __WEBPACK_IMPORTED_MODULE_2__domain_position__["a" /* Position */](this.positionId, "General Position", "Our job descriptions highlight the primary responsibilities, requirements, qualifications and challenges of a given job. In short, a job description will tell you what your employer will expect from you, as well as what you can expect from your employer.\n    Whether you\u2019re looking for your first job or researching what you\u2019ll need to do to land your dream job in the future, our job descriptions will help point you in the right direction.", __WEBPACK_IMPORTED_MODULE_0__util_mocks__["c" /* SKILLS */], new Date("12.12.2017"));
        this.positionCandidates = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["d" /* CANDIDATES */][0];
    };
    return PositionViewComponent;
}());
PositionViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'position-view',
        template: __webpack_require__("../../../../../src/app/positions/position-view/position-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/position-view/position-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_positions_service__["a" /* PositionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_positions_service__["a" /* PositionsService */]) === "function" && _b || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_mocks__ = __webpack_require__("../../../../../src/app/util/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_positions_service__ = __webpack_require__("../../../../../src/app/services/positions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
            .subscribe(function (data) { return _this.positions = data; }, function (error) { return _this.positions = __WEBPACK_IMPORTED_MODULE_0__util_mocks__["b" /* POSITIONS */]; });
    };
    return PositionsComponent;
}());
PositionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'positions',
        template: __webpack_require__("../../../../../src/app/positions/positions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/positions/positions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_positions_service__["a" /* PositionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_positions_service__["a" /* PositionsService */]) === "function" && _a || Object])
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
    }
    // TODO: add skill routings
    SkillService.prototype.getSkills = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_0__util_router_utils__["a" /* RouterUtils */].candidateSkillsUrl(1))
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMENT_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMMENT_NOT_SAVED; });
var COMMENT_SAVED = "The comment was saved";
var COMMENT_NOT_SAVED = "The comment was not saved. Please try again!";
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "../../../../../src/app/util/mocks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_skill__ = __webpack_require__("../../../../../src/app/domain/skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_candidate__ = __webpack_require__("../../../../../src/app/domain/candidate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_language__ = __webpack_require__("../../../../../src/app/domain/language.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_education__ = __webpack_require__("../../../../../src/app/domain/education.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_experience__ = __webpack_require__("../../../../../src/app/domain/experience.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__ = __webpack_require__("../../../../../src/app/domain/chat-message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_question__ = __webpack_require__("../../../../../src/app/domain/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_position__ = __webpack_require__("../../../../../src/app/domain/position.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domain_comment__ = __webpack_require__("../../../../../src/app/domain/comment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GENERIC_CANDIDATE; });
/* unused harmony export CHAT_BOT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CANDIDATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EDUCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return COMMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EXPERIENCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CONVERSATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return INTERESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUESTIONS; });









var GENERIC_CANDIDATE = new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](1, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#EDB63F');
var CHAT_BOT = new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](0, 'HR', 'Ninja', 'hr@ninja.com', 'male');
var CANDIDATES = [
    [
        new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](1, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#EDB63F'),
        new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](2, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#DD8335'),
        new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](3, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'female', 'Awesome description', 23, 45, 9, '#D03A43'),
        new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](4, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#A6315D')
    ], [
        new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](5, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'female', 'Awesome description', 23, 45, 9, '#734488'),
        new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](6, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'female', 'Awesome description', 23, 45, 9, '#3868A6'),
        new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](7, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#449C76'),
        new __WEBPACK_IMPORTED_MODULE_1__domain_candidate__["a" /* Candidate */](8, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#88B25C')
    ]
];
var SKILLS = [
    new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Java", 100),
    new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("CSharp", 50),
    new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Python", 30),
    new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Sql", 77),
    new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Typescript", 46),
    new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Spring", 80),
    new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Hibernate", 70)
];
var LANGUAGES = [
    new __WEBPACK_IMPORTED_MODULE_2__domain_language__["a" /* Language */]("English", 100, 100, 90),
    new __WEBPACK_IMPORTED_MODULE_2__domain_language__["a" /* Language */]("German", 70, 20, 20)
];
var EDUCATION = [
    new __WEBPACK_IMPORTED_MODULE_3__domain_education__["a" /* Education */]("UPB - FILS", "MBAE", new Date("12/12/2016 12:00:00"), new Date("12/12/2018 12:00:00"), 9.5),
    new __WEBPACK_IMPORTED_MODULE_3__domain_education__["a" /* Education */]("UPB - FILS", "Computer Science", new Date("12/12/2012"), new Date("12/12/2016 12:00:00"), 9.5),
    new __WEBPACK_IMPORTED_MODULE_3__domain_education__["a" /* Education */]("CNDG - FILS", "Mate-Info", new Date("12/12/2008 12:00:00"), new Date("12/12/2012 12:00:00"), 9.3),
    new __WEBPACK_IMPORTED_MODULE_3__domain_education__["a" /* Education */]("Blocuri", "Scoala Vietii", new Date("12/12/2000 12:00:00"), new Date("12/12/2008 12:00:00"), 9.3)
];
var COMMENTS = [
    new __WEBPACK_IMPORTED_MODULE_8__domain_comment__["a" /* Comment */]("Mom", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Best candidate", new Date("2016/01/01 23:28:56")),
    new __WEBPACK_IMPORTED_MODULE_8__domain_comment__["a" /* Comment */]("Dad", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Seems to be the best fit", new Date("2016/01/02 23:28:56")),
    new __WEBPACK_IMPORTED_MODULE_8__domain_comment__["a" /* Comment */]("Girl", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Everyone should have an employee like him", new Date("2016/01/03 23:28:56")),
    new __WEBPACK_IMPORTED_MODULE_8__domain_comment__["a" /* Comment */]("CEO", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "I'm telling you, i'm gonna step down and this guy will take my place!", new Date("2016/01/04 23:28:56")),
    new __WEBPACK_IMPORTED_MODULE_8__domain_comment__["a" /* Comment */]("Fan", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Definitely a keeper!", new Date("2016/01/05 23:28:56"))
];
var EXPERIENCES = [
    new __WEBPACK_IMPORTED_MODULE_4__domain_experience__["a" /* Experience */]("Software Engineer", "Ericsson", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", new Date("12/12/2016 12:00:00"), new Date("12/12/2018 12:00:00")),
    new __WEBPACK_IMPORTED_MODULE_4__domain_experience__["a" /* Experience */]("Software Developer Intern", "Teamnet", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", new Date("12/12/2016 12:00:00"), new Date("12/12/2018 12:00:00")),
    new __WEBPACK_IMPORTED_MODULE_4__domain_experience__["a" /* Experience */]("Android Developer Intern", "XLTeam", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", new Date("12/12/2016 12:00:00"), new Date("12/12/2018 12:00:00")),
];
var POSITIONS = [
    [
        new __WEBPACK_IMPORTED_MODULE_7__domain_position__["a" /* Position */](1, "Senior Java Developer", "Work with the latest technologies, enhance and evolve together with the projects", [new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Java", 78), new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Angular", 50)], new Date("2016/01/01 23:28:56")),
        new __WEBPACK_IMPORTED_MODULE_7__domain_position__["a" /* Position */](2, "Senior Architect", "Work with Cloud Architectures, build and enhance existing ones.", [new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Java", 90), new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Angular", 70)], new Date("2016/01/01 23:28:56"))
    ], [
        new __WEBPACK_IMPORTED_MODULE_7__domain_position__["a" /* Position */](3, "Senior Java Developer", "Work with the latest technologies, enhance and evolve together with the projects", [new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Java", 78), new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Angular", 50)], new Date("2016/01/01 23:28:56")),
        new __WEBPACK_IMPORTED_MODULE_7__domain_position__["a" /* Position */](4, "Senior Architect", "Work with Cloud Architectures, build and enhance existing ones.", [new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Java", 90), new __WEBPACK_IMPORTED_MODULE_0__domain_skill__["a" /* Skill */]("Angular", 70)], new Date("2016/01/01 23:28:56"))
    ]
];
var CONVERSATION = [
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](1, GENERIC_CANDIDATE, "Hello", new Date("2016/01/01 22:00:08")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](2, CHAT_BOT, "Hello. Nice to meet you. How can I help you?", new Date("2016/01/01 22:00:33")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](3, GENERIC_CANDIDATE, "I would like to know about the open Java Position", new Date("2016/01/01 22:01:02")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](4, CHAT_BOT, "Here is a list of the available position. Read them and tell me which one are you interested in.", new Date("2016/01/01 22:01:08")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](5, GENERIC_CANDIDATE, "I'm interested in the Senior Java Architect One", new Date("2016/01/01 22:02:14")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](6, CHAT_BOT, "Ok. So...how should we proceed? Do you want to tell me about your experience or should I ask you specific questions?", new Date("2016/01/01 22:02:15")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](7, GENERIC_CANDIDATE, "I'll answer your questions.", new Date("2016/01/01 22:03:01")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](8, CHAT_BOT, "What's your education?", new Date("2016/01/01 22:04:04")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](9, GENERIC_CANDIDATE, "I've studied in UCLA for 3 years as a Computer Science student. I've graduated with 10 actually.", new Date("2016/01/01 22:05:08")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](10, CHAT_BOT, "That's great. Anything else?", new Date("2016/01/01 22:06:08")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](11, GENERIC_CANDIDATE, "I've also worked for Teamnet as a java developer for 2 years.", new Date("2016/01/01 22:07:08")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](12, CHAT_BOT, "Sounds like you fit. I'll notice my colleagues and they will get back to you! Have a nice day!", new Date("2016/01/01 22:08:08")),
    new __WEBPACK_IMPORTED_MODULE_5__domain_chat_message__["a" /* ChatMessage */](13, GENERIC_CANDIDATE, "Ok. You to! And thank you for your time!", new Date("2016/01/01 22:09:08"))
];
var INTERESTS = [
    {
        "name": "Basketball"
    }, {
        "name": "Programming"
    }, {
        "name": "Swimming"
    }, {
        "name": "Traveling"
    }, {
        "name": "Rubbing the mint"
    }
];
var QUESTIONS = [
    new __WEBPACK_IMPORTED_MODULE_6__domain_question__["a" /* Question */](1, 1, "Intrebarea UNU?", new Array()),
    new __WEBPACK_IMPORTED_MODULE_6__domain_question__["a" /* Question */](2, 2, "Intrebarea DOI?", new Array()),
    new __WEBPACK_IMPORTED_MODULE_6__domain_question__["a" /* Question */](3, 3, "Intrebarea TREI?", new Array()),
    new __WEBPACK_IMPORTED_MODULE_6__domain_question__["a" /* Question */](4, 4, "Intrebarea PATRU?", new Array()),
    new __WEBPACK_IMPORTED_MODULE_6__domain_question__["a" /* Question */](5, 5, "Intrebarea CINCI?", new Array()),
    new __WEBPACK_IMPORTED_MODULE_6__domain_question__["a" /* Question */](6, 6, "Intrebarea SASE?", new Array()),
    new __WEBPACK_IMPORTED_MODULE_6__domain_question__["a" /* Question */](7, 7, "Intrebarea SAPTE?", new Array()),
    new __WEBPACK_IMPORTED_MODULE_6__domain_question__["a" /* Question */](8, 8, "Intrebarea OPT?", new Array()),
];
//# sourceMappingURL=mocks.js.map

/***/ }),

/***/ "../../../../../src/app/util/router.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterUtils; });

var RouterUtils = (function () {
    function RouterUtils() {
    }
    /**
     * Url for retrieving all the candidates
     */
    RouterUtils.candidatesUrl = function () {
        return this.baseUrl + this.candidates;
    };
    /**
     * Url for retrieving the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId;
    };
    /**
     * Url for retrieving the skills associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateSkillsUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.skills;
    };
    /**
     * Url for retrieving the interests associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateInterestsUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.interests;
    };
    /**
     * Url for retrieving the experience associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateExperienceUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.experience;
    };
    /**
     * Url for retrieving the education associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateEducationUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.education;
    };
    /**
     * Url for retrieving the languages associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateLanguagesUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.languages;
    };
    /**
     * Url for retrieving the comments associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateCommentsUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.comments;
    };
    /**
     * Url for creating a comment for the candidate with the provided candidate id
     * @param candidateId
     */
    RouterUtils.createCommentUrl = function (candidateId) {
        return this.candidateCommentsUrl(candidateId);
    };
    /**
     * Url for retrieving the number of likes associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateLikesUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.likes;
    };
    /**
     * Url for liking a candidate with the provided id
     * @param candidateId
     */
    RouterUtils.likeCandidateUrl = function (candidateId) {
        return this.candidateLikesUrl(candidateId);
    };
    /**
     * Url for retrieving the average rating associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateRatingUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.rating;
    };
    RouterUtils.rateCandidateUrl = function (candidateId) {
        return this.candidateRatingUrl(candidateId);
    };
    /**
     * Url for retrieving the chat associated with the candidate with the provided id
     * @param candidateId
     */
    RouterUtils.candidateChatUrl = function (candidateId) {
        return this.baseUrl + this.candidate + candidateId + this.chat;
    };
    /**
     * Url for retrieving all the positions
     */
    RouterUtils.positionsUrl = function () {
        return this.baseUrl + this.positions;
    };
    /**
     * Url for retrieving the position with the provided id
     * @param positionId
     */
    RouterUtils.positionUrl = function (positionId) {
        return this.baseUrl + this.position + positionId;
    };
    /**
     * Url for creating a new Position entity
     */
    RouterUtils.createPositionUrl = function () {
        return this.positionsUrl();
    };
    /**
     * Url for deleting a Position entity with the provided id
     * @param positionId
     */
    RouterUtils.deletePositionUrl = function (positionId) {
        return this.positionUrl(positionId);
    };
    /**
     * Url for retrieving the requirements associated with the position with the provided id
     * @param positionId
     */
    RouterUtils.positionRequirementsUrl = function (positionId) {
        return this.baseUrl + this.position + positionId + this.positionRequirements;
    };
    /**
     * Url for creating a requirement for the position with the provided id
     * @param positionId
     */
    RouterUtils.createPositionRequirementUrl = function (positionId) {
        return this.positionRequirementsUrl(positionId);
    };
    /**
     * Url for deleting a requirement with the provided id
     */
    RouterUtils.deletePositionRequirementUrl = function (positionId, skillId) {
        return this.positionRequirementsUrl(positionId) + "/" + skillId;
    };
    /**
     * Url for retrieving the candidates associated with the position with the provided id
     */
    RouterUtils.positionCandidatesUrl = function (positionId) {
        return this.baseUrl + this.position + positionId + this.positionCandidates;
    };
    /**
     * Url for retrieving all the questions
     */
    RouterUtils.questionsUrl = function () {
        return this.baseUrl + this.questions;
    };
    /**
     * Url for retrieving the question with the provided id
     * @param questionId
     */
    RouterUtils.questionUrl = function (questionId) {
        return this.baseUrl + this.question + questionId;
    };
    /**
     * Url for creating a question
     */
    RouterUtils.createQuestionUrl = function () {
        return this.questionsUrl();
    };
    /**
     * Url for deleting the question with the provided id
     * @param questionId
     */
    RouterUtils.deleteQuestionUrl = function (questionId) {
        return this.questionUrl(questionId);
    };
    /**
     * Url for retrieving the replies associated with the question with the provided id
     * @param questionId
     */
    RouterUtils.repliesUrl = function (questionId) {
        return this.baseUrl + this.question + questionId + this.replies;
    };
    /**
     * Url for creating a reply for the question with the provided id
     * @param questionId
     */
    RouterUtils.createReplyUrl = function (questionId) {
        return this.repliesUrl(questionId);
    };
    /**
     * Url for deleting the reply with the provided id
     * @param replyId
     */
    RouterUtils.deleteReplyUrl = function (questionId, replyId) {
        return this.repliesUrl(questionId) + "/" + replyId;
    };
    return RouterUtils;
}());

RouterUtils.baseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].herokuUrl ? "https://recruitingmessbot.herokuapp.com/api" : "http://localhost:8080/RecruitingBot/api";
/** URLs finishing in / need additional id parameter

 * URLS:
 *
 * /api/candidates
 * /api/candidates/:candidateId
 * /api/candidates/:candidateId/skills
 * /api/candidates/:candidateId/interests
 * /api/candidates/:candidateId/experience
 * /api/candidates/:candidateId/education
 * /api/candidates/:candidateId/languages
 * /api/candidates/:candidateId/comments
 * /api/chat/:candidateId
 *
 * /api/positions
 * /api/positions/:positionId
 * /api/positions/:positionId/skills
 * /api/positions/:positionId/candidates
 *
 * /api/questions
 * /api/questions/:questionId
 * /api/questions/:questionId/replies
 *
 * /api/interview/:candidateId
 *
*/
RouterUtils.candidates = "/candidates";
RouterUtils.candidate = "/candidates/";
RouterUtils.skills = "/skills/";
RouterUtils.interests = "/interests";
RouterUtils.experience = "/experience";
RouterUtils.education = "/education";
RouterUtils.languages = "/languages";
RouterUtils.comments = "/comments";
RouterUtils.likes = "/likes";
RouterUtils.rating = "/rating";
RouterUtils.chat = "/chat";
RouterUtils.positions = "/positions";
RouterUtils.position = "/positions/";
RouterUtils.positionRequirements = "/skills";
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
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