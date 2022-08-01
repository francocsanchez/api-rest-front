import React, { Fragment } from "react";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Fragment>

      <Header />

      <div class="grid contenedor contenido-principal">

        <Navbar />

        <main class="caja-contenido col-9">

        </main>

      </div>
    </Fragment>
  )
}
export default App;