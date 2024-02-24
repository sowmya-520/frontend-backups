import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ProductPage.css'
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
    <div className="container">
      <h1 className="heading">Products </h1>
      <div className="grid">
        {products.map((product) => (
          <Link key={product.id} to={`/${product.type}`} className="category-link">
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
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
