export interface SamplePropereties {
    name: string;
    width: string;
    height: string;
    color: string;
    themeColor?: 'primary' | 'secondary' | 'default';
}

export interface SvgIconProperties {
    name: string;
    width: string;
    height: string;
    color: string;
    themeColor?: string;
}

export const DEFAULT_SVGICON_PROPS: SvgIconProperties = {
    name: '',
    width: '24',
    height: '24',
    color: '',
    themeColor: 'default'
}

export class SvgIconFactory {
    static create(options: Partial<SvgIconProperties>): SvgIconProperties {
        return { ...DEFAULT_SVGICON_PROPS, ...options };
    }

    static style(obj: SvgIconProperties,
    ): SvgIconProperties {
        const { name, width, height, color, themeColor  } = obj;
        return this.create({ name, width, height, color, themeColor });
    }
}