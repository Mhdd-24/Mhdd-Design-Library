export interface TabList {
    key: string;
    value: string;
  }
  
  export interface RadioProperties {
    name: string;
    type: string;
    direction: string;
    rounded?: boolean;
  }
  
  // Default radio properties
  export const DEFAULT_RADIO_PROPS: RadioProperties = {
    name: 'radio',
    type: '',
    direction: 'row',
    rounded: false,
  };
  
  // radio.factory.ts
  export class RadioFactory {
  
    static create(options: Partial<RadioProperties>): RadioProperties {
      return { ...DEFAULT_RADIO_PROPS, ...options };
    }
  
    // Common radio presets
    static style(obj: RadioProperties,
    ): RadioProperties {
      const { name, type, direction, rounded } = obj;
      return this.create({
        name,
        type,
        direction,
        rounded
      });
    }
  }
  