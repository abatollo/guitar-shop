import MainPage from '../main-page/main-page';
import CartPage from '../cart-page/cart-page';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
