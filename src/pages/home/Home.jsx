import Cart from "../../components/cart/Cart";
import List from "../../components/list/List";
import { useState } from "react";
import "./Home.css";
import Product from "../../components/product/Product";
const Home = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  const handleRemoveProduct = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  const handleQuantityChange = (product, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };
  return (
    <>
      <section className="home-section">
        <List onAddToCart={handleAddToCart} onQuantityChange={handleQuantityChange}/>
        <Cart
          cart={cart}
          onRemoveProduct={handleRemoveProduct}
          onQuantityChange={handleQuantityChange}
        />
      </section>
    </>
  );
};

export default Home;
