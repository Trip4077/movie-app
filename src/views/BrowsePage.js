import React from 'react';
import requireAuth from '../auth/requireAuth';

const BrowsePage = props => {
    return(
        <h1>Browse</h1>
    );
}

export default requireAuth(BrowsePage);