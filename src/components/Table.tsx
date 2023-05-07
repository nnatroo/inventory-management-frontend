import classes from '../modules/Table.module.css'
import Item from '../models/item';
import Row from '../ui/Row';
import { useState } from 'react';



const Table: React.FC<{ tableData: Array<Item>, currentPage: number, onDelete: (id: number) => void, onPriceSort: () => void, onNameSort: () => void }> = (props) => {

    const [priceTitle, setPriceTitle] = useState("ფასი (ლარებში)")
    const [nameTitle, setNameTitle] = useState("ნივთის სახელი ⇳")

    const deleteHandler = (id: number) => {
        props.onDelete(id);
    }

    const priceSortHandler = () => {
        props.onPriceSort();
        setPriceTitle("ფასი (ლარებში) ⇳")
        setNameTitle("ნივთის სახელი")
        
    }

    const nameSortHandler = () => {
        props.onNameSort();
        setNameTitle("ნივთის სახელი ⇳")
        setPriceTitle("ფასი (ლარებში)")
    }

    return (
        <div className={classes['table-wrapper']}>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th onClick={nameSortHandler} scope="col">{nameTitle}</th>
                        <th scope="col">ნივთის ადგილმდებარეობა</th>
                        <th onClick={priceSortHandler} scope="col">{priceTitle}</th>
                        <th className='text-center' scope="col">ოპერაციები</th>
                    </tr>
                </thead>
                <tbody>

                    {props.tableData.slice(props.currentPage * 20 - 20, props.currentPage * 20).map((item) => (
                        <Row key={item.id} item={item} onDelete={deleteHandler} />
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default Table