import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="searchbar-container">
            <input type="text" value={value} onChange={onChange} />
            <button onClick={() => onSearch(value)}>Find</button>
        </div>
    );
};

export default SearchBar;
