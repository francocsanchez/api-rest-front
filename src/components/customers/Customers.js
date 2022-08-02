import React, { useEffect, useState, Fragment } from "react";
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
    }, [])

    return (
        <Fragment>
            <h1>Clientes</h1>

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