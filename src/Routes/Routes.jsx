import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../Pages/Home/Home.jsx';
import ProductDet from '../Pages/Product/ProductDet.jsx';
import Register from '../Pages/Register/Register copy.jsx';
import Login from '../Pages/Login/Login.jsx';
import Layout from '../Pages/Layout/Layout.jsx';
import Reset from '../Pages/Recover/Reset.jsx';
import Catalog from '../Pages/Home/ProductosVista.jsx';
import About from '../Pages/About/About.jsx';
import Seller from '../Pages/Seller/Seller.jsx';

function PrivateRoute({ element, roles, ...rest }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("rol");

  if (!token || !userRole || !roles.includes(userRole)) {
      return <Navigate to="/login" replace />;
  }

  return <Route {...rest} element={element} />;
}

export default function Routing() {
    return (
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path="products" element={<Catalog/>} />
              <Route path="register" element={<Register/>} />
              <Route path="login" element={<Login/>} />
              <Route path="reset" element={<Reset/>} />
              <Route path="ProductDet/:id" element={<ProductDet/>} />
              <Route path="about" element={<About/>} />
              <Route path='seller' element={<Seller/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      );
}
    

/*
Ejemplo de uso de PrivateRoute:

<Route
  path="products"
  element={
      <PrivateRoute
          element={<Catalog />}
          roles={["admin", "user"]}
      />
  }
/>
*/