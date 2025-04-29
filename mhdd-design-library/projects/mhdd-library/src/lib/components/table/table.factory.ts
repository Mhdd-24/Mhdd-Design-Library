export interface TableHeader {
    key: string;
    value: string;
    type: string;
}

export interface TableSettings {
    title: string;
    showPagination: boolean;
    currentPage: number;
    totalPages?: number;
    itemsPerPage: number;
    showEntryInfo?: boolean;
}

export interface PaginationItem {
    type: 'number' | 'ellipsis';
    value: number;
}

// Default table configuration
export const DEFAULT_TABLE_CONFIG: TableSettings = {
    title: 'Data Table',
    showPagination: true,
    currentPage: 1,
    itemsPerPage: 10,
    showEntryInfo: true
};

export class TableFactory {
    static create(options: Partial<TableSettings>): TableSettings {
        return { ...DEFAULT_TABLE_CONFIG, ...options };
    }

    static style(
        title: string,
        itemsPerPage: number = 10,
        showPagination: boolean = true,
        currentPage: number = 1,
        showEntryInfo: boolean = true
    ): TableSettings {
        return this.create({
            title,
            itemsPerPage,
            showPagination,
            currentPage,
            showEntryInfo
        });
    }
}