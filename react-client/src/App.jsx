import Cart from './pages/Cart';
import Home from './pages/Home'
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import SingleProductPage from './pages/SingleProductPage';
import {BrowserRouter as Router, Route, Link,
Routes} from "react-router-dom"
import Success from './pages/Success';
import { useSelector } from 'react-redux';


const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
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
        <Route path="/success" element={<Success />}>
        </Route>
        </Routes>
    </Router>
  )
};

export default App;