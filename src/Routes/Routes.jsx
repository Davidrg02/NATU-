import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../Pages/Home/Home.jsx';
import ProductDet from '../Pages/Product/ProductDet.jsx';
import Register from '../Pages/Register/Register copy.jsx';
import Login from '../Pages/Login/Login.jsx';
import Layout from '../Pages/Layout/Layout.jsx';
import Reset from '../Pages/Recover/Reset.jsx';
import Catalog from '../Pages/Home/ProductosVista.jsx';
import About from '../Pages/About/About.jsx';
import Admin from '../Pages/Admin/Admin.jsx';
import VendedorProducts from '../Pages/Vendedor/ProductsPage/ProductsPage.jsx';
import PrivateRoute from '../utils/PrivateRoute.jsx';
import NotFound from "../Pages/NotFound/NotFound.jsx";

export default function Routing() {


  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="productDet/:id" element={<ProductDet />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="reset" element={<Reset />} />
            <Route path="products" element={<Catalog />}>
              <Route path=":category" element={<Catalog />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="admin" element={<Admin />} />
            {/* Rutas protegidas */}
            {/*
            <Route path="admin" element = {<PrivateRoute roles={["Administrador"]} />} >
              <Route path="sellers" element={<Admin />} />
            </Route>
            */}
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
