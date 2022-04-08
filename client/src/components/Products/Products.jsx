import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/products.action";
import CategoryList from "./CategoryList";
import "./products.css";
import ProductList from "./ProductsList";

function Products({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(match.params.categoryId));
  }, [match.params.categoryId]);

  return (
    <div className="products-section">
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default Products;
