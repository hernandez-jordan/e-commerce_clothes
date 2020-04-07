import React from "react"

const Basket = ({cartItems}) => {
  
//const countProduct = <div> you have {cartItems.length} products in your cart </div>;

  return(
    <div className="alert alert-info">
      {cartItems.length === 0 ? "basket is empty" : <div> you have {cartItems.length} products in your cart </div>}
    </div>
  )
}
export default Basket;