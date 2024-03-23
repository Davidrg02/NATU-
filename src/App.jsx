import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Product from './Pages/Product/Product.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import Layout from './Pages/Layout/Layout.jsx';

function App() {
  return (
    <BrowserRouter classname="p-3 m-0 border-0 bd-example m-0 border-0">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="product" element={<Product/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
