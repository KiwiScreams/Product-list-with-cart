import Cart from "../../components/cart/Cart";
import List from "../../components/list/List";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="home-section">
        <List />
        <Cart />
      </section>
    </>
  );
};

export default Home;
