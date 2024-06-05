import Cart from './pages/Cart';
import Home from './pages/Home'
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import SingleProductPage from './pages/SingleProductPage';
import {BrowserRouter as Router, Route, Link,
Routes, Navigate} from "react-router-dom"


const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}>
        </Route>
        <Route path="/products" element={<ProductPage />}>
        </Route>
        <Route path="/products/:category" element={<ProductPage />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/product/:id" element={<SingleProductPage />}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
        </Routes>
    </Router>
  )
};

export default App;