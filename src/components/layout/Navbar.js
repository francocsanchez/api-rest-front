import React from "react";

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">
                <Link to={"/customers"} className="clientes">Clientes</Link>
                <Link to={"/products"} className="productos">Productos</Link>
                <Link to={"/orders"} className="pedidos">Pedidos</Link>
            </nav>
        </aside>
    )
}

export default Navbar