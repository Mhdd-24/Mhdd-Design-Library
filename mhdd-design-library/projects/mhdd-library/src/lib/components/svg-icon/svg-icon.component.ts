import { CommonModule } from '@angular/common';
import { Component, input, signal, SimpleChanges } from '@angular/core';
import { ImagePath } from '../../constants/svg-path';
import { SvgIconProperties, SvgIconFactory } from './svg-icon.factory';

@Component({
  selector: 'mhdd-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent {
  svgIconProperties = input<SvgIconProperties>(SvgIconFactory.create({}));

  svgPath = signal('');
  fillColor = signal('');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['svgIconProperties']) {
      this.setSvgPath();
      this.updateFillColor();
    }
  }

  private setSvgPath = () => {
    const paths: Record<string, string> = ImagePath;
    const name = this.svgIconProperties().name;
    this.svgPath.set(paths[name] || '');
  }

  private updateFillColor = () => {
    this.fillColor.set(this.svgIconProperties().color || '');
  }
}
