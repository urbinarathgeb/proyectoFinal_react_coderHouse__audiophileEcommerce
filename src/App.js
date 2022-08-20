// REACT COMPONENTS
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// CUSTOM COMPONENTS
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer';
import CartContextProvider from './context/CartContext';

// STYLES
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route
              index
              path='/'
              element={<Home />}
            />
            <Route
              index
              path='/store'
              element={<ItemListContainer />}
            />
            <Route
              index
              path='/category/:productCategory'
              element={<ItemListContainer />}
            />
            <Route
              path='/detail/:productId'
              element={<ItemDetailContainer />}
            />
            <Route
              path='/cart'
              element={<CartContainer />}
            />

            <Route
              path='*'
              element={<Navigate to='/' />}
            />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
