import { useEffect, useState } from "react";
import Product from "../product/Product";
import "./List.css";
const List = () => {
  const [products, setProducts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("data.json");
      const json = await response.json();
      console.log(json);
      setProducts(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
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
