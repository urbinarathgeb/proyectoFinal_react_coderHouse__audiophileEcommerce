//REACT COMPONENTS
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//CUSTOM COMPONENTS
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./containers/CartContainer/CartContainer";
import CartContextProvider from "./context/CartContext";

//STYLES
import "./App.css";
import "./custom.scss";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route index path="/categoria/:productCategory" element={<ItemListContainer />} />
            <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
