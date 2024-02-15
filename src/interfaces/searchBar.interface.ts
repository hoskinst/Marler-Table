export interface SearchBarProps {
    filterInput: string;
    sortInput: string;
    sortDirection: string;
    sortFilterCategories: string[];
    onFilter: (type: string, value: string) => void;
    onClear: () => void;
}

export interface UseSearchSortFilterProps<T> {
    data: T[];
    filterInput: string;
    sortInput: keyof T | string;
    sortDirection: string;
  }
  
export interface UseSearchSortFilter<T> {
    sortedFilteredData: T[];
  }