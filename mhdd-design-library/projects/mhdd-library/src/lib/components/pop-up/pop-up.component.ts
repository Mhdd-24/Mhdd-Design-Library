import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, inject, input, Output } from '@angular/core';
import { PopUpProperties, DEFAULT_POPUP_PROPS } from './pop-up.factory';

@Component({
  selector: 'mhdd-pop-up',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {
  isOpen = input<boolean>(false);
  popupProperties = input<PopUpProperties>(DEFAULT_POPUP_PROPS);

  @Output() close = new EventEmitter<void>();

  private _elementRef = inject(ElementRef);

  public handleOverlayClick = (event: MouseEvent): void => {
    const props = this.popupProperties();
    if (props.closeOnClickOutside !== false) {
      const targetElement = event.target as HTMLElement;
      const overlayElement = this._elementRef.nativeElement.querySelector('.popup-overlay');
      (targetElement === overlayElement) && this.close.emit();
    }
  }

  @HostListener('document:keydown.escape')
  public onEscapePress = (): void => {
    const props = this.popupProperties();
    (this.isOpen() && props.closeOnEscape !== false) && this.close.emit();
  }
}
