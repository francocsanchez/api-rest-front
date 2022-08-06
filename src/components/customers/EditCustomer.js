import React, { Fragment, useEffect, useState } from "react";
import clientAxios from "../../config/axios";
import { useNavigate, useParams } from 'react-router-dom';

import Swal from "sweetalert2";

const EditCustomer = () => {

    let navigate = useNavigate();

    const { id } = useParams();

    const [customer, saveCustomer] = useState({
        name: '',
        lastname: '',
        company: '',
        email: '',
        phone: ''
    });

    const getCustomer = async () => {
        const data = await clientAxios.get(`/customers/${id}`);
        saveCustomer(data.data)
    }

    useEffect(() => {
        getCustomer();
    }, [])

    const validationForm = () => {

        const { name, lastname, company, email, phone } = customer

        let pass = !name.length || !lastname.length || !company.length || !email.length || !phone.length

        return pass;

    }

    const updateCustomer = e => {
        saveCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })

        console.log(customer)
    }

    const putCustomer = e => {
        e.preventDefault();

        clientAxios.put(`/customers/${id}`, customer)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire(
                        'Actualizado',
                        `Cliente ${res.data.lastname}, ${res.data.name} actualizado correctamente`,
                        'success'
                    )
                    navigate('/customers', { replace: true });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ocurrio un error actualizando',
                    })
                }
            });

    }

    return (
        <Fragment>
            <h2>#{customer._id}</h2>
            <form onSubmit={putCustomer}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre Cliente"
                        name="name"
                        value={customer.name}
                        onChange={updateCustomer}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input
                        type="text"
                        placeholder="Apellido Cliente"
                        name="lastname"
                        value={customer.lastname}
                        onChange={updateCustomer}
                    />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input
                        type="text"
                        placeholder="Empresa Cliente"
                        name="company"
                        value={customer.company}
                        onChange={updateCustomer}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email Cliente"
                        name="email"
                        value={customer.email}
                        onChange={updateCustomer}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        placeholder="Teléfono Cliente"
                        name="phone"
                        value={customer.phone}
                        onChange={updateCustomer}
                    />
                </div>

                <div className="enviar">
                    <input
                        type="submit"
                        className="btn btn-azul"
                        value="Actualizar Cliente"
                        disabled={validationForm()}
                    />
                </div>

            </form>
        </Fragment>
    )
}

export default EditCustomer;