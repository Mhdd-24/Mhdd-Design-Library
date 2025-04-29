import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, input, Output, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchFactory, SearchProperties, SearchResult } from './search-bar.factory';

@Component({
  selector: 'mhdd-search-bar',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @ViewChild('searchInputRef') searchInputRef!: ElementRef<HTMLInputElement>;

  searchObj = input<SearchProperties>(SearchFactory.create({}));
  inputValue = input<string>('');
  isDisabled = input<boolean>(false);
  searchResults = input<SearchResult[]>([]);

  @Output() searchChangeEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchSelectEvent: EventEmitter<any> = new EventEmitter<any>();
  
  isOpen = signal<boolean>(false);

  public handleSearchChange = (event: Event): void => {
    const value = (event.target as HTMLInputElement).value;
    this.searchChangeEvent.emit({ key: this.searchObj().key, value });
    (value.length > 0) ? this.isOpen.set(true) : this.isOpen.set(false);
  }

  public handleSearchClear = (): void => {
    this.searchChangeEvent.emit({ key: this.searchObj().key, value: '' });
    this.isOpen.set(false);
  }

  public handleSelectItem = (category: string, item: any): void => {
    this.searchSelectEvent.emit({ category, item });
    this.isOpen.set(false);
  }

  public toggleDropdown = (): void => {
    this.inputValue() && this.isOpen.update(value => !value);
  }
  
  public focusSearchInput = (): void => {
    !this.isDisabled() && this.searchInputRef.nativeElement.focus();
  }
}
