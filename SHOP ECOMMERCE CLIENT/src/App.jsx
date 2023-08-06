
import Product from "./pages/Product";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate,
}  from "react-router-dom";
import Success from "./pages/success";
import { useSelector } from "react-redux";



const App = () => {
 
  const user = useSelector( (state) => state.user.currentUser) ;
  return (
    <Router>
      <Routes>
      <Route path="/" element={  <Home />} />              
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={user? <Navigate replace to="/" /> : <Login />} />
      <Route path="/register" element={user? <Navigate replace to="/" />: <Register />} />
      </Routes>      
    </Router>
  );
    
  
};

export default App;