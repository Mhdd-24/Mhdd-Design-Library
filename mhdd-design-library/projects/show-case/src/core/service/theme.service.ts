import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {

    constructor(@Inject(DOCUMENT) private document: Document) { }

    public updateThemeColors = (colors: Record<string, string>): void => {
        const root = this.document.documentElement;
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    };
}
