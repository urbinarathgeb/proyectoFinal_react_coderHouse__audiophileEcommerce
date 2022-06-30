import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <h1>Hola, Maxi!</h1>
        <p>
          Este será un e-commerce de artículos de audio llamado <img src={logo} alt="logo" />
        </p>
      </header>
    </div>
  );
}

export default App;
