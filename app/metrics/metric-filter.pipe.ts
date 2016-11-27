import { PipeTransform, Pipe } from '@angular/core';
import { IMetric } from './metric';

@Pipe ({
    name:  'metricFilter'
})

export class MetricFilterPipe implements PipeTransform {

            transform(value: IMetric[], filterBy: string ): IMetric[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((metric: IMetric) =>
            metric.metricName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;  
    }
}