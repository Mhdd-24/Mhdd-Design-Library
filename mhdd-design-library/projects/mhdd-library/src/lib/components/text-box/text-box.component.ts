import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { search } from '../../constants/svg-config';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SvgIconFactory } from '../svg-icon/svg-icon.factory';
import { TextboxProperties, TextboxFactory, searchList } from './text-box.factory';

@Component({
  selector: 'mhdd-text-box',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss'
})
export class TextBoxComponent implements OnChanges{
  texboxObj = input<TextboxProperties>(TextboxFactory.create({}));
  inputValue = input<string>('');
  disabled = input<boolean>(false);
  error = input<string>('');
  searchObj = input<searchList[]>([]);
  filteredResults = input<searchList[]>([]);

  @Output() textChangeEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();

  public isDropdownActive = signal(false);
  public internalPlaceholder = signal('');
  public isfocus = signal(false);
  public searchIconObj = search;
  public svgIconFactory = SvgIconFactory

  ngOnChanges(changes: SimpleChanges): void {
      (changes['texboxObj'] && !changes['texboxObj'].firstChange) &&
          this.internalPlaceholder.set(this.isfocus() ? (this.texboxObj().placeholder || '') : '');
  }

  public handleTextChange = (event: Event, key: string) => {
      const value = (event.target as HTMLInputElement).value;
      this.isDropdownActive.set(value.length > 0);
      if (this.texboxObj().type === 'search') {
          this.searchEvent.emit({
              key,
              value,
              type: 'input',
              searchTerm: value
          });
      } else {
          this.textChangeEvent.emit({ key, value });
      }
  }

  public handleItemSelection = (item: searchList) => {
      this.isDropdownActive.set(false);
      this.searchEvent.emit({
          key: this.texboxObj().key,
          value: item.value,
          type: 'select',
          selected: true,
          selectedItem: item
      });
  }

  public handleFocus = (): void => {
      this.isfocus.set(true);
      this.internalPlaceholder.set(this.texboxObj().placeholder || '');

      if (this.inputValue() && this.texboxObj().type === 'search') {
          this.isDropdownActive.set(true);
          this.searchEvent.emit({
              key: this.texboxObj().key,
              value: this.inputValue(),
              type: 'focus'
          });
      }
  }

  public handleBlur(): void {
      setTimeout(() => {
          this.isfocus.set(false);
          this.internalPlaceholder.set('');

          setTimeout(() => {
              this.isDropdownActive.set(false);
          }, 200);
      }, 100);
  }

  public clearInput(): void {
      this.searchEvent.emit({
          key: this.texboxObj().key,
          value: '',
          type: 'clear',
          cleared: true
      });
      this.isDropdownActive.set(false);
  }
}
