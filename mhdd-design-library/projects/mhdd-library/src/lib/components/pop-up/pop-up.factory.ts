
export interface SamplePropereties {
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    size?: 'small' | 'medium' | 'large' | 'full';
    animation?: 'fade' | 'scale' | 'slide' | 'none';
    overlayColor?: string;
    closeOnEscape?: boolean;
    closeOnClickOutside?: boolean;
    customClass?: string;
    backdropBlur?: boolean;
}

export interface PopUpProperties {
    position?: string,
    size?: string,
    animation?: string,
    overlayColor?: string,
    closeOnEscape?: boolean,
    closeOnClickOutside?: boolean,
    customClass?: string,
    backdropBlur?: boolean,
}

export const DEFAULT_POPUP_PROPS: PopUpProperties = {
    position: 'center',
    size: 'small',
    animation: 'fade',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    customClass: '',
    backdropBlur: false,
    closeOnEscape: true,
    closeOnClickOutside: true,
};


export class PopupFactory {
    static create(options: Partial<PopUpProperties>): PopUpProperties {
        return { ...DEFAULT_POPUP_PROPS, ...options };
    }

    static style(obj: PopUpProperties,
    ): PopUpProperties {
        const { position, size, animation, overlayColor, closeOnEscape, closeOnClickOutside, customClass, backdropBlur } = obj;
        return this.create({ position, size, animation, overlayColor, closeOnEscape, closeOnClickOutside, customClass, backdropBlur });
    }
}