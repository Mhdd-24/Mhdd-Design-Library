import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output, signal } from '@angular/core';
import { backwardLeft, leftArrow, rightArrow, forwardRight } from '../../constants/svg-config';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SvgIconFactory } from '../svg-icon/svg-icon.factory';
import { TableSettings, DEFAULT_TABLE_CONFIG, TableHeader, PaginationItem } from './table.factory';

@Component({
  selector: 'mhdd-table',
  standalone: true,
  imports: [CommonModule, DateFormatPipe, SvgIconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  tableConfig = input<TableSettings>(DEFAULT_TABLE_CONFIG);
  headers = input<TableHeader[]>([]);
  data = input<any[]>([]);
  pagedData = input<any[]>([]);
  totalPages = input<number>(1);
  totalItems = input<number>(0);
  displayedPages = input<PaginationItem[]>([]);
  imageSrcForwardPer = input<string>('');
  imageSrcLeftPage = input<string>('');
  imageSrcNextPage = input<string>('');
  imageSrcFastForward = input<string>('');

  @Output() tableConfigChange = new EventEmitter<TableSettings>();
  @Output() rowClick = new EventEmitter<any>();
  @Output() actionClick = new EventEmitter<{ row: any, action: string }>();
  @Output() optionClick = new EventEmitter<{ row: any, option: string }>();
  @Output() dropdownToggleEvent = new EventEmitter<string>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() nextPageEvent = new EventEmitter<void>();
  @Output() prevPageEvent = new EventEmitter<void>();
  @Output() firstPageEvent = new EventEmitter<void>();
  @Output() lastPageEvent = new EventEmitter<number>();

  public dropdownOpenId = signal<string | null>(null);
  public math = signal<Math>(Math);
  public svgIconFactory = SvgIconFactory;
  public backWardLeftObj = backwardLeft;
  public pervObj = leftArrow;
  public nextObj = rightArrow;
  public fastForwardObj = forwardRight;

  public onTextClick = (row: any) => {
    this.rowClick.emit(row);
  }

  public onActionClick = (row: any, actionText: string) => {
    this.actionClick.emit({ row, action: actionText });
  }

  public onOptionClick = (row: any, optionText: string) => {
    this.optionClick.emit({ row, option: optionText });
  }

  public toggleDropdown = (id: string) => {
    const currentId = this.dropdownOpenId();
    const newId = currentId === id ? null : id;
    this.dropdownOpenId.set(newId);
    if (newId !== null) {
      this.dropdownToggleEvent.emit(newId);
    }
  }

  public getCellValue = (row: any, key: string): any => {
    return row[key];
  }

  public getImage = (row: any, key: string): string => {
    return (row[key] as any)?.image;
  }

  public goToPage = (page: number) => {
    if (page >= 1 && page <= this.totalPages()) {
      this.pageChange.emit(page);
      if (page === 1) {
        this.firstPageEvent.emit();
      } else if (page === this.totalPages()) {
        this.lastPageEvent.emit(this.totalPages());
      }
    }
  }

  public nextPage = () => {
    this.nextPageEvent.emit();
  }

  public prevPage = () => {
    this.prevPageEvent.emit();
  }
}
