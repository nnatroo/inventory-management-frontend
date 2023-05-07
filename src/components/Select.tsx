import React, { useState } from 'react'
import classes from '../modules/Select.module.css'

const Select: React.FC<{
    onSelect: (event: React.ChangeEvent<HTMLSelectElement>
    ) => void, selectedValue: string
}> = (props) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onSelect(event);
    };

    return (
        <div className={classes['select-wrapper']}>
            <select value={props.selectedValue} onChange={handleChange} className="form-select" aria-label="Default select example">
                <option value="ყველა">ყველა</option>
                <option value="მთავარი ოფისი">მთავარი ოფისი</option>
                <option value="კავეა გალერია">კავეა გალერია</option>
                <option value="კავეა თბილისი მოლი">კავეა თბილისი მოლი</option>
                <option value="კავეა ისთ ფოინთი">კავეა ისთ ფოინთი</option>
                <option value="კავეა სითი მოლი">კავეა სითი მოლი</option>
            </select>
        </div>
    )
}

export default Select