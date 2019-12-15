(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/Leagues/Leagues.component.html":
/*!********************************************!*\
  !*** ./app/Leagues/Leagues.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h4>{{title}}</h4>\r\n    <!--<table>\r\n        <tr>\r\n            <th>Name</th>\r\n        </tr>\r\n        <tr *ngFor=\"let l of leagues\">\r\n            <td>{l.name}</td>\r\n        </tr>\r\n\r\n    </table>-->\r\n\r\n\r\n    <div class=\"container\">\r\n        <div class=\"list-group\">\r\n            <!--<a class=\"list-group-item list-group-item-action\">Leagues</a>-->\r\n            <div *ngFor=\"let l of leagues\">\r\n                <!--@*////<a class=\"list-group-item list-group-item-action\">@m.Name</a>////-->\r\n                <div class=\"list-group-item list-group-item-action\">\r\n                    <a href=\"#/Matches/{{l.id}}\">{{l.name}}</a>\r\n                    <!--@Html.ActionLink(m.Name, \"Matches\", new { sid = m.Id })-->\r\n                </div>\r\n                <!--}-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--<div *ngFor=\"let l of leagues\">\r\n        <ul>\r\n            <li>{l.name}</li>\r\n        </ul>\r\n\r\n    </div>-->\r\n</div>\r\n"

/***/ }),

/***/ "./app/Leagues/Leagues.component.ts":
/*!******************************************!*\
  !*** ./app/Leagues/Leagues.component.ts ***!
  \******************************************/
/*! exports provided: Leagues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leagues", function() { return Leagues; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_leagueService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/leagueService */ "./app/Shared/leagueService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Leagues = /** @class */ (function () {
    function Leagues(data, route) {
        this.data = data;
        this.route = route;
        this.title = 'Leagues';
        this.leagues = [];
    }
    Leagues.prototype.ngOnInit = function () {
        var _this = this;
        //const id = this.route.snapshot.paramMap.get('id');
        this.data.loadLeagues()
            .subscribe(function (success) {
            if (success) {
                _this.leagues = _this.data.leagues;
            }
        });
    };
    Leagues = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Bettor-App',
            template: __webpack_require__(/*! ./Leagues.component.html */ "./app/Leagues/Leagues.component.html"),
        }),
        __metadata("design:paramtypes", [_Shared_leagueService__WEBPACK_IMPORTED_MODULE_1__["LeagueService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], Leagues);
    return Leagues;
}());



/***/ }),

/***/ "./app/Matches/MatchList.component.css":
/*!*********************************************!*\
  !*** ./app/Matches/MatchList.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\r\n    width: 100%;\r\n    min-width:100%;\r\n    \r\n}\r\n\r\n.btn {\r\n    background-color: transparent;\r\n    border: 0;\r\n    color: cornflowerblue;\r\n}"

/***/ }),

/***/ "./app/Matches/MatchList.component.html":
/*!**********************************************!*\
  !*** ./app/Matches/MatchList.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">\r\n    {id}-->\r\n    <!--<ul>\r\n        <li *ngFor=\"let m of matches\"></li>\r\n    </ul>-->\r\n<!--</div>-->\r\n\r\n<div >\r\n\r\n    <p>To add a bet to the Bet-Slip, click on the odds that you would like to add. \r\n    To increment your bet. Click on the preffered odd again.</p>\r\n\r\n    <table class=\"table table-bordered table-striped table-sm\">\r\n        <thead class=\"thead-dark\">\r\n            <tr class=\"text-center\">\r\n                <th>Match No.</th>\r\n                <th>Teams</th>\r\n                <th>Winner 1</th>\r\n                <th>Draw</th>\r\n                <th>Winner 2</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let m of matches\">\r\n            <tr class=\"text-center\">\r\n                <td>{{m.matchNoOfTheDay}}</td>\r\n                <td>{{m.team1Name}} v {{m.team2Name}}</td>\r\n                <td><button id=\"betButton1\" class=\"btn\" (click)=\"addBet(m, 1)\">{{m.team1Wins}}</button></td>\r\n                <td><button id=\"betButton3\" class=\"btn\" (click)=\"addBet(m, 3)\">{{m.draw}}</button></td>\r\n                <td><button id=\"betButton2\" class=\"btn\" (click)=\"addBet(m, 2)\">{{m.team2Wins}}</button></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./app/Matches/MatchList.component.ts":
/*!********************************************!*\
  !*** ./app/Matches/MatchList.component.ts ***!
  \********************************************/
/*! exports provided: MatchList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchList", function() { return MatchList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/dataService */ "./app/Shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchList = /** @class */ (function () {
    function MatchList(data, route) {
        this.data = data;
        this.route = route;
        this.matches = [];
        this.id = route.snapshot.params['id'];
    }
    MatchList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadMatches(this.id)
            .subscribe(function (success) {
            if (success) {
                _this.matches = _this.data.matches;
            }
        });
    };
    MatchList.prototype.addBet = function (match, chanceType) {
        this.data.AddToOrder(match, chanceType);
    };
    MatchList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Match-List',
            template: __webpack_require__(/*! ./MatchList.component.html */ "./app/Matches/MatchList.component.html"),
            styles: [__webpack_require__(/*! ./MatchList.component.css */ "./app/Matches/MatchList.component.css")]
        }),
        __metadata("design:paramtypes", [_Shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MatchList);
    return MatchList;
}());



/***/ }),

/***/ "./app/Matches/Matches.component.html":
/*!********************************************!*\
  !*** ./app/Matches/Matches.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light p-2\">\r\n    <div class=\"row\">\r\n        <div class=\"col-8\">\r\n            <h3 class=\"text-center\">{{title}}</h3>\r\n            <br />\r\n            <Match-List></Match-List>\r\n        </div>\r\n        <div class=\"offset-1 col-3\">\r\n            <div class=\"card bg-light p-2\">\r\n                <the-cart></the-cart>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./app/Matches/Matches.component.ts":
/*!******************************************!*\
  !*** ./app/Matches/Matches.component.ts ***!
  \******************************************/
/*! exports provided: Matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matches", function() { return Matches; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Matches = /** @class */ (function () {
    function Matches() {
        this.title = 'Shop';
    }
    Matches = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Bettor-App',
            template: __webpack_require__(/*! ./Matches.component.html */ "./app/Matches/Matches.component.html"),
        })
    ], Matches);
    return Matches;
}());



/***/ }),

/***/ "./app/Matches/cart.component.css":
/*!****************************************!*\
  !*** ./app/Matches/cart.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matchTeams {\r\n    font-size: 13px;\r\n}"

/***/ }),

/***/ "./app/Matches/cart.component.html":
/*!*****************************************!*\
  !*** ./app/Matches/cart.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Bet Slip</h3>\r\n<!--<div>#/Items: { data.order.items.length }}</div>-->\r\n<div class=\"container\">Subtotal: {{ data.order.subtotal | currency:\"USD\":true  }}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    \r\n    <tbody *ngFor=\"let o of data.order.items\">\r\n        <tr>\r\n            <td><strong>{{ o.teamName }}</strong></td>\r\n            <td><strong>{{ o.chance | currency:\"USD\":true}}</strong></td>\r\n        </tr>\r\n        <tr class=\"matchTeams\"><td >{{ o.matchTeams }}</td><td>{{ o.stake }}</td></tr>\r\n        <tr><td>{{ (o.chance * o.stake) | currency:\"USD\":true }}</td></tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./app/Matches/cart.component.ts":
/*!***************************************!*\
  !*** ./app/Matches/cart.component.ts ***!
  \***************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/dataService */ "./app/Shared/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Cart = /** @class */ (function () {
    function Cart(data) {
        this.data = data;
    }
    Cart = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "the-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./app/Matches/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./app/Matches/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_Shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], Cart);
    return Cart;
}());



/***/ }),

/***/ "./app/Shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/Shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order */ "./app/Shared/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.order = new _order__WEBPACK_IMPORTED_MODULE_3__["Order"];
        this.matches = [];
    }
    DataService.prototype.loadMatches = function (id) {
        var _this = this;
        return this.http.get('/api/Match/1' /*+id*/)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.matches = data;
            return true;
        }));
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.order = new _order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
            return true;
        }));
    };
    DataService.prototype.AddToOrder = function (newMatch, chancType) {
        var item = this.order.items.find(function (i) { return newMatch.matchNoOfTheDay == i.matchId && i.chanceType == chancType; });
        if (item) {
            item.stake++;
        }
        else {
            item = new _order__WEBPACK_IMPORTED_MODULE_3__["OrderItem"]();
            if (chancType == 1) {
                item.chance = newMatch.team1Wins;
                item.chanceType = 1;
                item.teamName = newMatch.team1Name;
            }
            else if (chancType == 2) {
                item.chance = newMatch.team2Wins;
                item.chanceType = 2;
                item.teamName = newMatch.team2Name;
            }
            else if (chancType == 3) {
                item.chance = newMatch.draw;
                item.chanceType = 3;
                item.teamName = "Draw";
            }
            item.matchTeams = newMatch.team1Name + " v " + newMatch.team2Name;
            item.stake = 1.00;
            item.matchId = newMatch.matchNoOfTheDay;
            this.order.items.push(item);
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/Shared/leagueService.ts":
/*!*************************************!*\
  !*** ./app/Shared/leagueService.ts ***!
  \*************************************/
/*! exports provided: LeagueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueService", function() { return LeagueService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeagueService = /** @class */ (function () {
    function LeagueService(http) {
        this.http = http;
        this.leagues = [];
    }
    LeagueService.prototype.loadLeagues = function () {
        var _this = this;
        return this.http.get('/api/League' /*+ id*/)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.leagues = data;
            return true;
        }));
    };
    LeagueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], LeagueService);
    return LeagueService;
}());



/***/ }),

/***/ "./app/Shared/order.ts":
/*!*****************************!*\
  !*** ./app/Shared/order.ts ***!
  \*****************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<!--<div class=\"row\">\r\n    <div>\r\n        <h3>{ title }</h3>\r\n        <Match-List></Match-List>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"card bg-light p-2\">\r\n            <h3>Cart</h3>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Bettor-App',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shared/dataService */ "./app/Shared/dataService.ts");
/* harmony import */ var _Shared_leagueService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/leagueService */ "./app/Shared/leagueService.ts");
/* harmony import */ var _Matches_Matches_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Matches/Matches.component */ "./app/Matches/Matches.component.ts");
/* harmony import */ var _Matches_MatchList_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Matches/MatchList.component */ "./app/Matches/MatchList.component.ts");
/* harmony import */ var _Leagues_Leagues_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Leagues/Leagues.component */ "./app/Leagues/Leagues.component.ts");
/* harmony import */ var _Matches_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Matches/cart.component */ "./app/Matches/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _Leagues_Leagues_component__WEBPACK_IMPORTED_MODULE_9__["Leagues"] },
    { path: 'Matches/:id', component: _Matches_Matches_component__WEBPACK_IMPORTED_MODULE_7__["Matches"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Matches_MatchList_component__WEBPACK_IMPORTED_MODULE_8__["MatchList"],
                _Matches_Matches_component__WEBPACK_IMPORTED_MODULE_7__["Matches"],
                _Leagues_Leagues_component__WEBPACK_IMPORTED_MODULE_9__["Leagues"],
                _Matches_cart_component__WEBPACK_IMPORTED_MODULE_10__["Cart"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                    .forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                _Shared_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"],
                _Shared_leagueService__WEBPACK_IMPORTED_MODULE_6__["LeagueService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\moham\Desktop\Bettr\Betr\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map