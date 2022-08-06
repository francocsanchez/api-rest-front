import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import clientAxios from "../../config/axios";

import Swal from "sweetalert2";

const Customer = ({ customer }) => {

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
                clientAxios.delete(`/customers/${_id}`)
                
                Swal.fire(
                    'Eliminado!',
                    'El cliente fue eliminado correctamente',
                    'success'
                )
            }
        })
    }

    return (
        <Fragment>
            <li className="cliente">
                <div className="info-cliente">
                    <p className="nombre">{customer.lastname}, {customer.name}</p>
                    <p className="empresa">{customer.company}</p>
                    <p>{customer.email}</p>
                    <p>Tel: {customer.phone}</p>
                </div>
                <div className="acciones">
                    <Link to={`/customers/edit/${customer._id}`} className="btn btn-azul">
                        <i className="fas fa-pen-alt"></i>
                        Editar Cliente
                    </Link>
                    <button type="button" className="btn btn-rojo btn-eliminar" onClick={() => deleteCustomer(customer._id)}>
                        <i className="fas fa-times"></i>
                        Eliminar Cliente
                    </button>
                </div>
            </li>
        </Fragment>
    )
}

export default Customer