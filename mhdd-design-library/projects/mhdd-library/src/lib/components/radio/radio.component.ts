import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { RadioProperties, RadioFactory, TabList } from './radio.factory';

@Component({
  selector: 'mhdd-radio',
  imports: [NgClass],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  radioObj = input<RadioProperties>(RadioFactory.create({}));
  radioOption = input<TabList[]>([]);
  activeOption = input<string>(''); 

  @Output() radioChangeEvent: EventEmitter<string> = new EventEmitter<string>();

 public handleRadioClick = (option: string): void  => {
    this.radioChangeEvent.emit(option)
  }
}
