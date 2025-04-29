import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any): string | null {
    return !value ? null : this.formatDate(value);
  }

  private formatDate(value: any): string | null {
    const datePipe = new DatePipe('en-GB');

    let dateValue: Date;
    if (!(value instanceof Date)) {
      dateValue = typeof value === 'string'
        ? new Date(value)
        : new Date(value);
    } else {
      dateValue = value;
    }

    return isNaN(dateValue.getTime())
      ? value
      : datePipe.transform(dateValue, 'dd-MM-yyyy');
  }
}