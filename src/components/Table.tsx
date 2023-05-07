import classes from '../modules/Table.module.css'
import Item from '../models/item';


const Table: React.FC<{ tableData: Array<Item>, currentPage: number }> = (props) => {
    
    return (
        <div className={classes['table-wrapper']}>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ნივთის სახელი</th>
                        <th scope="col">ნივთის ადგილმდებარეობა</th>
                        <th scope="col">ფასი (ლარებში)</th>
                        <th scope="col">ოპერაციები</th>
                    </tr>
                </thead>
                <tbody>

                    {props.tableData.slice(props.currentPage * 20 - 20, props.currentPage * 20).map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.place}</td>
                            <td>{item.price}₾</td>
                            <td className={classes['operation-col']}><img src="../src\assets\trash3.svg" alt="" /></td>
                        </tr>
                    ))}

                   
                </tbody>
            </table>
        </div>
    )
}

export default Table