import React from "react";
import formatCurrency from "../util";

const Products = props => {
  const  { products, filterProducts } = props;
  const finalProducts = (JSON.stringify(products) !== JSON.stringify(filterProducts) && filterProducts.length) ? 
  filterProducts : products;
  const productItems = finalProducts.map((product, key) => {
    return (
      <div className="col-md-4" key={key}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} onClick={e => props.handleAddToCart(e, product)}>
            <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.availableSizes.join(',')}</p>
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
  // const productItems = <> </>;

  return <div className="row">{productItems}</div>;
};
export default Products;
