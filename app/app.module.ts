import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MetricListComponent } from './metrics/metric-list.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MetricListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
