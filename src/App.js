//COMPONENTES
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";

//ESTILOS
import "./App.css";
import "./custom.scss";
import ItemDetailContainer from "./components/containers/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
