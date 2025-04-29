export const lightTheme = {
    '--card-bg': '#fff',
    '--dark-blue-color': '#262b4329',
    '--heading-color': '#3b4056',
    '--border-dark': '#676b7b',
    '--background-color': '#f7f7f9',
    '--light-text-color': '#a8aab4',
    '--indigo-color': '#ecedef',
    '--table-header-bg': '#f5f5f7',
    '--primary-text-color': '#292b66',
    '--icon-color': '#000',
};

export const darkTheme = {
    '--card-bg': '#31334e',
    '--dark-blue-color': '#10112142',
    '--heading-color': '#d7d8ed',
    '--border-dark': '#b2b3ca',
    '--background-color': '#282a42',
    '--light-text-color': '#d7d8ed',
    '--indigo-color': '#393c6a',
    '--table-header-bg': '#3a3e5b',
    '--primary-text-color': '#d7d8ed',
    '--icon-color': '#ffffff',
}

// Theme List
export const themeList = [
    {
        key: 'lightTheme',
        value: 'Light Theme',
    },
    {
        key: 'darkTheme',
        value: 'Dark Theme',
    },
];

export type ThemeType = 'lightTheme' | 'darkTheme';