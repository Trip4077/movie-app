import React from 'react';
import requireAuth from '../auth/requireAuth';
import Load from '../components/Loader/Load';

const BrowsePage = props => {
    return(
        <>
            <h1>Browse</h1>
            <Load />
        </>
    );
}

export default requireAuth(BrowsePage);