import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import clientAxios from "../../config/axios";

import Product from './Product'

const Products = () => {

    const [products, saveProducts] = useState([]);

    const getProducts = async () => {
        const data = await clientAxios.get('/products');
        saveProducts(data.data)
    }

    useEffect(() => {
        getProducts();
    }, [products]) // If change the state, reload function.

    return (
        <Fragment>
            <h2>Productos</h2>

            <Link to={"/products/create"} className="btn btn-verde nvo-cliente"> <i className="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>

            <ul className="listado-productos">
                {
                    products.map(product => {
                        return <Product key={product._id} product={product} />
                    })
                }
            </ul>
        </Fragment>
    )
}

export default Products