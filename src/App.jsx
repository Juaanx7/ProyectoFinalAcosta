import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroCarousel from './assets/HeroCarousel';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <HeroCarousel />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/:id" element={<OrderConfirmation />} />
          <Route path="/checkout" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;