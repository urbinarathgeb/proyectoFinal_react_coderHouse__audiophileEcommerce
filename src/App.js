import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//COMPONENTES
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";

//ESTILOS
import "./App.css";
import "./custom.scss";
import ItemDetailContainer from "./components/containers/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer />} />
          <Route index path="/categoria/:productCategory" element={<ItemListContainer />} />

          <Route path="/detalle/:productId" element={<ItemDetailContainer />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
