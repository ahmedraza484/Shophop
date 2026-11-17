import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";

const Cart = () => {
  const { cart, setCart } = useCart();
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0,
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <p className="cart-subtitle">Your selected fashion items</p>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <FaShoppingBag />
          <h2>Your Cart is Empty!</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/shop" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-products">
            {cart.map((item) => (
              <div className="cart-card" key={item._id}>
                <img
                  src={item.img}
                  alt={item.productName}
                  className="cart-img"
                />

                <div className="cart-info">
                  <h3>{item.productName}</h3>
                  <p className="cart-price">
                    Rs. {Number(item.price).toLocaleString("en-PK")}
                  </p>

                  <div className="cart-actions">
                    <div className="quantity-control">
                      <button onClick={() => decreaseQty(item.id)}>
                        <FaMinus />
                      </button>

                      <span>{item.qty}</span>

                      <button onClick={() => increaseQty(item.id)}>
                        <FaPlus />
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  Rs. {(Number(item.price) * item.qty).toLocaleString("en-PK")}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString("en-PK")}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>Rs. {subtotal.toLocaleString("en-PK")}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => alert("Checkout coming soon!")}
            >
              Proceed to Checkout
            </button>

            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
