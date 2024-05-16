import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../Pages/Home/Home.jsx';
import ProductDet from '../Pages/Product/ProductDet.jsx';
import Register from '../Pages/Register/Register.jsx';
import RegisterBuyer from "../Pages/Register/Buyer/RegisterBuyer.jsx";
import RegisterSeller from "../Pages/Register/Seller/RegisterSeller.jsx";
import Login from '../Pages/Login/Login.jsx';
import Layout from '../Pages/Layout/Layout.jsx';
import Reset from '../Pages/Recover/Reset.jsx';
import Catalog from '../Pages/Home/ProductosVista.jsx';
import About from '../Pages/About/About.jsx';
import Admin from '../Pages/Admin/Admin.jsx';
import VendedorProducts from '../Pages/Vendedor/ProductsPage/ProductsPage.jsx';
import PrivateRoute from '../utils/PrivateRoute.jsx';
import NotFound from "../Pages/NotFound/NotFound.jsx";
import VistaCarrito from "../Pages/VistaCarrito/VistaCarrito.jsx";
import Comprador from "../Pages/Perfiles/Comprador.jsx";
import Vendedor from "../Pages/Perfiles/Vendedor.jsx";

export default function Routing() {


  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="productDet/:id" element={<ProductDet />} />
            <Route path="register" element={<Register />} />
            <Route path="register-buyer" element={<RegisterBuyer />} />
            <Route path="register-seller" element={<RegisterSeller />} />
            <Route path="login" element={<Login />} />
            <Route path="reset" element={<Reset />} />
            <Route path="products" element={<Catalog />}>
              <Route path=":category" element={<Catalog />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="admin" element={<Admin />} />
            <Route path="cart" element={<VistaCarrito />} />
            <Route path="comprador" element={<Comprador />} />
            <Route path="vendedor" element={<Vendedor />} />
            {/* Rutas protegidas */}
            <Route path="seller" element = {<PrivateRoute roles={["Vendedor"]} />}>
              <Route path="my-products" element={<VendedorProducts />} exact/>
            </Route>
            {/* Ruta no encontrada */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
