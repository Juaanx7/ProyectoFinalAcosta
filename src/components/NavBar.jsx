import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const { calculateTotalItems } = useCart();
  const totalQuantity = calculateTotalItems();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Istorecba
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/smartphones" className="nav-link">
                Celulares
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/laptops" className="nav-link">
                Notebooks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/mobile-accessories" className="nav-link">
                Accesorios
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link cart-icon">
                <FaShoppingCart size={22} />
                {totalQuantity > 0 && (
                  <span className="cart-count">{totalQuantity}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;