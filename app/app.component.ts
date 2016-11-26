import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        
            <pm-metrics></pm-metrics>
        
    `
})

export class AppComponent { 
    pageTitle: string = 'Secure Portal';
}
