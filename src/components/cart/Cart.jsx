import "./Cart.css";
import Product from "../product/Product";
import { useState, useEffect } from "react";
import removeIcon from "../../assets/images/icon-remove-item.svg";
import emptyImage from "../../assets/images/illustration-empty-cart.svg";
import carbon from "../../assets/images/icon-carbon-neutral.svg";
import { useTranslation } from "react-i18next";
const Cart = ({ cart, onQuantityChange, onRemoveProduct, quantity }) => {
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      );
      setTotalPrice(total.toFixed(2));
    };
    calculateTotalPrice();
  }, [cart]);

  const handleQuantityChange = (product, quantity) => {
    onQuantityChange(product, quantity);
  };
  return (
    <>
      {/* <section className="cart-section">
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
                        @ ${product.price.toFixed(2)}
                      </span>
                      <span className="price text-preset-4">
                        @ ${(product.price * (quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveProduct(index)}
                      className="remove"
                    ></button>
                  </li>
                ))}
              </ul>
              <p className="total text-preset-4">
                <span>Order Total</span>
                <span className="text-preset-2">
                  $
                  {cart.reduce(
                    (acc, current) => acc + current.price * current.quantity,
                    0
                  )}
                </span>
              </p>
              <div className="carbon">
                <img src={carbon} alt="" />
                <p>
                  This is a <span> carbon-neutral</span> delivery
                </p>
              </div>
              <button className="confirm text-preset-3">Confirm Order</button>
            </div>
          )}
        </div>
      </section> */}
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
                  @ ${product.price.toFixed(2)}
                </span>
                <span className="price text-preset-4">
                  @ ${(product.price * product.quantity).toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => onRemoveProduct(index)}
                className="remove"
              ></button>
            </li>
          ))}
        </ul>
        <p className="total text-preset-4">
          <span>Order Total</span>
          <span className="text-preset-2">
            $
            {cart.reduce(
              (acc, current) => acc + current.price * current.quantity,
              0
            )}
          </span>
        </p>
        <div className="carbon">
          <img src={carbon} alt="" />
          <p>
            This is a <span> carbon-neutral</span> delivery
          </p>
        </div>
        <button className="confirm text-preset-3">Confirm Order</button>
      </div>
    )}
  </div>
</section>
    </>
  );
};

export default Cart;
