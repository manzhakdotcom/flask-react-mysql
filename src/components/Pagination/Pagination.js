import React from 'react';

const Pagination = ({tablesPerPage, totalTables, paginate}) => {
    const pageNumbers = [];

    console.log('totalTables ', totalTables);
    console.log('tablesPerPag ',tablesPerPage);

    for (let i = 1; i <= Math.ceil(totalTables / tablesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={(e) => paginate(e, number)} href='/#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;