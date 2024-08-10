import "./Product.css";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import minus from "../../assets/images/icon-decrement-quantity.svg";
import plus from "../../assets/images/icon-increment-quantity.svg";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import data from "../../../data.json";
const Product = ({ product, onAddToCart, onQuantityChange, quantity }) => {
  const { id, name, price, category, image, AddtoCart } = product;
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const products = data[language].products;
  const currentProduct = products.find((p) => p.id === id);
  const handleAddToCart = () => {
    setIsAddedToCart(true);
    onAddToCart(currentProduct, localQuantity);
  };

  const handleQuantityChange = (newQuantity) => {
    setLocalQuantity(newQuantity);
    onQuantityChange(currentProduct, newQuantity);
  };

  const handleDecrementQuantity = () => {
    if (localQuantity > 1) {
      handleQuantityChange(localQuantity - 1);
    }
  };

  const handleIncrementQuantity = () => {
    handleQuantityChange(localQuantity + 1);
  };

  const totalPrice = currentProduct.price * localQuantity;

  return (
    <>
      <div className="product">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${currentProduct.image.desktop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {isAddedToCart ? (
            <div className="text-preset-4 quantity-btn cart-btn">
              <span className="btn" onClick={handleDecrementQuantity}>
                <img src={minus} alt="Decrement quantity" />
              </span>
              <span className="quantity">{localQuantity}</span>
              <span className="btn" onClick={handleIncrementQuantity}>
                <img src={plus} alt="Increment quantity" />
              </span>
            </div>
          ) : (
            <div
              className="text-preset-4 add-cart cart-btn"
              onClick={handleAddToCart}
            >
              <img src={cartIcon} alt="Add to cart" />
              {t(currentProduct.AddtoCart)}
            </div>
          )}
        </div>
        <h3 className="text-preset-4 category">{currentProduct.category}</h3>
        <h2 className="text-preset-3 name">{currentProduct.name}</h2>
        <p className="price text-preset-3">${currentProduct.price}</p>
      </div>
    </>
  );
};

export default Product;
