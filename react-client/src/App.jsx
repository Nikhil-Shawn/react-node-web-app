import Cart from './pages/Cart';
import Home from './pages/Home'
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import SingleProductPage from './pages/SingleProductPage';
import {BrowserRouter as Router, Route, Link,
Routes, redirect} from "react-router-dom"


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}>
        </Route>
        <Route path="/products" element={<ProductPage />}>
        </Route>
        <Route path="/login" element={user ? <redirect to="/"/> : <Login />}>
        </Route>
        <Route path="/register" element={user ? <redirect to="/"/> : <Register />}>
        </Route>
        <Route path="/product:id" element={<SingleProductPage />}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
        </Routes>
    </Router>
  )
};

export default App;