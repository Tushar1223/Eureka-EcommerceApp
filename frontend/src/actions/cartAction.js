import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  Clear_cart_info
} from "../constants/cartConstants";
import axios from "axios";




// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {

  const { data } = await axios.get(`https://eureka-ecommerceapp.onrender.com/api/v1/product/${id}`);


  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

//delete all cart items after placing order
export const clearFromCart = () => async (dispatch) => {
  dispatch({
    type: Clear_cart_info,
  });

  localStorage.removeItem('cartItems');
  // localStorage.setItem("cartItems",JSON.stringify(null));
};
