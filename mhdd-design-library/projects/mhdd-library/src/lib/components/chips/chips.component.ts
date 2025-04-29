import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { ChipProperties, ChipsFactory } from './chips.factory';

@Component({
  selector: 'mhdd-chips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  chipProperties = input<ChipProperties>(ChipsFactory.create({}));
  icon = input<string>("");
  label = input<string>("");
  selected = input<boolean>(false);

  @Output() chipClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() chipCloseEvent: EventEmitter<any> = new EventEmitter<any>();

  public handleChipClick = (text: string, event: MouseEvent) => {
      if (!(event.target as HTMLElement).classList.contains('chip-close')) {
          this.chipClickEvent.emit(text);
      }
  }

  public handleChipClose = (text: string, event: MouseEvent) => {
      event.stopPropagation();
      this.chipCloseEvent.emit(text);
  }
}
