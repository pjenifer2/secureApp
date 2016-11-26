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
var MetricListComponent = (function () {
    function MetricListComponent() {
        this.pageTitle = 'Enterprise Risk Insights';
        this.userName = 'Luke Skywalker';
        this.listFilter = 'Phish';
        this.metrics = [
            {
                "metricId": 1,
                "metricName": "Individuals failing Phishing tests",
                "metricValue": "3",
                "metricAction": 0,
                "metricComm": 1,
                "userDismiss": 1
            },
            {
                "metricId": 2,
                "metricName": "Database Activity Monitoring Coverage",
                "metricValue": "95%",
                "metricAction": 1,
                "metricComm": 1,
                "userDismiss": 1
            },
            {
                "metricId": 3,
                "metricName": "Non-Redacted Users with Database Access",
                "metricValue": "65",
                "metricAction": 1,
                "metricComm": 1,
                "userDismiss": 1
            },
            {
                "metricId": 4,
                "metricName": "Recommended Vulnerability Actions",
                "metricValue": "4",
                "metricAction": 0,
                "metricComm": 1,
                "userDismiss": 1
            }
        ];
    }
    MetricListComponent = __decorate([
        core_1.Component({
            selector: 'pm-metrics',
            templateUrl: 'app/metrics/metric-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MetricListComponent);
    return MetricListComponent;
}());
exports.MetricListComponent = MetricListComponent;
//# sourceMappingURL=metric-list.component.js.map