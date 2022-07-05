//COMPONENTES
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";

//ESTILOS
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola, Maxi. Este es el CONTAINER con la prop y este texto es el valor del prop" />
    </div>
  );
}

export default App;
