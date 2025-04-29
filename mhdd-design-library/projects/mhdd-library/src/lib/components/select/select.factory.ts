export interface SelectProperties {
    placeholder: string;
    multiple: boolean;
    enableSearch: boolean;
    disabled: boolean;
    variant: 'standard' | 'compact' | 'large';
    customClass?: string;
    maxHeight?: string;
}

export const DEFAULT_SELECT_PROPS: SelectProperties = {
    placeholder: 'Select an option',
    multiple: false,
    enableSearch: false,
    disabled: false,
    variant: 'standard',
    customClass: '',
    maxHeight: '250px'
};

export class SelectFactory {
    static create(options: Partial<SelectProperties>): SelectProperties {
        return { ...DEFAULT_SELECT_PROPS, ...options };
    }

    static style(
        variant: SelectProperties['variant'] = 'standard',
        multiple = false,
        enableSearch = false,
        placeholder?: string,
        disabled = false,
        customClass?: string,
        maxHeight?: string
    ): SelectProperties {
        const options: Partial<SelectProperties> = {
            variant,
            multiple,
            enableSearch,
            disabled,
            customClass,
            maxHeight
        };

        if (placeholder) {
            options.placeholder = placeholder;
        }

        return this.create(options);
    }

    static singleSelect(placeholder?: string, enableSearch = false, disabled = false): SelectProperties {
        return this.style('standard', false, enableSearch, placeholder, disabled);
    }

    static multiSelect(placeholder?: string, enableSearch = true, disabled = false): SelectProperties {
        return this.style('standard', true, enableSearch, placeholder, disabled);
    }

    static compactSelect(multiple = false, placeholder?: string): SelectProperties {
        return this.style('compact', multiple, false, placeholder);
    }
}