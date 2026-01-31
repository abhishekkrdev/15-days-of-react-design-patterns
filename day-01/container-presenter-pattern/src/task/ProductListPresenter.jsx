import { Fragment } from "react";
import ProductCard from "./ProductCard";

const ProductListPresenter = ({ products }) => {
  console.log(products);
  return products.map((product) => (
    <Fragment key={product.id}>
      <ProductCard product={product} />
    </Fragment>
  ));
};

export default ProductListPresenter;
