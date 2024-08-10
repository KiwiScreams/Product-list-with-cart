import { useEffect, useState } from "react";
import Product from "../product/Product";
import "./List.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
const List = ({ onAddToCart, onQuantityChange }) => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const fetchProdcuts = async () => {
    try {
      const response = await axios.get("data.json");
      const languageProducts = response.data[language].products; // Get the products array for the current language
      setProducts(languageProducts);
      setQuantities(
        languageProducts.reduce(
          (acc, product) => ({ ...acc, [product.id]: 1 }),
          {}
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProdcuts();
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
    onQuantityChange(productId, newQuantity);
  };
  return (
    <>
      <section className="list-section">
        <h1 className="text-preset-1">Desserts</h1>
        <div className="products-list">
          {products.map((product, index) => (
            <Product
              key={`${product.id}-${index}`}
              product={product}
              onAddToCart={onAddToCart}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(product.id, newQuantity)
              }
              quantity={quantities[product.id]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default List;
