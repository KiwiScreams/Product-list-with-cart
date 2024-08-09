import "./Cart.css";
import Product from "../product/Product";
import { useState, useEffect } from "react";
import emptyImage from "../../assets/images/illustration-empty-cart.svg";
const Cart = ({ cart }) => {
  return (
    <>
      <section className="cart-section">
        <h2 className="text-preset-2">Your Cart ({cart.length})</h2>
        <div className="cart-content">
          {cart.length === 0 ? (
            <div>
              <img src={emptyImage} alt="" />
              <p className="text-preset-4">Your added items will appear here</p>
            </div>
          ) : (
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
