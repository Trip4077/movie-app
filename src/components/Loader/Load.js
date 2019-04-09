import React from 'react';

const Load = () => {
    return(
        <div>
            <h3 id='load-text'>Loading...</h3>
            <div className="progress load-container">
                <div className="indeterminate load orange"></div>
            </div>
        </div>
    );
}

export default Load;