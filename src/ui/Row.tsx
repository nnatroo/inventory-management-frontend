import classes from '../modules/Table.module.css'

const Row: React.FC<{ onDelete: (id: number) => void, item: { name: string, place: string, price: number, id: number } }> = (props) => {

    const clickHandler = (id: number) => {
        props.onDelete(id);
    }
    return (
        <>
            <tr>
                <td>{props.item.name}</td>
                <td>{props.item.place}</td>
                <td>{props.item.price}₾</td>
                <td className={classes['operation-col']}><img onClick={clickHandler.bind(null, props.item.id)}  src="../src\assets\trash3.svg" alt="" /></td>
            </tr>
        </>
    )
}

export default Row