import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MetricListComponent } from './metrics/metric-list.component';
import { MetricFilterPipe} from './metrics/metric-filter.pipe';
import { MetricDetailComponent } from './metrics/metric-detail.component';
import { WelcomeComponent } from './home/welcome.component'

@NgModule({
  imports: [  BrowserModule, 
              FormsModule, 
              HttpModule, 
              RouterModule.forRoot([
                { path: 'metrics', component: MetricListComponent },
                { path: 'metric/:id', component: MetricDetailComponent },
                { path: 'metrics', component: MetricListComponent, pathMatch: 'full'},
                { path: '', redirectTo: 'metrics' ,pathMatch: 'full'},
                { path: '**', redirectTo: 'metrics', pathMatch: 'full'}

              ])
            ],

  declarations: [   AppComponent, 
                    MetricListComponent, 
                    MetricFilterPipe, 
                    MetricDetailComponent,
                    WelcomeComponent 
                ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
