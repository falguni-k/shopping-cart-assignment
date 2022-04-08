import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./cart.css";
import CartItem from "./CartItem";

function Cart() {
  const { itemsInCart, totalCount, totalAmount } = useSelector(
    ({ cart }) => cart
  );

  const history = useHistory();

  function startShopping() {
    history.push("/category/all");
  }

  return (
    <div className="cart-container">
      {itemsInCart.length > 0 ? (
        <div className="cart-section">
          <div className="cart-header">
            <p className="cart-header--text">
              <b>My Cart</b> ({totalCount} item)
            </p>
          </div>

          <div className="cart-items">
            {itemsInCart.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>

          <div className="guarantee-card">
            <div className="guarantee-card--img">
              <img src="../static/images/lowest-price.png" alt="" />
            </div>
            <div>
              <p className="info-card--tagline">
                You won't find it cheaper anywhere
              </p>
            </div>
          </div>

          <div className="checkout-section">
            <p className="promo-text">
              Promo code can be applied on payment page
            </p>
            <div className="btn-checkout">
              <p>Proceed to Checkout</p>
              <p>Rs. {totalAmount}</p>
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <div className="no-cart-item">
            <h1>No items in your cart</h1>
            <p className="promo-text">Your favourite item is just a click away!</p>
          </div>

          <span className="start-shopping" onClick={() => startShopping()}>
            Start Shopping
          </span>
        </Fragment>
      )}
    </div>
  );
}

export default Cart;
