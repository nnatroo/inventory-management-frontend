import classes from '../modules/Table.module.css'
import Item from '../models/item';
import Row from '../ui/Row';



const Table: React.FC<{ tableData: Array<Item>, currentPage: number, onDelete: (id: number) => void }> = (props) => {

    const deleteHandler = (id: number) => {
        props.onDelete(id);
    }

    return (
        <div className={classes['table-wrapper']}>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ნივთის სახელი</th>
                        <th scope="col">ნივთის ადგილმდებარეობა</th>
                        <th scope="col">ფასი (ლარებში)</th>
                        <th className='text-center' scope="col">ოპერაციები</th>
                    </tr>
                </thead>
                <tbody>

                    {props.tableData.slice(props.currentPage * 20 - 20, props.currentPage * 20).map((item) => (
                        <Row key={item.id} item={item} onDelete={deleteHandler}/>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default Table