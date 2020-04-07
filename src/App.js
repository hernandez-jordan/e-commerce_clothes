import React, { useState, useEffect, useCallback} from "react";
import axios from "axios";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";


const App = props => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sort, setSort] = useState("select");
  const [size, setSize] = useState("select");
  
  const handleRemoveFromCart = () => {
    console.log("remove");
  }
  
  const handleAddToCart = (e , product) => {
   const getCartItem = product.id;
   let productInCart = false;
    
   setCartItems({getCartItem, count: 1})
   console.log(getCartItem)
   console.log(cartItems)
   //console.log(product.id)
   
   
    
    
  };

  const handleChangeSize = useCallback(
    () => {
      const filteredProducts = products.filter(product =>
        product.availableSizes.includes(size.toUpperCase())
      );
      setFilterProducts(filteredProducts);
    },
    [products, size],
  )
  

  const handleChangeSort = e => {
    setSort(e.target.value);

    const sorted = e.target.value;
    const sortProducts = () => {
      const key = sorted === "select" ? "id" : "price";
      console.log(key)
      const newProducts = products.sort((a, b) =>
        sorted === "lowest"
          ? a[key] > b[key]
            ? 1
            : -1
          : a[key] < b[key]
          ? 1
          : -1
      );
      return newProducts;
    };
    sortProducts();
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then(response => {
        setProducts(response.data);
        setFilterProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    handleChangeSize();
  }, [handleChangeSize]);

  return (
    <div className="container">
      <h1>Ecommerce shopping cart</h1>
      <hr />
      <div className="row">
        <div className="col-md-8">
          <Filter
            size={size}
            sort={sort}
            handleChangeSort={handleChangeSort}
            count={products.length}
            setSize={setSize}
          />       
          <hr />
          <Products
            products={products}
            filterProducts={filterProducts}
            handleAddToCart={handleAddToCart}
          />
        </div>
        <div className="col-md-4">
          <Basket cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} /> 
        </div>
      </div>
    </div>
  );
};

export default App;
