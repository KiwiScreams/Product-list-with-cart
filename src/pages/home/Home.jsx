import Cart from "../../components/cart/Cart";
import List from "../../components/list/List";
import { useState } from "react";
import "./Home.css";
import Product from "../../components/product/Product";
const Home = () => {
  const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
      setCart([...cart, product]);
    };
    const handleRemoveProduct = (index) => {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    };
  return (
    <>
      <section className="home-section">
        <List onAddToCart={handleAddToCart} />
        <Cart cart={cart} onRemoveProduct={handleRemoveProduct} />
      </section>
    </>
  );
};

export default Home;
