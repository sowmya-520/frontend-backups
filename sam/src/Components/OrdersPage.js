import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardNav from "./DashBoardNav";
import { useEffect } from "react";
import "./Order.css";
import { fetchListOfInvoices } from "./OrderSlice";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const customerdata = useSelector((state) => state.customerid.items);
  let id = customerdata.id;
  const invoices = useSelector((state) => state.order.orderdata);
  const customer_invoices = invoices.filter(
    (invoice) => invoice.name === parseInt(id)
  );
  useEffect(() => {
    dispatch(fetchListOfInvoices());
  }, [dispatch]);

  return (
    <div>
      <DashBoardNav />
      <div className="invoice-container">
        <div className="invoice-address-container">
          <div>
            <h1>RENTFURLAX</h1>
          </div>
          <div>
            <h2>Shipping Details</h2>
            <address>
              <p>NAME : {customerdata.firstname}</p>
              <p>ADDRESS: {customerdata.address}</p>
              <p>mail to: {customerdata.email}</p>
            </address>
          </div>
        </div>
        <hr></hr>
        <div className="product-container">
          <center>
            <h1>Ordered Products</h1>
          </center>
          {customer_invoices.map((invoice) => (
            <div key={invoice.id}>
              <p>Tenure: {invoice.tenure}</p>
              <p>Amount: {invoice.amount}</p>
              <ul>
                <h1>Ordered Product id's:</h1>
                {invoice.products && invoice.products.length > 0 ? (
                  invoice.products.map((productId) => (
                    <li key={productId}><b><h3>{productId}</h3></b></li>
                  ))
                ) : (
                  <li>No products associated with this invoice</li>
                )}
              </ul>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
