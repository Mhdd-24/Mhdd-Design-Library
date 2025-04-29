import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { ButtonFactory, ButtonProperties } from './button.factory';

@Component({
  selector: 'mhdd-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  buttonProperties = input<ButtonProperties>(ButtonFactory.create({}));
  icon = input<string>('');
  label = input<string>('');

  @Output() buttonClickEvent: EventEmitter<any> = new EventEmitter<any>();

  public handleButtonClick = (label: string) => {
    this.buttonClickEvent.emit(label);
  }
}
