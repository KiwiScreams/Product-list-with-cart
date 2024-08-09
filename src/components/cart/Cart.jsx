import "./Cart.css";
import Product from "../product/Product";
import { useState, useEffect } from "react";
import removeIcon from "../../assets/images/icon-remove-item.svg";
import emptyImage from "../../assets/images/illustration-empty-cart.svg";
const Cart = ({ cart, onQuantityChange, onRemoveProduct }) => {
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
            <div className="cart-items">
              <ul>
                {cart.map((product, index) => (
                  <li key={index}>
                    <div className="cart-info">
                      <p className="text-preset-4">{product.name}</p>
                      <span className="quantity text-preset-4">
                        {product.quantity}x
                      </span>
                      <span className="price text-preset-4">
                        @ ${product.price}
                      </span>
                    </div>
                    <button onClick={() => onRemoveProduct(index)}>
                      
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
