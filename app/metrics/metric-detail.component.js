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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var MetricDetailComponent = (function () {
    function MetricDetailComponent(_route) {
        this._route = _route;
        this.pageTitle = 'Metric Detail goes here';
    }
    MetricDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id + " ";
    };
    MetricDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/metrics/metric-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], MetricDetailComponent);
    return MetricDetailComponent;
}());
exports.MetricDetailComponent = MetricDetailComponent;
//# sourceMappingURL=metric-detail.component.js.map