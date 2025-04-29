export interface searchList {
    key: string;
    value: string;
}

export interface TextboxProperties {
    key: string;
    label: string;
    type: string;
    placeholder?: string;
    mandatory: boolean,
    icon?: string;
    errorIcon?: string,
    rounded?: boolean;
    pattern?: string;
    maxLength?: number;
    minLength?: number;
}

export type TextboxType = 'text' | 'email' | 'password' | 'phone' | 'number' | 'date';

// Default textbox properties
export const DEFAULT_TEXTBOX_PROPS: TextboxProperties = {
    key: '',
    label: '',
    type: 'text',
    placeholder: '',
    mandatory: false,
    icon: '',
    errorIcon: '',
    rounded: false,
    pattern: '',
    maxLength: 100,
    minLength: 0
};

export class TextboxFactory {

    static create(options: Partial<TextboxProperties>): TextboxProperties {
        return { ...DEFAULT_TEXTBOX_PROPS, ...options };
    }

    // Common textbox presets
    static style(obj: TextboxProperties,
    ): TextboxProperties {
        const {
            key, label, type, placeholder, mandatory,
            icon, errorIcon, rounded, pattern, minLength, maxLength
        } = obj;
        
        return this.create({
            key,
            label,
            type,
            placeholder,
            mandatory,
            icon,
            errorIcon,
            rounded,
            pattern,
            maxLength,
            minLength
        });
    }
}
