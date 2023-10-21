// src/components/CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, checkout } from '../redux/actions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleCheckout = () => {
    dispatch(checkout());
    // Display a success message
  };

  return (
    <div>
      <h2>My Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
        </div>
      ))}
      <div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;