export const chipConfig = {
    variant: "filled", // Values: 'filled', 'tonal', 'custom_outline', 'ghost', ''
    styles: "primary", // Values: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', ''
    rounded: true, // Boolean to determine if the chip has rounded corners
    disabled: false, // Boolean to determine if the chip is disabled
    close: '', // Boolean to determine if the chip has a close button
    customColor: "" // Custom color for the chip (hex, rgb, or color name)
}

export const chipWithIconConfig = {
    variant: "custom_outline", // Values: 'filled', 'tonal', 'custom_outline', 'ghost', ''
    styles: "secondary", // Values: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', ''
    rounded: true, // Boolean to determine if the chip has rounded corners
    disabled: false, // Boolean to determine if the chip is disabled
    close: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVf2NCDlgM-TTW__M19bco-eUFEPzptPHzQ&s', // Boolean to determine if the chip has a close button
    customColor: "#3366ff" // Custom color for the chip (hex, rgb, or color name)
}

export const filledButtonConfig = {
    variant: 'filled', // Values: 'filled', 'tonal', 'custom_outline', 'ghost', ''
    styles: 'primary', // Values: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', ''
    rounded: true, // Boolean to determine if the button has rounded corners
    customColor: '', // Custom color for the button (hex, rgb, or color name)
    size: 'medium', // Values: 'small', 'medium', 'half', 'full', ''
    disabled: false, // Boolean to determine if the button is disabled
    iconPosition: 'left', // Values: 'left', 'right', ''
}

export const outlineButtonConfigOne = {
    variant: 'custom_outline', // Values: 'filled', 'tonal', 'custom_outline', 'ghost', ''
    styles: 'secondary', // Values: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', ''
    rounded: true, // Boolean to determine if the button has rounded corners
    customColor: '#3366ff', // Custom color for the button (hex, rgb, or color name)
    size: 'medium', // Values: 'small', 'medium', 'half', 'full', ''
    disabled: false, // Boolean to determine if the button is disabled
    iconPosition: 'left', // Values: 'left', 'right', ''
}

export const outlineButtonIconConfigOne = {
    variant: 'custom_outline', // Values: 'filled', 'tonal', 'custom_outline', 'ghost', ''
    styles: 'secondary', // Values: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', ''
    rounded: true, // Boolean to determine if the button has rounded corners
    customColor: '#676b7b', // Custom color for the button (hex, rgb, or color name)
    size: 'medium', // Values: 'small', 'medium', 'half', 'full', ''
    disabled: false, // Boolean to determine if the button is disabled
    iconPosition: 'left', // Values: 'left', 'right', ''
}

export const emailTextbox = {
    key: 'email',
    label: 'Email Address',
    type: 'type',
    placeholder: 'Enter your email address',
    mandatory: true,
    icon: "https://t3.ftcdn.net/jpg/01/81/00/34/360_F_181003490_CxW4fQ0H3VypIIsPkFGpMDviO8ysWjOZ.jpg",
    errorIcon: 'error-circle',
    maxLength: 100,
    minLength: 5,
    rounded: false,
    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
};

export const passwordTextbox = {
    key: 'password',
    label: 'Password',
    type: 'textarea',
    placeholder: 'Enter your password',
    mandatory: true,
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/002/335/856/small_2x/password-lock-icon-free-vector.jpg',
    errorIcon: 'error-circle',
    minLength: 8,
    maxLength: 30,
    rounded: false
};

export const numericTextbox = {
    key: 'amount',
    label: 'Amount',
    type: 'search',
    placeholder: 'Enter amount',
    mandatory: true,
    // icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxz6ehxeD7s7BBHCU9hCr0PHgHAmiYiAMNkg&s',
    icon: '',
    errorIcon: 'warning-triangle',
    minLength: 1,
    maxLength: 10,
    rounded: false,
    pattern: '^[0-9]+(\\.[0-9]{1,2})?$'
};

export const dateTextbox = {
    key: 'birthdate',
    label: 'Date of Birth',
    type: 'date',
    placeholder: 'MM/DD/YYYY',
    mandatory: true,
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENdUa5gQQRf-NNiyGG-_Exz1ufAe31q2faQ&s',
    errorIcon: 'exclamation-mark',
    rounded: true,
    pattern: '^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\\d{4}$'
};

export const originalProjects = [
    { key: 'AL', value: 'Alabama' },
    { key: 'AK', value: 'Alaska' },
    { key: 'AZ', value: 'Arizona' },
    { key: 'AR', value: 'Arkansas' },
    { key: 'CA', value: 'California' },
    { key: 'CO', value: 'Colorado' },
    { key: 'CT', value: 'Connecticut' },
    { key: 'DE', value: 'Delaware' },
    { key: 'FL', value: 'Florida' },
    { key: 'GA', value: 'Georgia' },
    { key: 'HI', value: 'Hawaii' },
    { key: 'ID', value: 'Idaho' },
    { key: 'IL', value: 'Illinois' },
    { key: 'IN', value: 'Indiana' },
    { key: 'IA', value: 'Iowa' },
    { key: 'KS', value: 'Kansas' },
    { key: 'KY', value: 'Kentucky' },
    { key: 'LA', value: 'Louisiana' },
    { key: 'ME', value: 'Maine' },
    { key: 'MD', value: 'Maryland' },
];

export const radioData = [
    { key: 'yes', value: 'Yes' },
    { key: 'no', value: 'No' }
];
export const radioDataTab = {
    name: 'radio',
    type: 'tab',
    direction: 'row',
    rounded: false,
}

export const TabProps = {
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

export const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' }
];

export const dateData = {
    year: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040],
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    label: 'Month & Year',
    key: 'month-year',
    closeOnClickOutside: true,
    placeholder: 'Select Month Year'
}

export const modalPopupConfig = {
    position: 'center',
    size: 'small',
    animation: 'scale',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    customClass: '',
    closeOnEscape: true,
    closeOnClickOutside: true,
    backdropBlur: false,
};

export const sidebarPopupConfig = {
    position: 'right',
    size: 'small',
    animation: 'slide',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    customClass: '',
    closeOnEscape: true,
    closeOnClickOutside: true,
    backdropBlur: true,
};

export const toastPopupConfig = {
    position: 'top-right',
    size: 'small',
    animation: 'fade',
    overlayColor: 'transparent',
    closeOnEscape: true,
    closeOnClickOutside: true,
    customClass: '',
    backdropBlur: false,
};

export const tableConfig = {
    title: "Project Management Dashboard",
    showPagination: true,
    currentPage: 1,
    itemsPerPage: 3
}

export const headers = [
    {
        "key": "id",
        "value": "ID",
        "type": "text"
    },
    {
        "key": "name",
        "value": "Project Name",
        "type": "imageWithText"
    },
    {
        "key": "description",
        "value": "Description",
        "type": "clickableText"
    },
    {
        "key": "status",
        "value": "Status",
        "type": "chips"
    },
    {
        "key": "createdAt",
        "value": "Created Date",
        "type": "date"
    },
    {
        "key": "actions",
        "value": "Actions",
        "type": "inlineActionBtn"
    },
    {
        "key": "moreOptions",
        "value": "Options",
        "type": "dropdownActionBtn"
    }
];

export const tableData = [
    {
        "id": "PRJ-001",
        "name": {
            "value": "Alpha Dashboard",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "status": [
            {
                "text": "Active"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "description": "Customer-facing dashboard with real-time analytics",
        "createdAt": "2025-01-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-002",
        "name": {
            "value": "Beta Mobile App",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Cross-platform mobile application for inventory management",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-02-03",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-003",
        "name": {
            "value": "Gamma API",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "RESTful API service with OAuth2 integration",
        "status": [
            {
                "text": "Completed"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2024-11-20",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-004",
        "name": {
            "value": "Delta E-commerce",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Full-stack e-commerce platform with payment processing",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-30",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-005",
        "name": {
            "value": "Epsilon mhdd",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Customer relationship management system with AI-powered insights",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-03-10",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-006",
        "name": {
            "value": "Zeta Analytics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Big data analytics platform with visualization tools",
        "status": [
            {
                "text": "In Review",
                "color": "#000000",
                "background": "#E9ECEF"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-25",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-007",
        "name": {
            "value": "Eta Marketplace",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Online marketplace connecting buyers and sellers",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-05",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-008",
        "name": {
            "value": "Theta LMS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Learning management system for corporate training",
        "status": [
            {
                "text": "Completed",
                "color": "#FFFFFF",
                "background": "#6C757D"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2024-12-12",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-009",
        "name": {
            "value": "Iota Healthcare",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Patient management system with telehealth capabilities",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-03-01",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-010",
        "name": {
            "value": "Kappa Security",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Enterprise security monitoring and threat detection",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-001",
        "name": {
            "value": "Alpha Dashboard",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "status": [
            {
                "text": "Active"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "description": "Customer-facing dashboard with real-time analytics",
        "createdAt": "2025-01-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-002",
        "name": {
            "value": "Beta Mobile App",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Cross-platform mobile application for inventory management",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-02-03",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-003",
        "name": {
            "value": "Gamma API",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "RESTful API service with OAuth2 integration",
        "status": [
            {
                "text": "Completed"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2024-11-20",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-004",
        "name": {
            "value": "Delta E-commerce",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Full-stack e-commerce platform with payment processing",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-30",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-005",
        "name": {
            "value": "Epsilon mhdd",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Customer relationship management system with AI-powered insights",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-03-10",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-006",
        "name": {
            "value": "Zeta Analytics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Big data analytics platform with visualization tools",
        "status": [
            {
                "text": "In Review",
                "color": "#000000",
                "background": "#E9ECEF"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-25",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-007",
        "name": {
            "value": "Eta Marketplace",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Online marketplace connecting buyers and sellers",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-05",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-008",
        "name": {
            "value": "Theta LMS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Learning management system for corporate training",
        "status": [
            {
                "text": "Completed",
                "color": "#FFFFFF",
                "background": "#6C757D"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2024-12-12",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-009",
        "name": {
            "value": "Iota Healthcare",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Patient management system with telehealth capabilities",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-03-01",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-010",
        "name": {
            "value": "Kappa Security",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Enterprise security monitoring and threat detection",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-001",
        "name": {
            "value": "Alpha Dashboard",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "status": [
            {
                "text": "Active"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "description": "Customer-facing dashboard with real-time analytics",
        "createdAt": "2025-01-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-002",
        "name": {
            "value": "Beta Mobile App",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Cross-platform mobile application for inventory management",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-02-03",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-003",
        "name": {
            "value": "Gamma API",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "RESTful API service with OAuth2 integration",
        "status": [
            {
                "text": "Completed"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2024-11-20",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-004",
        "name": {
            "value": "Delta E-commerce",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Full-stack e-commerce platform with payment processing",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-30",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-005",
        "name": {
            "value": "Epsilon mhdd",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Customer relationship management system with AI-powered insights",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-03-10",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-006",
        "name": {
            "value": "Zeta Analytics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Big data analytics platform with visualization tools",
        "status": [
            {
                "text": "In Review",
                "color": "#000000",
                "background": "#E9ECEF"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-25",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-007",
        "name": {
            "value": "Eta Marketplace",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Online marketplace connecting buyers and sellers",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-05",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-008",
        "name": {
            "value": "Theta LMS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Learning management system for corporate training",
        "status": [
            {
                "text": "Completed",
                "color": "#FFFFFF",
                "background": "#6C757D"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2024-12-12",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-009",
        "name": {
            "value": "Iota Healthcare",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Patient management system with telehealth capabilities",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-03-01",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-010",
        "name": {
            "value": "Kappa Security",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Enterprise security monitoring and threat detection",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-001",
        "name": {
            "value": "Alpha Dashboard",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "status": [
            {
                "text": "Active"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "description": "Customer-facing dashboard with real-time analytics",
        "createdAt": "2025-01-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-002",
        "name": {
            "value": "Beta Mobile App",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Cross-platform mobile application for inventory management",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-02-03",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-003",
        "name": {
            "value": "Gamma API",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "RESTful API service with OAuth2 integration",
        "status": [
            {
                "text": "Completed"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2024-11-20",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-004",
        "name": {
            "value": "Delta E-commerce",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Full-stack e-commerce platform with payment processing",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-30",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-005",
        "name": {
            "value": "Epsilon mhdd",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Customer relationship management system with AI-powered insights",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-03-10",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-006",
        "name": {
            "value": "Zeta Analytics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Big data analytics platform with visualization tools",
        "status": [
            {
                "text": "In Review",
                "color": "#000000",
                "background": "#E9ECEF"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-25",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-007",
        "name": {
            "value": "Eta Marketplace",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Online marketplace connecting buyers and sellers",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-05",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-008",
        "name": {
            "value": "Theta LMS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Learning management system for corporate training",
        "status": [
            {
                "text": "Completed",
                "color": "#FFFFFF",
                "background": "#6C757D"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2024-12-12",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-009",
        "name": {
            "value": "Iota Healthcare",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Patient management system with telehealth capabilities",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-03-01",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-010",
        "name": {
            "value": "Kappa Security",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Enterprise security monitoring and threat detection",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-001",
        "name": {
            "value": "Alpha Dashboard",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "status": [
            {
                "text": "Active"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "description": "Customer-facing dashboard with real-time analytics",
        "createdAt": "2025-01-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-002",
        "name": {
            "value": "Beta Mobile App",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Cross-platform mobile application for inventory management",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-02-03",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-003",
        "name": {
            "value": "Gamma API",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "RESTful API service with OAuth2 integration",
        "status": [
            {
                "text": "Completed"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2024-11-20",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-004",
        "name": {
            "value": "Delta E-commerce",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Full-stack e-commerce platform with payment processing",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-30",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-005",
        "name": {
            "value": "Epsilon mhdd",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Customer relationship management system with AI-powered insights",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-03-10",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-006",
        "name": {
            "value": "Zeta Analytics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Big data analytics platform with visualization tools",
        "status": [
            {
                "text": "In Review",
                "color": "#000000",
                "background": "#E9ECEF"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-25",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-007",
        "name": {
            "value": "Eta Marketplace",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Online marketplace connecting buyers and sellers",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-05",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-008",
        "name": {
            "value": "Theta LMS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Learning management system for corporate training",
        "status": [
            {
                "text": "Completed",
                "color": "#FFFFFF",
                "background": "#6C757D"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2024-12-12",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-009",
        "name": {
            "value": "Iota Healthcare",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Patient management system with telehealth capabilities",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-03-01",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-010",
        "name": {
            "value": "Kappa Security",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Enterprise security monitoring and threat detection",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-001",
        "name": {
            "value": "Alpha Dashboard",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "status": [
            {
                "text": "Active"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "description": "Customer-facing dashboard with real-time analytics",
        "createdAt": "2025-01-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-002",
        "name": {
            "value": "Beta Mobile App",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Cross-platform mobile application for inventory management",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-02-03",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-003",
        "name": {
            "value": "Gamma API",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "RESTful API service with OAuth2 integration",
        "status": [
            {
                "text": "Completed"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2024-11-20",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-004",
        "name": {
            "value": "Delta E-commerce",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Full-stack e-commerce platform with payment processing",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-30",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-005",
        "name": {
            "value": "Epsilon mhdd",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Customer relationship management system with AI-powered insights",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-03-10",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-006",
        "name": {
            "value": "Zeta Analytics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Big data analytics platform with visualization tools",
        "status": [
            {
                "text": "In Review",
                "color": "#000000",
                "background": "#E9ECEF"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-25",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-007",
        "name": {
            "value": "Eta Marketplace",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Online marketplace connecting buyers and sellers",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-05",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-008",
        "name": {
            "value": "Theta LMS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Learning management system for corporate training",
        "status": [
            {
                "text": "Completed",
                "color": "#FFFFFF",
                "background": "#6C757D"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2024-12-12",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-009",
        "name": {
            "value": "Iota Healthcare",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Patient management system with telehealth capabilities",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-03-01",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-010",
        "name": {
            "value": "Kappa Security",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Enterprise security monitoring and threat detection",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-001",
        "name": {
            "value": "Alpha Dashboard",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "status": [
            {
                "text": "Active"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "description": "Customer-facing dashboard with real-time analytics",
        "createdAt": "2025-01-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-002",
        "name": {
            "value": "Beta Mobile App",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Cross-platform mobile application for inventory management",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-02-03",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-003",
        "name": {
            "value": "Gamma API",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "RESTful API service with OAuth2 integration",
        "status": [
            {
                "text": "Completed"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2024-11-20",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-004",
        "name": {
            "value": "Delta E-commerce",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Full-stack e-commerce platform with payment processing",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-30",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-005",
        "name": {
            "value": "Epsilon mhdd",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Customer relationship management system with AI-powered insights",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-03-10",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-006",
        "name": {
            "value": "Zeta Analytics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Big data analytics platform with visualization tools",
        "status": [
            {
                "text": "In Review",
                "color": "#000000",
                "background": "#E9ECEF"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-25",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-007",
        "name": {
            "value": "Eta Marketplace",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Online marketplace connecting buyers and sellers",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-05",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-008",
        "name": {
            "value": "Theta LMS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Learning management system for corporate training",
        "status": [
            {
                "text": "Completed",
                "color": "#FFFFFF",
                "background": "#6C757D"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2024-12-12",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-009",
        "name": {
            "value": "Iota Healthcare",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Patient management system with telehealth capabilities",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-03-01",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-010",
        "name": {
            "value": "Kappa Security",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Enterprise security monitoring and threat detection",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-001",
        "name": {
            "value": "Alpha Dashboard",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "status": [
            {
                "text": "Active"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "description": "Customer-facing dashboard with real-time analytics",
        "createdAt": "2025-01-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-002",
        "name": {
            "value": "Beta Mobile App",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Cross-platform mobile application for inventory management",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-02-03",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-003",
        "name": {
            "value": "Gamma API",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "RESTful API service with OAuth2 integration",
        "status": [
            {
                "text": "Completed"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2024-11-20",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-004",
        "name": {
            "value": "Delta E-commerce",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Full-stack e-commerce platform with payment processing",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-30",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-005",
        "name": {
            "value": "Epsilon mhdd",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Customer relationship management system with AI-powered insights",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2025-03-10",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-006",
        "name": {
            "value": "Zeta Analytics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Big data analytics platform with visualization tools",
        "status": [
            {
                "text": "In Review",
                "color": "#000000",
                "background": "#E9ECEF"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-25",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-007",
        "name": {
            "value": "Eta Marketplace",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Online marketplace connecting buyers and sellers",
        "status": [
            {
                "text": "Active",
                "color": "#FFFFFF",
                "background": "#28A745"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-01-05",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-008",
        "name": {
            "value": "Theta LMS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Learning management system for corporate training",
        "status": [
            {
                "text": "Completed",
                "color": "#FFFFFF",
                "background": "#6C757D"
            },
            {
                "text": "Medium Priority",
                "color": "#000000",
                "background": "#17A2B8"
            }
        ],
        "createdAt": "2024-12-12",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-009",
        "name": {
            "value": "Iota Healthcare",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Patient management system with telehealth capabilities",
        "status": [
            {
                "text": "In Progress",
                "color": "#000000",
                "background": "#FFC107"
            },
            {
                "text": "High Priority",
                "color": "#FFFFFF",
                "background": "#DC3545"
            }
        ],
        "createdAt": "2025-03-01",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
    {
        "id": "PRJ-010",
        "name": {
            "value": "Kappa Security",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
        },
        "description": "Enterprise security monitoring and threat detection",
        "status": [
            {
                "text": "On Hold",
                "color": "#FFFFFF",
                "background": "#FD7E14"
            },
            {
                "text": "Low Priority",
                "color": "#FFFFFF",
                "background": "#007BFF"
            }
        ],
        "createdAt": "2025-02-15",
        "actions": [
            {
                "text": "Edit",
                "icon": "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
            },
            {
                "text": "View",
                "icon": "https://cdn-icons-png.flaticon.com/128/709/709612.png"
            }
        ],
        "moreOptions": {
            "label": "More",
            "icon": "https://cdn-icons-png.flaticon.com/128/5718/5718983.png",
            "options": [
                {
                    "text": "Archive",
                    "icon": "https://cdn-icons-png.flaticon.com/128/8138/8138776.png"
                },
                {
                    "text": "Delete",
                    "icon": "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                },
                {
                    "text": "Clone",
                    "icon": "https://cdn-icons-png.flaticon.com/128/7168/7168576.png"
                }
            ]
        }
    },
];