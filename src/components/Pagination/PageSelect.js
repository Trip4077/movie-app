import React from 'react';

const PageSelect = props => {
    
    const selectPage = e => {
        props.performSearch(e, Number(e.target.innerText))
    }

    const incrementPage = e => {
        props.performSearch(e, (props.page + 1))
    }

    const decrementPage = e => {
        props.performSearch(e, (props.page - 1))
    }

    return(
        <div className='page-index'>
            <ul className="pagination">
                <li className="waves-effect" onClick={decrementPage}><i className="material-icons">chevron_left</i></li>

                { props.pageList.map(pageNum => <li key={pageNum} onClick={selectPage} className="waves-effect">{pageNum}</li>) }

                <li className="waves-effect" onClick={incrementPage}><i className="material-icons">chevron_right</i></li>
            </ul>
        </div>
    );
}

export default PageSelect;