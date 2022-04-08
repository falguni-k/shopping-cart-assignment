import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cart.action";

function CartItem({ product }) {
  console.log("render");
  const { id, quantity, price, name, imageURL } = product;
  const dispatch = useDispatch();

  function removeItem(item) {
    dispatch(removeItemFromCart(item));
  }

  function addItem(item) {
    dispatch(addItemToCart(item));
  }

  return (
    <div className="cart-item-card">
      <div className="item-img">
        <img src={imageURL} alt="product image" />
      </div>
      <div className="item-summary">
        <div className="item-name">
          <p>{name}</p>
        </div>
        <div className="price-summary">
          <button className="btn" onClick={() => removeItem(product)}>
            {" "}
            -{" "}
          </button>
          <span className="item-quantity"> {quantity} </span>
          <button className="btn" onClick={() => addItem(product)}>
            {" "}
            +{" "}
          </button>
          <span> x </span>
          <span className="item-price"> Rs.{price} </span>
        </div>
      </div>

      <div className="item-price-right">
        <span>Rs.{price * quantity}</span>
      </div>
    </div>
  );
}

export default CartItem;
