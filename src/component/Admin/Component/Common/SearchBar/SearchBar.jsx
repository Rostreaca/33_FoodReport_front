import { SearchWrapper, SearchIcon, SearchInput } from "./SearchBar.style"

const SearchBar = (props) => {

    return (
        <SearchWrapper>
            <SearchIcon>
                <img src="/Search-Icon.png" alt="search" />
            </SearchIcon>
            <SearchInput
                type="text"
                placeholder={props.placeholder}
            />
        </SearchWrapper>
    );
};

export default SearchBar;