import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Card from "../components/Card";
import { DashboardProps} from "../types/product.type";

const Dashboard: React.FC<DashboardProps> = ({cart, setCart}) => {
 
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);




  
  useEffect(() => {
    const items:any = localStorage.getItem('products');
    if (items) {
        setProducts(JSON.parse(items));
    }
  }, []);

  console.log(products)

  

  let pageCount: number = 10;
  let totalPageCount: number = products && Math.ceil(products.length / pageCount);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - pageCount);
    }
  }

  function nextPage() {
    if (currentPage < totalPageCount) {
      setCurrentPage((prev) => prev + pageCount);
    }
  }

  const pageView = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPageCount) page = totalPageCount;
    let currentView =products && products.slice(page, page + pageCount);

    // console.log(currentView)
    return currentView;
  };


  return (
    <div className="home">
      <div className="home__row">
        {products && products &&
          pageView(currentPage).map((product:any) => (
            <Card
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
      </div>

      <div className="button_row">
        <button onClick={prevPage}>prev</button>
        <p>Page {currentPage / 10 + 1}</p>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  );
};

export default Dashboard;
