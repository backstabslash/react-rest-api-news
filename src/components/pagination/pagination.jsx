import React from 'react';
import PropTypes from 'prop-types';

import './pagination.css';

const Pagination = ({ onClick, page, lastPage }) => (
    <div className="paginationWrapper">
        {page !== 0 && <button onClick={onClick} data-name="prev">{'<<'} prev page</button>}
        <span className='curpspan'>{page + 1}/{lastPage}</span>
        {page !== lastPage - 1 && <button onClick={onClick} data-name="next">next page {'>>'}</button>}
    </div>
);

Pagination.propTypes = {
    onClick: PropTypes.func,
    page: PropTypes.number,
    lastPage: PropTypes.number,
}

Pagination.defaultProps = {
    onClick: () => { },
    page: 0,
    lastPage: 0,
}

export default Pagination;
