import React, { useState } from "react";
import classes from '../modules/AddForm.module.css'

const AddForm: React.FC<{}> = () => {

  const [selectedValue, setSelectedValue] = useState("მთავარი ოფისი");
  const [itemNameValue, setItemNameValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
  }

  const itemNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemNameValue(e.target.value);
  }

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(+e.target.value);
  }

  const submitHandler = () => {
    fetch(
      `http://localhost:3000/inventories`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: itemNameValue, price: priceValue, place: selectedValue })
    }
    )
      .then((response) => response.json())
      .then(() => {
        console.log("Success");
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className={classes['form-wrapper']}>

      <h1>ნივთის დამატება</h1>

      <div className={classes['select-wrapper']}>
        <select onChange={selectChangeHandler} value={selectedValue} className="form-select" aria-label="Default select example">
          <option value="მთავარი ოფისი">მთავარი ოფისი</option>
          <option value="კავეა გალერია">კავეა გალერია</option>
          <option value="კავეა თბილისი მოლი">კავეა თბილისი მოლი</option>
          <option value="კავეა ისთ ფოინთი">კავეა ისთ ფოინთი</option>
          <option value="კავეა სითი მოლი">კავეა სითი მოლი</option>
        </select>
      </div>

      <div className={classes['name-input-wrapper']}>
        <label htmlFor="exampleFormControlInput1" className="form-label">სახელი</label>
        <input onChange={itemNameChangeHandler} value={itemNameValue} type="text" className="form-control" id="exampleFormControlInput1" placeholder='მაგ: პროექტორი' />
      </div>

      <div className={classes['price-input-wrapper']}>
        <label htmlFor="exampleFormControlInput1" className="form-label">ფასი ₾</label>
        <input onChange={priceChangeHandler} value={priceValue} type="number" className="form-control" id="exampleFormControlInput1" />
      </div>

      <button onClick={submitHandler} type="button" className={`${classes["add-button"]} btn btn-light`}>დამატება</button>

    </div>

  )
}

export default AddForm