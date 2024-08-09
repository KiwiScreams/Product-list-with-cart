import "./Product.css";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import minus from "../../assets/images/icon-decrement-quantity.svg";
import plus from "../../assets/images/icon-increment-quantity.svg";
import { useContext, useState } from "react";
const Product = ({ data, onAddToCart, onQuantityChange }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    if (Array.isArray(data)) {
      data.forEach((product) => {
        initialQuantities[product.id] = 1;
      });
    } else {
      initialQuantities[data.id] = 1;
    }
    return initialQuantities;
  });

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    onAddToCart(data, quantities[data.id]);
  };

  const handleDecrementQuantity = () => {
    const currentQuantity = quantities[data.id];
    if (currentQuantity > 1) {
      onQuantityChange(data, currentQuantity - 1);
      setQuantities((prevQuantities) => {
        const newQuantities = { ...prevQuantities };
        newQuantities[data.id] = currentQuantity - 1;
        return newQuantities;
      });
    }
  };

  const handleIncrementQuantity = () => {
    const currentQuantity = quantities[data.id];
    onQuantityChange(data, currentQuantity + 1);
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[data.id] = currentQuantity + 1;
      return newQuantities;
    });
  };

  const handleAddToCartAndSetIsAdded = () => {
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
          {isAddedToCart ? (
            <div className="text-preset-4 quantity-btn cart-btn">
              <span className="btn" onClick={handleDecrementQuantity}>
                <img src={minus} alt="Decrement quantity" />
              </span>
              <span className="quantity">{quantities[data.id]}</span>
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
