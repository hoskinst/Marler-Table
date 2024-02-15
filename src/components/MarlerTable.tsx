import { useState } from 'react';
import useSearchSortFilter from '../hooks/searchFilter';
import styled from 'styled-components';

import { 
  MarlerTableData, 
  MarlerTableDataProps,  
} from '../interfaces/marler.interface';

import { SearchBar } from './SearchBar';

const TableHeader = styled.th`
  background-color: #f2f2f2;
  cursor: pointer;
  padding: 8px;
  text-align: left;

  &:hover {
    background-color: #ddd;
  }
`

const TableData = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;

`;

const TableContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const MarlerTable: React.FC<MarlerTableDataProps>  = ({ data }) => {
  const sortCategories = Object.keys(data[0]);
  const [searchParams, setSearchParams] = useState({
    filterInput: '',
    sortInput: '',
    sortDirection: ''
  });

  const handleClear = () => {
    setSearchParams({
      filterInput: '',
      sortInput: '',
      sortDirection: ''
    })
  }

  const handleFilter = (type: string, value: string) => {
    setSearchParams(prevState => ({
      ...prevState,
      [type]: value,
    })
  )}
  
  // Since the handleFilter and handleClear function re-render by setting state this will be re-evaluated on the render
  const {sortedFilteredData: filteredData} = useSearchSortFilter(
    {
      data, 
      filterInput: searchParams.filterInput, 
      sortInput: searchParams.sortInput, 
      sortDirection: searchParams.sortDirection
  })

  return (
    <>
    <div>
      <SearchBar 
        {...searchParams }
        sortFilterCategories={sortCategories}
        onFilter={handleFilter} 
        onClear={handleClear} 
      />
    </div>
    <TableContainer>
      <Table>
        <thead>
          <tr>
              {sortCategories.map(key => (
                  <TableHeader key={key}>
                    {key}
                  </TableHeader>
              ))}
          </tr>
        </thead>
        <tbody>
        { filteredData.length > 0 && filteredData.map((row: MarlerTableData, index: number) => (
            <tr key={index.toString()}>
              <TableData>
                {row.id}
              </TableData>
              <TableData>
                {row.name}
              </TableData>
              <TableData>
                {row.quantity}
              </TableData>
              <TableData>
                {row.category}
              </TableData>
              <TableData>
                {row.price}
              </TableData>
              <TableData>
                {row.description}
              </TableData>
            </tr>
          ))} 
        </tbody>
      </Table>
    {filteredData.length === 0 && <p>No results found!</p>}
    </TableContainer>
    </>
  );
};

export default MarlerTable;
