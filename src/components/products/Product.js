import React, { Fragment } from "react";
import clientAxios from "../../config/axios";
import { Link } from 'react-router-dom';

import Swal from "sweetalert2";

const Product = ({ product }) => {

    const deleteCustomer = _id => {
        Swal.fire({
            title: 'Esta seguro?',
            text: "Los datos no se podran recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                clientAxios.delete(`/products/${_id}`)

                Swal.fire(
                    'Eliminado!',
                    'El producto fue eliminado correctamente',
                    'success'
                )
            }
        })
    }

    return (
        <Fragment>
            <li className="producto">
                <div className="info-producto">
                    <p className="nombre">{product.name}</p>
                    <p className="precio">$ {product.price}</p>
                    {product.img ? (<img src={`http://localhost:3001/${product.img}`} alt="Imagen" />) : null}
                </div>
                <div className="acciones">
                    <Link to={`/products/edit/${product._id}`} className="btn btn-azul">
                        <i className="fas fa-pen-alt"></i>
                        Editar Producto
                    </Link>

                    <button type="button" className="btn btn-rojo btn-eliminar" onClick={() => deleteCustomer(product._id)}>
                        <i className="fas fa-times"></i>
                        Eliminar Cliente
                    </button>
                </div>
            </li>
        </Fragment>
    )
}

export default Product