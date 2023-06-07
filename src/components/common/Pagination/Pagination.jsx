import React from 'react';
import classes from './Pagination.module.css';

let Pagination = (props) => {
    debugger;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={classes.pagesContainer}>        
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : ""}
                    onClick={(e) => { props.onPageChange(p); }}>{p}</span>
            })}               
    </div>
}

export default Pagination;