import React from 'react'

const Pagination = ({ matchesPerPage, totalMatches, paginate,  }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalMatches / matchesPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        <nav className="p-4 mr-4 float-right">
            <ul className="pagination ">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item ">
                        <a onClick={() => paginate(number)} href="#" className="page-link text-light bg-dark ">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
