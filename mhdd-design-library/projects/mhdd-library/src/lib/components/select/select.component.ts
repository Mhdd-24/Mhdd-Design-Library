import { CommonModule } from '@angular/common';
import { Component, ElementRef, forwardRef, inject, input, output, signal, ViewChild } from '@angular/core';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { SelectProperties, SelectFactory } from './select.factory';

export interface SelectOption {
  value: any;
  label: string;
}

@Component({
  selector: 'mhdd-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => SelectComponent),
          multi: true
      }
  ]
})
export class SelectComponent {
  @ViewChild('searchInput') searchInputRef!: ElementRef;

  selectProperties = input<SelectProperties>(SelectFactory.create({}));
  options = input<SelectOption[]>([]);

  selectionChange = output<any>();
  dropdownToggle = output<boolean>();
  searchChange = output<string>();

  public selectedValues = signal<SelectOption[]>([]);
  public isOpen = signal<boolean>(false);
  public searchControl = signal<any>(new FormControl(''));
  public filteredOptions = signal<SelectOption[]>([]);
  public noOptions = signal('No options available');

  private elementRef = signal<any>(inject(ElementRef));
  private _disabled = false;

  ngOnInit() {
      this.filteredOptions.set([...this.options()]);
      this.searchControl().valueChanges.subscribe((term: string) => {
          this.filterOptions(term || '');
          this.searchChange.emit(term);
      });
      document.addEventListener('click', this.closeDropdownOutside.bind(this));
  }

  ngOnDestroy() {
      document.removeEventListener('click', this.closeDropdownOutside.bind(this));
  }

  public toggleDropdown = ()=> {
      if (this.isDisabled()) return;
      this.isOpen.set(!this.isOpen());
      this.dropdownToggle.emit(this.isOpen());
      if (this.isOpen()) {
          this.onTouched();
          setTimeout(() => {
              this.searchInputRef?.nativeElement?.focus();
          }, 0);
          this.searchControl().setValue('');
          this.filteredOptions.set([...this.options()]);
      }
  }

  public filterOptions = (searchTerm: string)=> {
      if (!searchTerm.trim()) {
          this.filteredOptions.set([...this.options()]);
          return;
      }
      const term = searchTerm.toLowerCase();
      this.filteredOptions.set(this.options().filter(option =>
          option.label.toLowerCase().includes(term)
      ));
  }

  public selectOption = (option: SelectOption, event: MouseEvent)=> {
      event.stopPropagation();
      if (this.selectProperties().multiple) {
          const index = this.selectedValues().findIndex(val => val.value === option.value);
          (index === -1) ? this.selectedValues.set([...this.selectedValues(), option]) : this.selectedValues.set(this.selectedValues().filter(val => val.value !== option.value));
      } else {
          this.selectedValues.set([option]);
          this.isOpen.set(false);
      }
      const emitValue = this.selectProperties().multiple ?
          this.selectedValues().map(opt => opt.value) :
          this.selectedValues().length ? this.selectedValues()[0].value : null;
      this.onChange(emitValue);
      this.selectionChange.emit(emitValue);
  }

  public removeValue = (option: SelectOption, event: MouseEvent)=> {
      event.stopPropagation();
      this.selectedValues.set(this.selectedValues().filter(val => val.value !== option.value));
      const emitValue = this.selectProperties().multiple ?
          this.selectedValues().map(opt => opt.value) :
          null;
      this.onChange(emitValue);
      this.selectionChange.emit(emitValue);
  }

  public isSelected = (value: any): boolean => {
      return this.selectedValues().some(option => option.value === value);
  }

  public writeValue = (value: any): void => {
      if (value === null || value === undefined) {
          this.selectedValues.set([]);
      } else if (this.selectProperties().multiple && Array.isArray(value)) {
          const selectedOptions = value.map(val => {
              const option = this.options().find(opt => opt.value === val);
              return option || { value: val, label: val.toString() };
          });
          this.selectedValues.set(selectedOptions);
      } else {
          const option = this.options().find(opt => opt.value === value);
          if (option) {
              this.selectedValues.set([option]);
          } else if (value) {
              this.selectedValues.set([{ value, label: value.toString() }]);
          } else {
              this.selectedValues.set([]);
          }
      }
  }

  public registerOnChange = (fn: any): void => {
      this.onChange = fn;
  }

  public registerOnTouched = (fn: any): void => {
      this.onTouched = fn;
  }

  public setDisabledState = (isDisabled: boolean): void => {
      const currentProps = this.selectProperties();
      this._disabled = isDisabled;
  }

  public isDisabled = (): boolean => {
      return this.selectProperties().disabled || this._disabled;
  }

  private onChange: (value: any) => void = () => {};

  private onTouched: () => void = () => {};

  private closeDropdownOutside = (event: MouseEvent)=> {
      const target = event.target as HTMLElement;
      if (this.isOpen() && !this.elementRef().nativeElement.contains(target)) {
          this.isOpen.set(false);
          this.dropdownToggle.emit(false);
      }
  }
}
