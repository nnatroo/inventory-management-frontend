import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Item from "../models/item";
import Select from "../components/Select";
import { Link } from "react-router-dom";
import classes from '../modules/Home.module.css'

const Home: React.FC = () => {
  const [tableData, setTableData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [dataChanged, setDataChanged] = useState(1);
  const [sortOption, setSortOption] = useState("name");
  const [sortType, setSortType] = useState("asc");
  const [selectedValue, setSelectedValue] = useState('ყველა');

  useEffect(() => {
    fetch(
      `http://localhost:3000/inventories?sort=${sortOption}&type=${sortType}&place=${selectedValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
        setTotalItems(data.length);
      })
      .catch((error) => console.error(error));
  }, [dataChanged, selectedValue]);

  const deleteHandler = (itemId: number) => {
    const inventoryID = itemId;

    fetch(`http://localhost:3000/inventories/${inventoryID}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        setDataChanged(dataChanged + 1);
      })
      .catch((error) => {
        console.error("Error deleting inventory:", error);
      });
  };

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPageHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  const priceSortHandler = () => {
    if (sortOption == "price") {
      if (sortType == "asc") {
        setSortType("desc");
      } else {
        setSortType("asc");
      }
      setDataChanged(dataChanged + 1);
    } else {
      setSortOption("price");
      setDataChanged(dataChanged + 1);
    }
  };

  const nameSortHandler = () => {
    if (sortOption == "name") {
      if (sortType == "asc") {
        setSortType("desc");
      } else {
        setSortType("asc");
      }
      setDataChanged(dataChanged + 1);
    } else {
      setSortOption("name");
      setDataChanged(dataChanged + 1);
    }
  };

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setCurrentPage(1);
  }

  return (
    <>
      <div className={classes['main-wrapper']}>
        <Select selectedValue={selectedValue} onSelect={selectHandler} />
        <Table
          onPriceSort={priceSortHandler}
          onNameSort={nameSortHandler}
          onDelete={deleteHandler}
          tableData={tableData}
          currentPage={currentPage}
        />
        <Link to={"/add"}><button type="button" className={`${classes["add-button"]} btn btn-light`}>დამატება</button></Link>
      </div>
      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        onNextPage={nextPageHandler}
        onPrevPage={prevPageHandler}
      />
    </>
  );
};

export default Home;
