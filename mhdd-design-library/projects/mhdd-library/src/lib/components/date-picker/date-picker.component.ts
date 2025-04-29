import { NgClass } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, input, Output, signal } from '@angular/core';
import { calendar, downArrow } from '../../constants/svg-config';
import { DatepickerProperties, DEFAULT_DATEPICKER_PROPS } from './date-picker.factory';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SvgIconFactory } from '../svg-icon/svg-icon.factory';

@Component({
  selector: 'mhdd-date-picker',
  standalone: true,
  imports: [NgClass, SvgIconComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  dateObj = input<DatepickerProperties>(DEFAULT_DATEPICKER_PROPS);
  selectedDate = input<string>('');
  disabled = input<boolean>(false);
  imageSrcCalender = input<string>('');
  imageSrcDownArrow = input<string>('');

  @Output() dateChangeEvent: EventEmitter<any> = new EventEmitter<DatepickerProperties>();

  public showDatepicker = signal<boolean>(false);
  public showYear = signal<number>(0);
  public selectedYear = signal<number>(0);
  public seletedMonth = signal<string>('');
  public selectedIndex = signal<number>(-1);
  public svgIconFactory = SvgIconFactory;
  public calenderObj = calendar;
  public downArrowObj = downArrow;

  private _elementRef = inject(ElementRef);

  public handleDatepicker = () => {
    this.showDatepicker.set(this.showDatepicker() ? false : true);
  }

  public handleYearClick = (year: number, index: number) => {
    this.showYear.set(year);
    this.selectedIndex() === index ? this.selectedIndex.set(-1) : this.selectedIndex.set(index);
  }

  public handleMonthclick = (year: number, month: string) => {
    this.seletedMonth.set(month);
    this.selectedYear.set(year);
    this.selectedIndex.set(-1);
    const obj = { year: this.selectedYear(), month: this.seletedMonth() };
    this.dateChangeEvent.emit(obj);
  }

  public handleOverlayClick = (event: MouseEvent): void => {
    const props = this.dateObj();
    if (props.closeOnClickOutside !== false) {
      const dropdownElement = this._elementRef.nativeElement.querySelector('.dropdown');
      if (dropdownElement && !dropdownElement.contains(event.target as Node) &&
        !this._elementRef.nativeElement.querySelector('.input-box').contains(event.target as Node)) {
        this.showDatepicker.set(false);
        this.selectedIndex.set(-1);
      }
    }
  }
}
