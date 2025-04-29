import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'mhdd-check-box',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss'
})
export class CheckBoxComponent {
  label = input<string>('');
  disable = input<boolean>(false);
  checked = input<boolean>(false);

  @Output() clickCheckbox: EventEmitter<any> = new EventEmitter<any>();

  public handleCheckbox = (label: string) => {
    (!this.disable()) && this.clickCheckbox.emit(label);
  }
}
