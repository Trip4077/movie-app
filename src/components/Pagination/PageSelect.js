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
            <span onClick={decrementPage}> &#x2039; </span>

            <ul>
                { props.pageList.map(pageNum => <li key={pageNum} onClick={selectPage}>{pageNum}</li>) }
            </ul>

            <span onClick={incrementPage}> &#x203A; </span>
        </div>
    );
}

export default PageSelect;