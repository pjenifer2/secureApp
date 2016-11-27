import { Component,OnInit } from '@angular/core';
import { IMetric } from './metric';
import { MetricService } from './metric.service'




@Component({
    moduleId: module.id,
    templateUrl: 'metric-list.component.html'
})


export class MetricListComponent implements OnInit {
    pageTitle: string = 'Enterprise Risk Insights';
    userName: string = 'Luke Skywalker';
    listFilter: string;
    metrics: IMetric[];
    errorMessage: string;

    constructor( private _metricService: MetricService){

    }

    ngOnInit(): void {
        this._metricService.getMetrics()
            .subscribe(metrics => this.metrics = metrics,
                error => this.errorMessage = <any>error);
    }

}