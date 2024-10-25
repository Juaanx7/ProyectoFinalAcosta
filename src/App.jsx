import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Asegúrate de importar el bundle para incluir Popper.js

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
