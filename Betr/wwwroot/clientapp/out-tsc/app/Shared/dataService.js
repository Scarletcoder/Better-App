"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var order_1 = require("./order");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.order = new order_1.Order;
        this.matches = [];
    }
    DataService.prototype.loadMatches = function (id) {
        var _this = this;
        return this.http.get('/api/Match/1' /*+id*/)
            .pipe(operators_1.map(function (data) {
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
            .pipe(operators_1.map(function (response) {
            _this.order = new order_1.Order();
            return true;
        }));
    };
    DataService.prototype.AddToOrder = function (newMatch, chancType) {
        var item = this.order.items.find(function (i) { return newMatch.matchNoOfTheDay == i.matchId && i.chanceType == chancType; });
        if (item) {
            item.stake++;
        }
        else {
            item = new order_1.OrderItem();
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map