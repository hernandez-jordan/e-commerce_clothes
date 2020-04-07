import React from "react";
import formatCurrency from "../util";
import Icon from "../util/icon";
import { ICONS } from "../util/Icons";
import Button from "../util/Button";

const Products = props => {
  const { products, filterProducts } = props;
  const finalProducts =
    JSON.stringify(products) !== JSON.stringify(filterProducts) &&
    filterProducts.length
      ? filterProducts
      : products;
  const productItems = finalProducts.map((product, key) => {
    return (
      <div key={key} className="col-md-4">
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={e => props.handleAddToCart(e, product)}
          >
            <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
            <p>
              {product.availableSizes.length > 0
                ? product.availableSizes.join(",")
                : "not available"}
            </p>
          </a>
          <p><b>{formatCurrency(product.price)}</b> </p>

          <Button onClick={e => props.handleAddToCart(e, product)}>
            <p style={{margin : 'auto'}}> Add to Cart </p>
            <Icon size={50} color="white" path={ICONS.SHOPPINGCART} />
          </Button>
        </div>
      </div>
    );
  });

  return <div className="row">{productItems}</div>;
};
export default Products;
