import Cart from "../../components/cart/Cart";
import List from "../../components/list/List";
import { useState } from "react";
import "./Home.css";
import Product from "../../components/product/Product";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // const handleAddToCart = (product) => {
  //   setCart([...cart, product]);
  // };
  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };
  const handleRemoveProduct = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    setCart(cart.filter((item, i) => i !== index));
    setQuantity(0);
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
        <List
          onAddToCart={handleAddToCart}
          onQuantityChange={handleQuantityChange}
        />
        <Cart
          cart={cart}
          onQuantityChange={handleQuantityChange}
          onRemoveProduct={handleRemoveProduct}
        />
      </section>
    </>
  );
};

export default Home;
