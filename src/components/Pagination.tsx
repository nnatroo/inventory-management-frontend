import classes from '../modules/Pagination.module.css'

const Pagination: React.FC<{ onNextPage: () => void, onPrevPage: () => void, currentPage: number, totalItems: number }> = (props) => {

    const nextPageHandler = () => {
        props.onNextPage();
    }

    const prevPageHandler = () => {
        props.onPrevPage();
    }

    return (
        <div className={classes['pagination-wrapper']}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {props.currentPage !== 1 && <li onClick={prevPageHandler} className="page-item"><button className="page-link">წინა</button></li>}
                    <li className="page-item"><button className="page-link">{props.currentPage}</button></li>
                    <li onClick={nextPageHandler} className="page-item"><button className="page-link">შემდეგი</button></li>
                    <li className="page-item"><span className="page-link">ნივთების ჯამური რაოდენობა: {props.totalItems}</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination