import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8000/categories/');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.length > 0 ? (
            categories.map(category => (
              <li key={category.id}>{category.type}</li>
            ))
          ) : (
            <li>No categories found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;