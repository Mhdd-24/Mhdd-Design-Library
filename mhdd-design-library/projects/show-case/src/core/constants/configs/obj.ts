// Pop up Config Objects

/*
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    size?: 'small' | 'medium' | 'large' | 'full';
    animation?: 'fade' | 'scale' | 'slide' | 'none';
    overlay?: boolean; // Default is true
    overlayColor?: string; // Default is 'rgba(0, 0, 0, 0.5)'
    closeOnEscape?: boolean; // Default is true
    closeOnClickOutside?: boolean; // Default is true
    customClass?: string; // Default is ''
    backdropBlur?: boolean; // Default is false
    maxWidth?: string; // Default is 90% of the viewport width
    maxHeight?: string; // Default is 90% of the viewport height
*/

export const modalPopupObj = {
    position: 'center',
    size: 'medium',
    animation: 'scale',
    overlay: true,
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    closeOnEscape: true,
    closeOnClickOutside: true,
    customClass: '',
    backdropBlur: false,
    maxWidth: '90%',
    maxHeight: '90%'
};

export const sidebarPopupObj = {
    position: 'right',
    size: 'full',
    animation: 'slide',
    overlay: true,
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    closeOnEscape: false,
    closeOnClickOutside: false,
    customClass: '',
    backdropBlur: false,
    maxWidth: '90%',
    maxHeight: '90%'
};

export const toastPopupObj = {
    position: 'top-right',
    size: 'small',
    animation: 'fade',
    overlay: false,
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    closeOnEscape: true,
    closeOnClickOutside: true,
    customClass: '',
    backdropBlur: false,
    maxWidth: '90%',
    maxHeight: '90%'
};

// Button Config Objects

/*  
    variant: 'filled' | 'tonal' | 'custom_outline' | 'ghost' | '';
    styles: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | '';
    rounded?: boolean; // Default is false
    customColor?: string;
    size: 'small' | 'medium' | 'half' | 'full' | '';
    disabled?: boolean; // Default is false
    iconPosition?: 'left' | 'right' | '';
*/

export const filledButtonObj = {
    variant: 'filled',
    styles: 'primary',
    rounded: true,
    customColor: '',
    size: 'medium',
    disabled: false,
    iconPosition: 'left',
}

export const outlineButtonObj = {
    variant: 'custom_outline',
    styles: 'secondary',
    rounded: true,
    customColor: '#3366ff',
    size: 'medium',
    disabled: false,
    iconPosition: 'left',
}

export const outlineButtonIconObj = {
    variant: 'custom_outline',
    styles: 'secondary',
    rounded: true,
    customColor: '#676b7b',
    size: 'medium',
    disabled: false,
    iconPosition: 'left',
}


// Chip Config Objects

/* 
  variant: 'filled' | 'tonal' | 'custom_outline' | 'ghost' | '';
  styles: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | '';
  rounded?: boolean; // Default is false
  disabled?: boolean; // Default is false
  close?: string; // Default is ''
  customColor?: string; Default is ''
*/

export const chipObj = {
    variant: "filled",
    styles: "primary",
    rounded: true,
    disabled: false,
    close: '',
    customColor: ""
}

export const chipWithIconObj = {
    variant: "outline",
    styles: "secondary",
    rounded: true,
    disabled: false,
    close: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVf2NCDlgM-TTW__M19bco-eUFEPzptPHzQ&s',
    customColor: "#3366ff"
}

// Textbox Config Objects

/* 
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


   Type:  'text' | 'email' | 'password' | 'phone' | 'number' | 'date'
*/


export const textBoxObj = {
    key: 'name',
    label: 'Name',
    type: 'type',
    placeholder: 'Enter your Full Name',
    mandatory: true,
    icon: "https://t3.ftcdn.net/jpg/01/81/00/34/360_F_181003490_CxW4fQ0H3VypIIsPkFGpMDviO8ysWjOZ.jpg",
    errorIcon: 'error-circle',
    maxLength: 100,
    minLength: 5,
    rounded: false,
    pattern: '^[a-zA-Z ]$'
};

export const textAreaObj = {
    key: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Enter your description',
    mandatory: true,
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/002/335/856/small_2x/password-lock-icon-free-vector.jpg',
    errorIcon: 'error-circle',
    minLength: 8,
    maxLength: 30,
    rounded: false,
    pattern: ''
};

export const textBoxSearchObj = {
    key: 'amount',
    label: 'Amount',
    type: 'search',
    placeholder: 'Enter amount',
    mandatory: true,
    icon: '',
    errorIcon: 'warning-triangle',
    minLength: 1,
    maxLength: 10,
    rounded: false,
    pattern: '^[0-9]+(\\.[0-9]{1,2})?$'
};

// Radio Config Objects

/* 
    name: string; // Name of the radio group & Default is 'radio'
    type: string; // Default is ''
    direction: string; // Default is 'row'
    rounded?: boolean; // Default is false
*/

export const radioData = [
    { key: 'yes', value: 'Yes' },
    { key: 'no', value: 'No' }
];

export const radioTabObj = {
    name: 'radio',
    type: 'tab',
    direction: 'row',
    rounded: false,
}

export const radioButtonObj = {
    name: 'radio',
    type: '',
    direction: 'row',
    rounded: false,
}

// Tab Config Objects

/*
    name: string; // Default is 'tab'
    type: string; // Default is '' & can be 'tab', 'pill' & underline
    width?: string; // Default is ''
    height?: string; // Default is ''
    rounded?: boolean; // Default is false
    disabled?: boolean; // Default is false
    iconPosition?: string; // Default is 'left'
*/

export const TabObj = {
    name: 'tab',
    type: 'tab',
    width: '400px',
    height: '50px',
    disabled: false,
    iconPosition: 'left',
    rounded: false
};

export const tabs = [
    { key: 'BFL', value: 'BFL' },
    { key: 'Non BFL', value: 'Non BFL' },
];


// month & year picker config objects

/* 
    key: string;
    label: string;
    placeholder: string;
    year: number[];
    month: string[];
    mandatory?: boolean; // Default is false
    icon?: string;
    errorIcon?: string;
    rounded?: boolean // Default is false
*/

export const dateData = {
    year: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040],
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    label: 'Month & Year',
    key: 'month-year',
    placeholder: 'Select Month Year'
}