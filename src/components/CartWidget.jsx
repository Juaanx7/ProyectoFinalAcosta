import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { cart, calculateTotalItems } = useCart();

  return (
    <div className="nav-item">
      
    </div>
  );
}

export default CartWidget;
