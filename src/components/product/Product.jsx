import "./Product.css";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import minus from "../../assets/images/icon-decrement-quantity.svg";
import plus from "../../assets/images/icon-increment-quantity.svg";
import { useContext, useState } from "react";
const Product = ({ data, onAddToCart, onQuantityChange }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setInCart(true);
    onAddToCart(data, quantity);
  };
  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(data, quantity - 1);
      setQuantity(quantity - 1);
    }
  };
  const handleIncrementQuantity = () => {
    onQuantityChange(data, quantity + 1);
    setQuantity(quantity + 1);
  };
  const handleAddToCartAndSetIsAdded = () => {
    setQuantity(1);
    handleAddToCart();
    setIsAddedToCart(true);
  };
  return (
    <>
      <div className="product">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${data?.image.desktop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {inCart ? (
            <div className="text-preset-4 quantity-btn cart-btn">
              <span className="btn" onClick={handleDecrementQuantity}>
                <img src={minus} alt="Decrement quantity" />
              </span>
              <span className="quantity">{quantity}</span>
              <span className="btn" onClick={handleIncrementQuantity}>
                <img src={plus} alt="Increment quantity" />
              </span>
            </div>
          ) : (
            <div
              className="text-preset-4 add-cart cart-btn"
              onClick={handleAddToCartAndSetIsAdded}
            >
              <img src={cartIcon} alt="Add to cart" />
              Add to Cart
            </div>
          )}
        </div>
        <h3 className="text-preset-4 category">{data.category}</h3>
        <h2 className="text-preset-3 name">{data.name}</h2>
        <p className="price text-preset-3">${data.price}</p>
      </div>
    </>
  );
};

export default Product;
