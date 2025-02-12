import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/carrinho/Cart.jsx";
import RegisterProduct from "./pages/registerProduct/index.jsx";
import NavBar from "./common/components/navBar/NavBar.jsx";
import { GlobalStyle } from "./common/style/GlobalStyle.js";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route Component={NavBar}>
          <Route Component={Home} path="/" />
          <Route Component={RegisterProduct} path="/regProd" />
          <Route Component={Cart} path="/cart" />
        </Route>
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
