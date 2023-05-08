import React, { useState, useEffect } from "react";
import classes from '../modules/AddForm.module.css'
import { Link } from "react-router-dom";
import 'animate.css';

const AddForm: React.FC = () => {

  const [selectedValue, setSelectedValue] = useState("მთავარი ოფისი");
  const [itemNameValue, setItemNameValue] = useState("");
  const [priceValue, setPriceValue] = useState<number>(0);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  }, [showSuccess])
  

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
    setShowError(false);
  }

  const itemNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemNameValue(e.target.value);
    setShowError(false);
  }

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(+e.target.value);
    setShowError(false);
  }

  const submitHandler = () => {
    if (itemNameValue === "" || priceValue === 0) {
      setShowError(true);
    } else {
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
          setShowSuccess(true);
        })
        .catch((error) => console.error(error));
    }
  }


  return (
    <>
      <Link to={'/'} ><button onClick={submitHandler} type="button" className={`${classes["main-page-button"]} btn btn-light`}>&#60; მთავარი გვერდი</button></Link>

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

        {showError && <div className="alert alert-danger animate__animated animate__fadeIn" role="alert">
          შეიყვანეთ ყველა არსებულ ველში !
        </div>}


        <button onClick={submitHandler} type="button" className={`${classes["add-button"]} btn btn-light`}>დამატება</button>

        {showSuccess && <div className="alert alert-success animate__animated animate__fadeIn" role="alert">
          ნივთი დაემატა !
        </div>}

      </div>

    </>

  )
}

export default AddForm