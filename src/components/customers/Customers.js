import React, { useEffect, useState, Fragment } from "react";
import { Link } from 'react-router-dom'
import clientAxios from "../../config/axios";

import Customer from "./Customer";

const Customers = () => {

    const [customers, saveCustomers] = useState([]);

    const getCustomers = async () => {
        const data = await clientAxios.get('/customers');
        saveCustomers(data.data)
    }

    useEffect(() => {
        getCustomers();
    }, [customers]) // If change the state, reload function.

    return (
        <Fragment>
            <h2>Clientes</h2>

            <Link to={"/customers/create"} className="btn btn-verde nvo-cliente"> 
            <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>

            <ul className="listado-clientes">
                {
                    customers.map(customer => {
                        return <Customer key={customer._id} customer={customer} />
                    })
                }

            </ul>
        </Fragment>
    )
}

export default Customers