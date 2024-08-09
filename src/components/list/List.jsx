import { useEffect, useState } from "react";
import Product from "../product/Product";
import "./List.css";
import axios from "axios";
const List = ({ onAddToCart, onQuantityChange }) => {
  const [products, setProducts] = useState([]);

  const fetchProdcuts = async () => {
    try {
      const response = await axios.get("data.json");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProdcuts();
  }, []);
  return (
    <>
      <section className="list-section">
        <h1 className="text-preset-1">Desserts</h1>
        <div className="products-list">
          {products.map((product, index) => (
            <Product
              key={`${product.id}-${index}`}
              data={product}
              onAddToCart={onAddToCart}
              onQuantityChange={onQuantityChange}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default List;
