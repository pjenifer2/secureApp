import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMetric } from './metric';

@Component({
    templateUrl: 'app/metrics/metric-detail.component.html'
})

export class MetricDetailComponent implements OnInit {
    pageTitle: string = 'Metric Detail goes here';
    metric: IMetric;

    constructor( private _route: ActivatedRoute){}

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id} `;
    }

}