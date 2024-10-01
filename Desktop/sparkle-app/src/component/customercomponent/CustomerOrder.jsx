import React, { useState } from 'react';
import './OrderForm.css'; 

const OrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderDetails, setOrderDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Order submitted:', { name, email, orderDetails });
  
    setName('');
    setEmail('');
    setOrderDetails('');
  };

  return (
    <div className="order-form-container">
      <h2>Send Your Laundry Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderDetails">Order Details:</label>
          <textarea
            id="orderDetails"
            value={orderDetails}
            onChange={(e) => setOrderDetails(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
