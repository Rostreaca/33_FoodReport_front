import { SearchWrapper, SearchIcon, SearchInput } from "./SearchBar.style";

const SearchBar = ({placeholder, value, onChange, onKeyPress}) => {
  return (
    <SearchWrapper>
      <SearchIcon>
        <img src="/Search-Icon.png" alt="search" />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyPress}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
