import React, { Fragment, useState } from "react";
import clientAxios from "../../config/axios";

const NewCustomer = () => {

    const [customer, saveCustomer] = useState({
        name: '',
        lastname: '',
        company: '',
        email: '',
        phone: ''
    });

    const newCustomer = e => {
        saveCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const validationForm = () => {

        const { name, lastname, company, email, phone } = customer

        let pass = !name.length || !lastname.length || !company.length || !email.length || !phone.length

        return pass;

    }

    const createCustomer = e => {
        e.preventDefault();

        clientAxios.post('/customers', customer)
            .then(res => {
                console.log(res);
            });
    }

    return (
        <Fragment>
            <h2>Nuevo Cliente</h2>
            <form onSubmit={createCustomer}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre Cliente"
                        name="name"
                        onChange={newCustomer}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input
                        type="text"
                        placeholder="Apellido Cliente"
                        name="lastname"
                        onChange={newCustomer}
                    />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input
                        type="text"
                        placeholder="Empresa Cliente"
                        name="company"
                        onChange={newCustomer}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email Cliente"
                        name="email"
                        onChange={newCustomer}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input
                        type="text"
                        placeholder="Teléfono Cliente"
                        name="phone"
                        onChange={newCustomer}
                    />
                </div>

                <div className="enviar">
                    <input
                        type="submit"
                        className="btn btn-azul"
                        value="Agregar Cliente"
                        disabled={validationForm()}
                    />
                </div>

            </form>
        </Fragment>
    )
}

export default NewCustomer;