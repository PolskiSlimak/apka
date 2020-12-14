import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value): any {
    return moment(value).calendar({
      sameDay: function () {
        return (
          '[Today]' + ' ' + moment.utc(moment().diff(moment(value))).format('HH:mm:ss') + ' [ago]'
        );
      },
      lastDay: '[Yesterday] | ddd MM yy HH:mm A',
      lastWeek: '[Last] dddd MM yy HH:mm A',
      sameElse: 'DD MMM yy HH:mm A',
    });
  }
}
