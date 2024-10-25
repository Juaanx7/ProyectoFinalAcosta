import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const CartWidget = () => {
  const cartCount = 5;
  return (
    <div className="d-flex align-items-center position-relative">
      <FaShoppingCart className="text-dark fs-4" />
      <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
        {cartCount}
      </span>
    </div>
  );
};

export default CartWidget;
