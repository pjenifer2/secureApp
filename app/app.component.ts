import { Component } from '@angular/core';
import { MetricService } from './metrics/metric.service'

@Component({
    selector: 'pm-app',
    template: `
        
            <router-outlet></router-outlet>
        
    `,
    providers: [ MetricService ]
})

export class AppComponent { 
    pageTitle: string = 'Secure Portal';
}
