import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from './actions';

const initialProducts = []; // Initial products state
const initialCart = [];

export const productsReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.map((product) =>
        product.id === action.product.id
          ? { ...product, addedToCart: true }
          : product
      );
    case REMOVE_FROM_CART:
      return state.map((product) =>
        product.id === action.productId
          ? { ...product, addedToCart: false }
          : product
      );
    default:
      return state;
  }
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.find((item) => item.id === action.product.id)) {
        return state;
      }
      return [...state, action.product];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.productId);
    case CHECKOUT:
      return [];
    default:
      return state;
  }
};