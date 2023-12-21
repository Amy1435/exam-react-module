import { useState } from "react";
import LanguageContext from "./LanguageContext";
import { useContext } from "react";

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState("");
    const lang = useContext(LanguageContext);

    const ChangeLanguageSearchBar = {
        "en-US": {
            button: "Find",
        },
        "it-IT": {
            button: "Cerca",
        },
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="searchbar-container">
            <input type="text" value={value} onChange={onChange} />
            <button onClick={() => onSearch(value)}>
                {ChangeLanguageSearchBar[lang].button}
            </button>
        </div>
    );
};

export default SearchBar;
