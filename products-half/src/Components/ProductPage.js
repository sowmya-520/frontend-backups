import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchListOfProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8000/${category}/`);

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchListOfProducts();
  }, [category]);

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <div>
        <h2>Products</h2>
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))
          ) : (
            <li>No products found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
