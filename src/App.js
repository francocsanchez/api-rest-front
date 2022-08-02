import React, { Fragment } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Customers from "./components/customers/Customers";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";


function App() {
  return (
    <BrowserRouter>
      <Fragment>

        <Header />

        <div class="grid contenedor contenido-principal">

          <Navbar />

          <main class="caja-contenido col-9">
            <Routes>
              <Route exact path="/customers" element={<Customers />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/orders" element={<Orders />} />
            </Routes>
          </main>

        </div>
      </Fragment>
    </BrowserRouter>
  )
}
export default App;