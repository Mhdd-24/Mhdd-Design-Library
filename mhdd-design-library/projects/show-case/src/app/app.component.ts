import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchFactory, SearchProperties, SearchResult } from 'projects/mhdd-library/src/lib/components/search-bar/search-bar.factory';
import { SelectFactory, ButtonFactory, TextboxFactory, RadioFactory, DatepickerFactory, ChipsFactory, PopupFactory, searchList, TableSettings, PaginationItem, ButtonComponent, CardComponent, TableComponent, RadioComponent, ChipsComponent, TabComponent, PopUpComponent, DatePickerComponent, TextBoxComponent, CheckBoxComponent, expandCollapseStaticHeightAnimation } from 'projects/mhdd-library/src/public-api';
import { countries, dateData, chipConfig, chipWithIconConfig, filledButtonConfig, outlineButtonConfigOne, outlineButtonIconConfigOne, emailTextbox, passwordTextbox, numericTextbox, dateTextbox, originalProjects, radioData, radioDataTab, TabProps, tabs, modalPopupConfig, sidebarPopupConfig, toastPopupConfig, tableConfig, headers, tableData } from '../core/constants/configs/data';
import { ThemeType, themeList, darkTheme, lightTheme } from '../core/constants/theme';
import { ThemeService } from '../core/service/theme.service';
import { SearchBarComponent } from 'projects/mhdd-library/src/lib/components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ButtonComponent, CardComponent, TableComponent, TextBoxComponent, RadioComponent, ChipsComponent, CheckBoxComponent, SearchBarComponent, TabComponent, DatePickerComponent, PopUpComponent],
  standalone: true,
  animations: [expandCollapseStaticHeightAnimation],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'show-case';

  public visibleChips = signal<string[]>(['India', 'Is', 'My', 'Country']);
  public placeholder = signal("Select a value");
  public multiSelect = signal(true);
  public enableSearch = signal(true);
  public searchProjectInput = new FormControl('');
  public selectedProject: any = null;
  public searchOrgObj: any

  // State signals for different popups
  standardPopupOpen = signal(false);
  sidebarPopupOpen = signal(false);
  toastPopupOpen = signal(false);
  /* ThemeList assigning the variable */
  public currentTheme = signal<ThemeType>('lightTheme');
  public themeList = themeList;
  public showThemeDrop = signal(false);
  /* Factory assigning the variable */
  public selectFactory = SelectFactory;
  public searchFactory = SearchFactory;
  public buttonFactory = ButtonFactory;
  public textboxFactory = TextboxFactory;
  public radioFactory = RadioFactory;
  public datepickerFactory = DatepickerFactory;
  public chipFactory = ChipsFactory;
  public popupFactory = PopupFactory;
  /* Multi Select */
  public countries = countries;
  /* Date Time Picker */
  public dateData = dateData;
  /* Chip */
  public chipConfig = chipConfig;
  public chipWithIconConfig = chipWithIconConfig;
  /* Button */
  public filledButtonConfig = filledButtonConfig;
  public outlineButtonConfigOne = outlineButtonConfigOne;
  public outlineButtonIconConfigOne = outlineButtonIconConfigOne;
  /* Text Box */
  public filteredResult = signal<searchList[]>([]);
  public textInput: any = { email: 'hjasdhasgdgasfd', password: '', amount: '', birthdate: '' };
  public searchText = '';
  public emailTextbox = emailTextbox;
  public passwordTextbox = passwordTextbox;
  public numericTextbox = numericTextbox;
  public dateTextbox = dateTextbox;
  /* Search Text Box */
  public originalProjects = originalProjects;
  public searchProjectObj = [...this.originalProjects];
  /* Radio Button */
  public activeRadio: string = '';
  public radioData = radioData;
  public radioDataTab = radioDataTab;
  /* Tab */
  public activeTab: string = '';
  public TabProps = TabProps;
  public tabs = tabs;
  /* Popup configurations */
  public popupVisible = false;
  public modalPopupConfig = modalPopupConfig;
  public sidebarPopupConfig = sidebarPopupConfig;
  public toastPopupConfig = toastPopupConfig;
  /* Date Picker configurations */
  public selectedDate: string = '';
  /* Table configurations */
  public tableConfig: TableSettings = tableConfig;
  public tableHeaders = headers;
  public tableData = tableData;
  public totalPages = 1;
  public totalItems = 0;
  public displayedPages: PaginationItem[] = [];
  public pagedTableData: any[] = [];

  constructor(private _themeService: ThemeService) { }

  ngOnInit() {
    this.loadData();
    this.calculatePagination();
  }

  public handleClick = () => {
    console.log('clicked');
  }

  public filterSearchData(searchTerm: string | null) {
    if (!searchTerm || !this.searchProjectObj?.length) {
      this.searchProjectObj = [...this.searchOrgObj];
    } else {
      const lowerSearchTerm = searchTerm.toLowerCase();
      this.searchProjectObj = this.searchProjectObj.filter(item =>
        item.value.toLowerCase().includes(lowerSearchTerm)
      );
    }
    console.log(this.searchObj);
  }

  // cbip methods
  public handleChipClick = (chipText: string) => {
    console.log('Chip clicked:', chipText);
  }

  public handleChipClose = (chipText: string) => {
    console.log('Chip closed:', chipText);
    this.visibleChips.update(chips => chips.filter(chip => chip !== chipText));
  }


  public handleTextChange = (event: any) => {
    this.textInput[event.key] = event.value;
    console.log(this.textInput);
  }

  public handleSelectionChange(values: any) {
    console.log(values);
  }

  searchObj: SearchProperties = {
    key: 'globalSearch',
    label: 'Global',
    placeholder: 'Search (Ctrl+/)',
    mandatory: false,
    categories: ['Pages', 'Files', 'Members']
  };
  searchInput: { [key: string]: string } = {
    globalSearch: ''
  };
  allResults: SearchResult[] = [
    {
      category: 'Pages',
      items: [
        { id: 'p1', title: 'Dashboard', subtitle: 'Main dashboard page' },
        { id: 'p2', title: 'Profile Settings', subtitle: 'User profile configuration' },
        { id: 'p3', title: 'Getting Started Guide', subtitle: 'Documentation' }
      ]
    },
    {
      category: 'Files',
      items: [
        { id: 'f1', title: 'Annual Report.pdf', subtitle: '2.5 MB' },
        { id: 'f2', title: 'Project Plan.docx', subtitle: '1.8 MB' },
        { id: 'f3', title: 'Team Photo.jpg', subtitle: '4.2 MB' }
      ]
    },
    {
      category: 'Members',
      items: [
        { id: 'm1', title: 'John Doe', subtitle: 'Product Manager' },
        { id: 'm2', title: 'Jane Smith', subtitle: 'Developer' },
        { id: 'm3', title: 'Mike Johnson', subtitle: 'Designer' }
      ]
    }
  ];

  filteredResults: SearchResult[] = this.initializeEmptyResults();
  private initializeEmptyResults(): SearchResult[] {
    return this.searchObj.categories?.map((category: any) => ({
      category,
      items: []
    })) || [];
  }

  handleSearchChange(event: { key: string, value: string }): void {
    this.searchInput[event.key] = event.value;
    if (!event.value) {
      this.filteredResults = this.initializeEmptyResults();
      return;
    }
    const searchTerm = event.value.toLowerCase();
    this.filteredResults = this.allResults.map(categoryResult => ({
      category: categoryResult.category,
      items: categoryResult.items.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(searchTerm))
      )
    }));
  }

  handleSearchSelect(event: { category: string, item: any }): void {
    console.log('Selected item:', event);
  }



  public handleRadioClick = (key: string) => {
    this.activeRadio = key;
  }

  public handleTabChange = (key: string) => {
    this.activeTab = key;
  }

  public handleDatepicker = (obj: any) => {
    const { year, month } = obj;
    console.log(obj);
    this.selectedDate = `${month} - ${year}`;
  }


  // text box filter methods
  public handleSearchEvent = (event: any) => {
    console.log('Search event:', event);
    switch (event.type) {
      case 'input':
        this.searchText = event.value;
        this.searchProjectInput.setValue(event.value);
        this.updateFilteredResults(event.value);
        break;
      case 'select':
        this.searchText = event.value;
        this.searchProjectInput.setValue(event.value);
        this.filteredResult.set([]);
        break;
      case 'clear':
        this.searchText = '';
        this.searchProjectInput.setValue('');
        this.filteredResult.set([]);
        break;
      case 'focus':
        this.updateFilteredResults(event.value);
        break;
    }
  }

  private updateFilteredResults(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredResult.set([]);
      return;
    }
    const term = searchTerm.toLowerCase().trim();
    const filtered = this.searchProjectObj.filter(item => {
      const itemValue = item.value.toLowerCase();
      if (!isNaN(Number(term)) && !isNaN(Number(itemValue))) {
        return Number(term) === Number(itemValue);
      }
      return itemValue.includes(term);
    });
    this.filteredResult.set(filtered);
  }

  public handleTextSearch = (event: any) => {
    if (event.selected) {
      this.searchText = event.value;
    }
    this.searchProjectInput.setValue(event.value);
    this.searchText = event.value;
  }

  // Open popup methods
  public openPopup() {
    this.standardPopupOpen.set(true);
  }

  public openSidebarPopup() {
    this.sidebarPopupOpen.set(true);
  }

  public openToastPopup() {
    this.toastPopupOpen.set(true);
    setTimeout(() => {
      this.closeToastPopup();
    }, 3000);
  }


  // Close popup methods
  public closeStandardPopup() {
    this.standardPopupOpen.set(false);
  }

  public closeSidebarPopup() {
    this.sidebarPopupOpen.set(false);
  }

  public closeToastPopup() {
    this.toastPopupOpen.set(false);
  }

  //Table Configuration
  private loadData = () => {
    this.tableData = tableData;
    this.totalItems = this.tableData.length;
  }

  private calculatePagination = () => {
    this.totalPages = Math.ceil(this.totalItems / this.tableConfig.itemsPerPage);
    this.displayedPages = this.getDisplayedPages();
    this.updatePagedData();
  }

  private updatePagedData = () => {
    const start = (this.tableConfig.currentPage - 1) * this.tableConfig.itemsPerPage;
    const end = start + this.tableConfig.itemsPerPage;
    this.pagedTableData = this.tableData.slice(start, end);
  }

  private getDisplayedPages = (): PaginationItem[] => {
    const items: PaginationItem[] = [];
    const visiblePageCount = 5;
    const halfVisible = Math.floor(visiblePageCount / 2);
    const currentPage = this.tableConfig.currentPage;
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(this.totalPages, startPage + visiblePageCount - 1);
    startPage = (endPage - startPage + 1 < visiblePageCount) ? Math.max(1, endPage - visiblePageCount + 1) : startPage;
    if (startPage > 1) {
      items.push({ type: 'number', value: 1 });
      (startPage > 2) && items.push({ type: 'ellipsis', value: 0 });
    }
    for (let i = startPage; i <= endPage; i++) {
      items.push({ type: 'number', value: i });
    }
    if (endPage < this.totalPages) {
      (endPage < this.totalPages - 1) && items.push({ type: 'ellipsis', value: 0 });
      items.push({ type: 'number', value: this.totalPages });
    }
    return items;
  }

  public updateTableConfig = (newConfig: TableSettings) => {
    console.log('Table config updated:', newConfig);
    this.tableConfig = { ...newConfig };
    this.calculatePagination();
  }

  public onRowClick = (row: any) => {
    console.log('Row clicked:', row);
  }

  public onActionClick = (event: { row: any, action: string }) => {
    console.log('Action clicked:', event);
  }

  public onOptionClick = (event: { row: any, option: string }) => {
    console.log('Option clicked:', event);
  }

  public onDropdownToggle = (id: string) => {
    console.log('Dropdown toggled for ID:', id);
  }

  public handlePageChange = (page: number) => {
    console.log('Page changed to:', page);
    this.tableConfig.currentPage = page;
    this.calculatePagination();
  }

  public handleNextPage = () => {
    if (this.tableConfig.currentPage < this.totalPages) {
      this.tableConfig.currentPage++;
      this.calculatePagination();
      console.log('Next page:', this.tableConfig.currentPage);
    }
  }

  public handlePrevPage = () => {
    if (this.tableConfig.currentPage > 1) {
      this.tableConfig.currentPage--;
      this.calculatePagination();
      console.log('Previous page:', this.tableConfig.currentPage);
    }
  }

  public handleFirstPage = () => {
    this.tableConfig.currentPage = 1;
    this.calculatePagination();
    console.log('First page');
  }

  public handleLastPage = (lastPage: number) => {
    this.tableConfig.currentPage = lastPage;
    this.calculatePagination();
    console.log('Last page:', lastPage);
  }



  // theme methods
  public handleThemeSwitch = (theme: ThemeType) => {
    this.currentTheme.set(theme);
    const themeObj = theme === 'darkTheme' ? darkTheme : lightTheme;
    this._themeService.updateThemeColors(themeObj);
    this.showThemeDrop.set(false);
  };

  public handleThemeDrop = () => {
    const newTheme = this.currentTheme() === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    this.handleThemeSwitch(newTheme);
  }
}
