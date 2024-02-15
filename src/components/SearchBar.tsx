import styled from "styled-components"
import { SearchBarProps } from "../interfaces/searchBar.interface"

const SearchInput = styled.input`
    padding: 8px;
    margin: 0px 8px 8px 0px;
    display: inline-block;
    float: left;
    border: 1px solid black;
    border-radius: 4px;
`

const DirectionSelect = styled.select`
    padding: 8px;
    margin: 0px 8px 8px 0px;
    display: block;
    float: left;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
`

const ClearButton = styled.button`
    margin: 0px 8px 8px 0px;
    display: inline-block;
    float: right;
    background-color: white;
    border: 1px solid red;
    border-radius: 4px;
    color: red;

    &:hover {
        border: 1px solid red;
        filter: brightness(0.95);
    }
`
// Lifted parameters from state of parent component to not handle state in the component
export const SearchBar:React.FC<SearchBarProps> =({ 
    filterInput,
    sortInput, 
    sortDirection, 
    sortFilterCategories, 
    onFilter, 
    onClear 
}) => {
    return (
        <div>
            <SearchInput type="text" value={filterInput} onChange={(event) => onFilter("filterInput", event.target.value)} placeholder="filter..."/>
            <DirectionSelect style={sortInput === "" ?  {color: 'grey'}:  undefined} value={sortInput} onChange={(event) => onFilter("sortInput", event.target.value)}>
                <option value="" disabled hidden>select category</option>
                {sortFilterCategories.map((category: string, index: number)=> (
                    <option key={index + category} value={category}>{category}</option>
                ))}
            </DirectionSelect>
            <DirectionSelect style={sortDirection === "" ?  {color: 'grey'}:  undefined} value={sortDirection} onChange={(event) => onFilter("sortDirection", event.target.value)}>
                <option value="" disabled hidden>select direction</option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </DirectionSelect>
            <ClearButton type="button" onClick={onClear}>Clear Search</ClearButton>
        </div>
    )
}