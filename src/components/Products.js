import React from "react";
import formatCurrency from "../util";

const Products = props => {
  const productItems = props.products.map((product, key) => {
    return (
      <div className="col-md-4" key={key}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} onClick={e => props.handleAddToCart(e, product)}>
            <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <div>
            <b>{formatCurrency(product.price)}</b>
            <button className="btn btn-primary" onClick={e => props.handleAddToCart(e, product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{productItems}</div>;
};
export default Products;
