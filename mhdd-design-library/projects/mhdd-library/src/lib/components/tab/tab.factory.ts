export interface TabList {
    key: string;
    value: string;
    icon?: string;
  }
  
  export interface TabProperties {
    name: string;
    type: string;
    width?: string;
    height?: string;
    rounded?: boolean;
    disabled?: boolean;
    iconPosition?: string;
  }
  
  // Default tab properties
  export const DEFAULT_TAB_PROPS: TabProperties = {
    name: 'tab',
    type: '',
    rounded: false,
    width: '',
    height: '',
    disabled: false,
    iconPosition: 'left'
  };
  
  export class TabFactory {
    static create(options: Partial<TabProperties>): TabProperties {
      return { ...DEFAULT_TAB_PROPS, ...options };
    }
  
    // Common tab presets
    static style(obj: TabProperties,
    ): TabProperties {
      const { name, type, rounded, width, height ,disabled, iconPosition } = obj;
      return this.create({
        name,
        type,
        rounded,
        width,
        height,
        disabled,
        iconPosition,
      });
    }
  }