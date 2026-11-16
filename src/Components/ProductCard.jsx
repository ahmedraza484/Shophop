import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="box-content">
        <img src={product.img} alt="product1" />
        <div className="desc">
          <span>{product.brandName}</span>
          <h5>{product.productName}</h5>
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <h4>$ {product.price}</h4>
        </div>
        <div className="cart-icon">
          <MdOutlineShoppingCart />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
