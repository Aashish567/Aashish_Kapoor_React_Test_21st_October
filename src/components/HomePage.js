// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import axios from 'axios';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
    });
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <img src={product.image} alt={product.title} />
          {product.addedToCart ? (
            <button disabled>Added to Cart</button>
          ) : (
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};
