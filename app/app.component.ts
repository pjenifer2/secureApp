import { Component } from '@angular/core';
import { MetricService } from './metrics/metric.service'

@Component({
    selector: 'pm-app',
    template: `
        
            <pm-metrics></pm-metrics>
        
    `,
    providers: [ MetricService ]
})

export class AppComponent { 
    pageTitle: string = 'Secure Portal';
}
