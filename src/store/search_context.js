import { createContext, useState } from "react";

const SearchContext = createContext({
    searchValue: "",
    changeSearchValue: (val) => { }
});

export const SearchContextProvider = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const changeSearchValueHandler = (newValue) => {
        setSearchValue(newValue);
    }

    const context = {
        searchValue,
        changeSearchValue: changeSearchValueHandler
    };

    return (
        <SearchContext.Provider value={context}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContext;