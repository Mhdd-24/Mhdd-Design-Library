// Button types and interfaces
export interface SampleProperties {
    variant: 'filled' | 'tonal' | 'custom_outline' | 'ghost' | '';
    styles: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | '';
    rounded?: boolean;
    customColor?: string;
    size: 'small' | 'medium' | 'half' | 'full' | '';
    disabled?: boolean;
    iconPosition?: 'left' | 'right' | '';
  }
  // Default button properties
  export const DEFAULT_BUTTON_PROPS: ButtonProperties = {
    variant: 'filled',
    styles: 'primary',
    rounded: false,
    customColor: '',
    size: 'full',
    disabled: false,
    iconPosition: 'left',
  };
  export interface ButtonProperties{
    variant: string,
    styles: string,
    rounded?: boolean,
    customColor?: string,
    size: string,
    disabled?: boolean,
    iconPosition?: string,
  }
  // Button factory service
  export class ButtonFactory {
    static create(options: Partial<ButtonProperties>): ButtonProperties {
      return {...DEFAULT_BUTTON_PROPS, ...options};
    }
    // Common button presets
    static style(obj: ButtonProperties,
    ): ButtonProperties {
      const {variant, styles, rounded, customColor, size, disabled, iconPosition} = obj;
      return this.create({variant, styles, rounded, size, disabled, iconPosition, customColor});
    }
  }