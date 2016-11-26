import { Component } from '@angular/core';



@Component({
    selector: 'pm-metrics',
    templateUrl: 'app/metrics/metric-list.component.html'

})


export class MetricListComponent {
    pageTitle: string = 'Enterprise Risk Insights';
    userName: string = 'Luke Skywalker';
    listFilter: string = 'Phish';
    metrics: any[] = [
        {
            "metricId" : 1,
            "metricName" : "Individuals failing Phishing tests",
            "metricValue" : "3",
            "metricAction" : 0,
            "metricComm" : 1,
            "userDismiss" : 1
            
        },
        {
            "metricId" : 2,
            "metricName" : "Database Activity Monitoring Coverage",
            "metricValue" : "95%",
            "metricAction" : 1,
            "metricComm" : 1,
            "userDismiss" : 1
            
        },
        {
            "metricId" : 3,
            "metricName" : "Non-Redacted Users with Database Access",
            "metricValue" : "65",
            "metricAction" : 1,
            "metricComm" : 1,
            "userDismiss" : 1
            
        },
        {
            "metricId" : 4,
            "metricName" : "Recommended Vulnerability Actions",
            "metricValue" : "4",
            "metricAction" : 0,
            "metricComm" : 1,
            "userDismiss" : 1
            
        }

    ]

}