import "./Cart.css";
import emptyImage from "../../assets/images/illustration-empty-cart.svg";
const Cart = () => {
  return (
    <>
      <section className="cart-section">
        <h2 className="text-preset-2">Your Cart (0)</h2>
        <div className="cart-content">
          <img src={emptyImage} alt="" />
          <p className="text-preset-4">Your added items will appear here</p>
        </div>
      </section>
    </>
  );
};

export default Cart;
