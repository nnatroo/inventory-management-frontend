import React, { useState } from 'react'

const Pagination: React.FC <{onNextPage: () => void}> = (props) => {

    const nextPageHandler = () => {
        props.onNextPage();
    }
    
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link">Previous</a></li>
                    {/* <li className="page-item"><a className="page-link">1</a></li>
                    <li className="page-item"><a className="page-link">2</a></li> */}
                    <li onClick={nextPageHandler} className="page-item"><a className="page-link">Next</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination