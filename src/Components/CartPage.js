// CartPage.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <Link to={"/dashboard"}>dashboard</Link>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>Name: {item.name}</p>
              <p>Tenure: {item.tenure} months</p>
              <p>Quantity: {item.quantity}</p>
              <p>Amount: ₹{item.amount}</p>
              <hr />
            </div>
          ))}
           <p>Total Amount: ₹{cartItems.reduce((total, item) => total + item.amount, 0)}</p> 
        </div>
      )}
    </div>
  );
};

export default CartPage;
