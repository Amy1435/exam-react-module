import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu-li" to="search">
                        Search Actor/Actresses
                    </NavLink>
                </li>
            </menu>
        </nav>
    );
};

export default Navbar;
