import "./Product.css";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import minus from "../../assets/images/icon-decrement-quantity.svg";
import plus from "../../assets/images/icon-increment-quantity.svg";
const Product = ({ data }) => {
  return (
    <>
      <div className="product">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${data.image.desktop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-preset-4 add-cart">
            <img src={cartIcon} alt="" />
            Add to Cart
          </div>
          <div className="text-preset-4 quantity-btn">
            <span className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </span>
            <span className="quantity">1</span>
            <span className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <h3 className="text-preset-4 category">{data.category}</h3>
        <h2 className="text-preset-3 name">{data.name}</h2>
        <p className="price text-preset-3">${data.price}</p>
      </div>
    </>
  );
};

export default Product;
