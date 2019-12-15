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
var core_1 = require("@angular/core");
var leagueService_1 = require("../Shared/leagueService");
var router_1 = require("@angular/router");
var Leagues = /** @class */ (function () {
    function Leagues(data, route) {
        this.data = data;
        this.route = route;
        this.title = 'Leagues';
        this.leagues = [];
    }
    Leagues.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadLeagues()
            .subscribe(function (success) {
            if (success) {
                _this.leagues = _this.data.leagues;
            }
        });
    };
    Leagues = __decorate([
        core_1.Component({
            selector: 'Bettor-App',
            templateUrl: 'Leagues.component.html',
        }),
        __metadata("design:paramtypes", [leagueService_1.LeagueService, router_1.ActivatedRoute])
    ], Leagues);
    return Leagues;
}());
exports.Leagues = Leagues;
//# sourceMappingURL=Leagues.component.js.map