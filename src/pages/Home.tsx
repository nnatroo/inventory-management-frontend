import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import Item from '../models/item'

const Home: React.FC = () => {

  const [tableData, setTableData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [dataChanged, setDataChanged] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/inventories`)
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
        setTotalItems(data.length);
      })
      .catch((error) => console.error(error));
  }, [dataChanged]);

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
    console.log("Current page: " + currentPage);
  }

  const prevPageHandler = () => {
    setCurrentPage(currentPage - 1);
    console.log("Current page: " + currentPage);
  }

  const deleteHandler = (itemId: number) => {
    console.log(itemId);
    const inventoryID = itemId; 

    fetch(`http://localhost:3000/inventories/${inventoryID}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        console.log("Inventory deleted successfully");
        setDataChanged(dataChanged + 1)
        
      })
      .catch((error) => {
        console.error("Error deleting inventory:", error);
      });
  }

  return (
    <>
      <Table onDelete={deleteHandler} tableData={tableData} currentPage={currentPage} />
      <Pagination totalItems={totalItems} currentPage={currentPage} onNextPage={nextPageHandler} onPrevPage={prevPageHandler} />
    </>
  )
}

export default Home