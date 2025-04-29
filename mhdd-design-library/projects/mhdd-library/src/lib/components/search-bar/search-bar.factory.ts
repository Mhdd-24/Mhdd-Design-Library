export interface SearchProperties {
    key: string;
    label: string;
    placeholder?: string;
    mandatory: boolean;
    icon?: string;
    error?: string;
    errorIcon?: string;
    categories?: string[];
  }
  
  export const DEFAULT_SEARCH_PROPS: SearchProperties = {
    key: '',
    label: '',
    placeholder: 'Search (Ctrl+/)',
    mandatory: false,
    icon: '',
    error: '',
    errorIcon: '',
    categories: ['Pages', 'Files', 'Members']
  };
  
  export class SearchFactory {
    static create(options: Partial<SearchProperties>): SearchProperties {
      return { ...DEFAULT_SEARCH_PROPS, ...options };
    }
  
    static style(obj: SearchProperties): SearchProperties {
      const { key, label, placeholder, mandatory, icon, error, errorIcon, categories } = obj;
      const placeholderText: string = placeholder || `Search ${label?.toLowerCase()}(Ctrl+/)`;
      return this.create({
        key,
        label,
        placeholder: placeholderText,
        mandatory,
        icon,
        error,
        errorIcon,
        categories
      });
    }
  }
  
  export interface SearchResult {
    category: string;
    items: SearchResultItem[];
  }
  
  export interface SearchResultItem {
    id: string;
    title: string;
    subtitle?: string;
    icon?: string;
  }