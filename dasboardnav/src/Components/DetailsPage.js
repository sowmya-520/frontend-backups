import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

const DetailsPage = () => {
  // const { , id } = useParams();
  // const products = useSelector((state) => state.product.products);
  
  // // Convert productId to a number
  // const productIdNumber = parseInt(productId);

  // // Find the product with the matching ID
  // const filteredProduct = products.find((product) => product.id === productIdNumber);
  
  return (
    <div className="container">
        <h1>DetailsPage</h1>
        {/* <h1>{productId}</h1> */}
          {/* {filteredProduct ? (
            <div>
              <h1>Name: {filteredProduct.name}</h1>
            </div>
          ) : (
            <p>Product not found</p>
          )} */}
    </div>
  );
};

export default DetailsPage;
