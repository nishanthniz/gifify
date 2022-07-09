import { useEffect, useRef, useState, useContext } from "react";
import SearchContext from "../../store/search_context";
import classes from './search.module.css';

function Search() {
    const searchRef = useRef();
    const { searchValue, changeSearchValue } = useContext(SearchContext);
    const [bindValue, setBindValue] = useState("");

    useEffect(() => {
        if (searchValue) {
            setBindValue(searchValue);
        }
    }, [searchValue])

    const changeHandler = (e) => {
        setBindValue(e.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            changeSearchValue(searchRef.current.value);
        }
    }

    const clearSearch = () => {
        setBindValue("");
        changeSearchValue("");
    }

    return (
        <div className={classes.navbar__searchbar}>
            <input type='text' ref={searchRef} value={bindValue} placeholder='Search for GIFs and Stickers'
                onKeyDown={handleKeyDown} onChange={changeHandler} />
            <span className={classes.search___icon}>
                {searchValue && bindValue ? <i className="fa fa-times" aria-hidden="true" onClick={clearSearch}></i>
                    : <i className="fa fa-search" aria-hidden="true" />}
            </span>
        </div>
    );
};

export default Search;