import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../actions';

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

            <button onClick={props.logout}>
                Log Out
            </button>
        </nav>
    );
}

export default connect(null, { logout })(Navbar);