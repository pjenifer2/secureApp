import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IMetric } from './metric'; 

@Injectable()

export class MetricService {
        private _metricUrl = 'api/metrics/metrics.json';

        constructor(private _http: Http){}

        getMetrics(): Observable<IMetric[]> {
                 return this._http.get(this._metricUrl)
                    .map((response: Response) => <IMetric[]> response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}