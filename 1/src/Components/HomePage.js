import React, { useState } from "react";
import "./HomePage.css";
import NavBarPage from "./NavBarPage";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "./CategorySlice";
import { useEffect } from "react";

export default function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories)
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  
  return (
    <div>
      <NavBarPage />
      <div className="container  mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Browse By Category
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category) => (
            
              <div key={category.id} className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">{category.type}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
