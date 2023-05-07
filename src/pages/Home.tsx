import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import Item from '../models/item'

const Home: React.FC = () => {
  
  const [tableData, setTableData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:3000/inventories`)
            .then((response) => response.json())
            .then((data) => {
                setTableData(data)
            })
            .catch((error) => console.error(error));
    }, []);

    const nextPageHandler = () => {
      setCurrentPage(currentPage + 1);
      console.log("Current page: " + currentPage);
    } 

  return (
    <>
      <Table tableData={tableData} currentPage={currentPage}/>
      <Pagination onNextPage={nextPageHandler}/>
    </>
  )
}

export default Home