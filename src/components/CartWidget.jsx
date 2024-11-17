import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { cart, calculateTotalItems } = useCart();

  return (
    <div className="nav-item">
      <Link to="/cart" className="nav-link">
        <span>Carrito ({calculateTotalItems()})</span>
      </Link>
    </div>
  );
}

export default CartWidget;
