import React from 'react'
import classes from '../modules/Table.module.css'

const Table: React.FC = () => {
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
                    <tr>
                        <th>პროექტორი</th>
                        <td>კავეა გალერია</td>
                        <td>1500₾</td>
                        <td><img src="../src\assets\trash3.svg" alt="" /></td>
                    </tr>

                    <tr>
                        <th>პროექტორი</th>
                        <td>კავეა გალერია</td>
                        <td>1500₾</td>
                        <td><img src="../src\assets\trash3.svg" alt="" /></td>
                    </tr>

                    <tr>
                        <th>პროექტორი</th>
                        <td>კავეა გალერია</td>
                        <td>1500₾</td>
                        <td><img src="../src\assets\trash3.svg" alt="" /></td>
                    </tr>

                    <tr>
                        <th>პროექტორი</th>
                        <td>კავეა გალერია</td>
                        <td>1500₾</td>
                        <td><img src="../src\assets\trash3.svg" alt="" /></td>
                    </tr>

                    <tr>
                        <th>პროექტორი</th>
                        <td>კავეა გალერია</td>
                        <td>1500₾</td>
                        <td><img src="../src\assets\trash3.svg" alt="" /></td>
                    </tr>
                    
                   
                </tbody>
            </table>
        </div>
    )
}

export default Table