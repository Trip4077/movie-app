import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return(
        <nav>
            <NavLink to="/browse" activeClassName="selected">
                Browse
            </NavLink>

            <NavLink to="/search" activeClassName="selected">
                Search
            </NavLink>

            <NavLink to="/profile" activeClassName="selected">
                Profile
            </NavLink>

            <button>
                Log Out
            </button>
        </nav>
    );
}

export default Navbar;