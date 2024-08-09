import { useEffect, useState } from "react";
import Product from "../product/Product";
import "./List.css";
import axios from "axios";
const List = () => {
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
          {Array.isArray(products) &&
            products.map((prod, index) => <Product key={index} data={prod} />)}
        </div>
      </section>
    </>
  );
};

export default List;
