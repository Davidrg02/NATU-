import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home.jsx';
import Product from '../Pages/Product/Product.jsx';
import Register from '../Pages/Register/Register.jsx';
import Login from '../Pages/Login/Login.jsx';
import Layout from '../Pages/Layout/Layout.jsx';
import Reset from '../Pages/Recover/Reset.jsx';
import Catalog from '../Pages/Home/ProductosVista.jsx';
import Vendor from '../Pages/Vendor/Vendor.jsx';
import VendorProduct from '../Pages/Vendor/Products/Products.jsx';
import VendorProfile from '../Pages/Vendor/Products/Profile.jsx'; 
import VendorTransactions from '../Pages/Vendor/Transactions/Transactions.jsx';

export default function Routing() {
    return (
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="products" element={<Catalog/>} />
          <Route path="register" element={<Register/>} />
          <Routes>
            <Route path="vendor" element={<Vendor/>} />
              <Route path="/products" element={<VendorProduct/>} />
              <Route path="/profile" element={<VendorProfile/>} />
              <Route path="/transactions" element={<VendorTransactions/>} />
          </Routes>
          <Route path="login" element={<Login/>} />
          <Route path="reset" element={<Reset/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
    