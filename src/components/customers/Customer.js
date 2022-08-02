import React, { Fragment } from "react";

const Customer = ({customer}) => {
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
                    <a href="#" className="btn btn-azul">
                        <i className="fas fa-pen-alt"></i>
                        Editar Cliente
                    </a>
                    <button type="button" className="btn btn-rojo btn-eliminar">
                        <i className="fas fa-times"></i>
                        Eliminar Cliente
                    </button>
                </div>
            </li>
        </Fragment>
    )
}

export default Customer