import { NgClass, CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TabProperties, TabFactory, TabList } from './tab.factory';

@Component({
  selector: 'mhdd-tab',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  animations: [
    trigger('tabTouch', [
      state('inactive', style({
        transform: 'scale(1)',
      })),
      state('active', style({
        transform: 'scale(1)',
        backgroundColor: 'var(--primary-color)',
        color: 'var(--white-color)'
      })),
      transition('inactive => active', [
        style({ transform: 'scale(0.95)' }),
        animate('150ms ease-out', style({
          transform: 'scale(1.02)'
        })),
        animate('100ms ease-in')
      ])
    ])
  ],
  providers: [provideAnimations()],
})
export class TabComponent {
  tabProperties = input<TabProperties>(TabFactory.create({}));
  tabList = input<TabList[]>([]);
  activeTab = input<string>('');

  @Output() tabChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  public handleTabClick = (key: string) => {
    this.tabChangeEvent.emit(key);
  }
}
