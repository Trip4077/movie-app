import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../actions';

const Navbar = props => {
    return(
        <div className='navbar-fixed'>
            <nav className='amber nav-wrapper'>
                <NavLink to="/browse" className='nav-link black-text waves-effect waves-red'>
                    Browse
                </NavLink>

                <NavLink to="/search" className='nav-link black-text waves-effect waves-red'>
                    Search
                </NavLink>

                <NavLink to="/profile" className='nav-link black-text waves-effect waves-red'>
                    Profile
                </NavLink>

                <button onClick={props.logout}
                        className='btn-flat btn-small waves-effect waves-light right'
                        id='logout'>
                    Log Out
                </button>
            </nav>
        </div>
    );
}

export default connect(null, { logout })(Navbar);