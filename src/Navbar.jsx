import { NavLink } from "react-router-dom";
import LanguageContext from "./LanguageContext";
import { useContext } from "react";

const Navbar = ({ setLang }) => {
    const lang = useContext(LanguageContext);
    const ChangeLanguage = {
        "en-US": {
            about: "about",
            search: " Search Actor/Actresses",
        },
        "it-IT": {
            about: "Chi siamo",
            search: " Cerca attori/attrici",
        },
    };

    const onChange = (e) => {
        setLang(e.target.value);
    };
    return (
        <nav>
            <menu>
                <li>
                    <NavLink className="menu-li" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu-li" to="about">
                        {ChangeLanguage[lang].about}
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu-li" to="search">
                        {ChangeLanguage[lang].search}
                    </NavLink>
                </li>
                <li>
                    <select value={lang} onChange={onChange}>
                        <option value={"en-US"}>EN</option>
                        <option value={"it-IT"}>IT</option>
                    </select>
                </li>
            </menu>
        </nav>
    );
};

export default Navbar;
