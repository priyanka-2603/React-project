import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout"; 
import Electronics from "./electronics";
import Product from "./product";
import Signin from "./signin";
import Signup from "./signup";
import ProductDetails from "./productdetails";
import Jewelery from "./jewelery";
import Mensclothing from "./mensclothing";
import Productscard from "./productcard";
import Womensclothing from "./womensclothing";

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Product />} />
          
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/men'sclothing" element={<Mensclothing />} />
          <Route path="/women'sclothing" element={<Womensclothing/>} />
          
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Productscard/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteConfig;
