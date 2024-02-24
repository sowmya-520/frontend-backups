import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ProductPage.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchListOfProducts } from "./ProductSlice";

const ProductPage = () => {
  
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  
  useEffect(() => {
    dispatch(fetchListOfProducts(category));
  }, [dispatch, category]);

  return (
    <div className="container">
      <h1 className="heading">Products under {category}</h1>
      <div className="grid">
        {products.length === 0 ? (
          <h1 className="empty">No products added</h1>
        ) : (
          products.map((product) => (
            <Link key={product.id} to={`product/${product.id}`} className="category-link">
              <div key={category.id} className="category-container">
                <img
                  src={product.options.imageurl}
                  alt={product.name}
                  className="category-image"
                />
                <p className="category-name">{product.name}</p>
                <p>{product.rentaloptions[0].tenure} months</p>
                <p>{product.rentaloptions[0].ratepermonth}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;