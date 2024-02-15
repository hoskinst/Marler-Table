export interface MarlerTableData {
    id: number;
    name: string;
    quantity: number,
    category: string,
    price: number,
    description: string
}

export interface MarlerTableDataProps {
    data: MarlerTableData[]
}

export interface MarlerTableState {
    filterKey: string,
    currentSortDirection: string,
    data: MarlerTableData[]
}