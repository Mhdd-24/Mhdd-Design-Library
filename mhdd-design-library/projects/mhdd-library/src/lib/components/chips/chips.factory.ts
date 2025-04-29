// chip types and interfaces
export interface SampleProperties {
  variant: 'filled' | 'tonal' | 'custom_outline' | 'ghost' | '';
  styles: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | '';
  rounded?: boolean;
  disabled?: boolean;
  close?: boolean;
  customColor?: string;
}

export interface ChipProperties {
    variant: string;
    styles: string;
    rounded?: boolean;
    disabled?: boolean;
    close?: string;
    customColor?: string;
}

// Default chip properties
export const DEFAULT_CHIP_PROPS: ChipProperties = {
    variant: 'filled',
    styles: 'primary',
    rounded: false,
    disabled: false,
    close: '',
    customColor: '',
};

// Chip factory service
export class ChipsFactory {
    static create(options: Partial<ChipProperties>): ChipProperties {
        return {...DEFAULT_CHIP_PROPS, ...options};
    }

    // Common chip presets
    static style(obj: ChipProperties,
    ): ChipProperties {
        const {variant, styles, rounded, customColor, disabled, close} = obj;
        return this.create({variant, styles, rounded, disabled, close, customColor});
    }
}
