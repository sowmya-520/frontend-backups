import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, storeinvoice } from "./CartSlice";
import { fetchUserId } from "./CustomerIdSlice";


const CartPage = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.user);
  const customerid = useSelector(state => state.customerid.userid);
  
  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    if (user) {
      dispatch(fetchUserId(user.username));
    }
  }, [user, dispatch]);
  const checkouthandler=()=>
  {
    let name=customerid
    let amount=cartItems.reduce((total, item) => total + item.amount, 0)
    let status= "ORDERED"
    let products = cartItems.map((item) => item.id);
    let tenure=cartItems.tenure
    const invoicedata={
      name:name,
      amount:amount,
      status:status,
      products:products,
      tenure:tenure
    }
     dispatch(storeinvoice(invoicedata))
    console.log(invoicedata)
    window.alert("ordered succesfully")
    navigate("/dashboard")

  }
  return (
    <div className="cart-container">
      <Link to={"/dashboard"}>dashboard</Link>
      <Link to={"/checkout"}>checkout</Link>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          username:{user.username}<br></br>
          id:{customerid}
           <button onClick={checkouthandler}>Checkout</button> 
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.id}</p>
              <p>Name: {item.name}</p>
              <p>Tenure: {item.tenure} months</p>
              <p>Quantity: {item.quantity}</p>
              <p>Amount: ₹{item.amount}</p>
              <button onClick={() => removeHandler(parseInt(item.id))}>remove from cart</button>
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
