export interface DatepickerProperties {
    key: string;
    label: string;
    placeholder: string;
    year: number[];
    month: string[];
    mandatory?: boolean;
    closeOnClickOutside?: boolean;
    icon?: string;
    errorIcon?: string;
    rounded?: boolean
}

// Default datepicker properties
export const DEFAULT_DATEPICKER_PROPS: DatepickerProperties = {
    key: '',
    label: '',
    placeholder: '',
    year: [],
    month: [],
    mandatory: false,
    closeOnClickOutside: true,
    icon: '',
    errorIcon: '',
    rounded: false,
};

// datepicker.factory.ts
export class DatepickerFactory {

    static create(options: Partial<DatepickerProperties>): DatepickerProperties {
        return {...DEFAULT_DATEPICKER_PROPS, ...options};
    }

    // Common datepicker presets
    static style(obj: DatepickerProperties,
    ): DatepickerProperties {
        const {
            key, label, placeholder, year, month, mandatory,
            icon, errorIcon, rounded, closeOnClickOutside } = obj;
        
        return this.create({
            key,
            label,
            placeholder,
            year,
            month,
            mandatory,
            icon,
            errorIcon,
            rounded,
            closeOnClickOutside
        });
    }
}
