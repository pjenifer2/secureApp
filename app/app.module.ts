import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MetricListComponent } from './metrics/metric-list.component';
import { MetricFilterPipe} from './metrics/metric-filter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, MetricListComponent, MetricFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
