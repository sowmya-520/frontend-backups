import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfProducts } from "./ProductSlice";
import { useEffect } from "react";
import './DetailsPage.css'; 

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { category, product_id } = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.find((product) => product.id === parseInt(product_id));

  useEffect(() => {
    dispatch(fetchListOfProducts(category));
  }, [category, dispatch]);

  return (
    <div className="details-container">
      <div className="image-container">
        <img
          src={product.options.imageurl}
          alt={product.name}
          className="category-image"
        />
      </div>
      <div className="details-content">
        <button type="submit">Add to Cart</button>
        <div>
          <h1>{product.name}</h1>
        </div>
        <div>
          <h1>Description: </h1><h2>{product.description}</h2>
        </div>
        <div>
          <h1>color: </h1>   <h2>{product.options.color}</h2>
        </div>
        <div>
          <h1>Size: </h1>   <h2>{product.options.size}</h2>
        </div>
        <div>
          <h1>Condition: </h1>   <h2>{product.condition}</h2>
        </div>
        <div>
          <h1>Delivered in : </h1>   <h2>{product.noofdays}</h2>
        </div>
        <div className="rental-options-container">
          <h1>Rental Options:</h1>
          <h5>3 months: ₹{product.rentaloptions[0].ratepermonth}</h5>
          <h5>6 months: ₹{product.rentaloptions[1].ratepermonth}</h5>
          <h5>9 months: ₹{product.rentaloptions[2].ratepermonth}</h5>
          <h5>12 months:₹{product.rentaloptions[3].ratepermonth}</h5>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
