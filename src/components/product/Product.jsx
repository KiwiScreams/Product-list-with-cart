import "./Product.css";
const Product = ({ data }) => {
  return (
    <>
      <div className="product">
        <h2>{data.name}</h2>
        <p>Price: ${data.price}</p>
        <img
          src={data.image.desktop}
          alt={data.name}
        />{" "}
      </div>
    </>
  );
};

export default Product;
