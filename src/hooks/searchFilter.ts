import { UseSearchSortFilter, UseSearchSortFilterProps } from "../interfaces/searchBar.interface";

// Lifted state parameters from root so that this hook doesn't require state management
const useSearchSortFilter = <T extends Record<string, any>>({ 
    data, 
    filterInput, 
    sortInput, 
    sortDirection, 
  }: UseSearchSortFilterProps<T>): UseSearchSortFilter<T> => 
  {

    // Sorts data based on category selected in ascending or descending direction
    const applySort = (arr: T[], field: keyof T | '', direction: string) => {
      if (!field) return arr;

      const sortedArray = [...arr];
      sortedArray.sort((a, b) => {
        const aValue = a[field];
        const bValue = b[field];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return direction === 'asc' ? (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) : (bValue < aValue ? -1 : bValue > aValue ? 1 : 0);
      });
      return sortedArray;
    };

    // filters both number and string since those are the two types in my data set
    const applyFilter = <T extends Record<string, any>>(arr: T[], input: string) => {
      return arr.filter(item =>
        Object.values(item).some(val =>
          (typeof val === 'string' && val.toLowerCase().includes(input.toLowerCase())) ||
          (typeof val === 'number' && val.toString().toLowerCase().includes(input.toLowerCase()))
        )
      );
    };
    
    // apply the filter first, then sort the results
    const filteredData = applyFilter(data, filterInput);
    const sortedFilteredData = applySort(filteredData, sortInput, sortDirection);

    return {
      sortedFilteredData,
  };
};

export default useSearchSortFilter;
