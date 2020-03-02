import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";

const App = props => {
  const [products, setProducts] = useState([]);
  //const [filterProducts, setFilterProducts] = useState([]);
  const [sort, setSort] = useState('select');
  //const count = useRef(0);
  const size = useRef();

  // const handleAddToCart = () => {
  //   //console.log("hi");
  // };

  // const handleChangeSize = () => {
  //   //console.log("hi");
  // };

  const handleChangeSort = e => {
    setSort(e.target.value);
    console.log(e.target.value);

    const sorted = e.target.value;

    const sortProducts = () => {
      const newProducts = products;

      newProducts.map(product => {
        if (sorted !== "select") {
          console.log("select = ", false);
          newProducts.sort((a, b) =>
            sorted === "lowest"
              ? a.price > b.price
                ? 1
                : -1
              : a.price < b.price
              ? 1
              : -1
          );
        } else {
          console.log("select = ", true);
          newProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
        }
        return newProducts;
      });
    };
    sortProducts();
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then(response => {
        setProducts(response.data);
      })
      //setFilterProducts(response.data)})
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Ecommerce shopping cart</h1>
      <hr />
      <div className="row">
        <div className="col-md-8">
          <Filter
            size={size}
            sort={sort}
            //handleChangeSize={handleChangeSize}
            handleChangeSort={handleChangeSort}
            count={products.length}
          />
          <hr />
          <Products
            products={products}
            //handleAddToCart={handleAddToCart}
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default App;
