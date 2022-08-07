import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom'
import clientAxios from "../../config/axios";

import Swal from "sweetalert2";

const NewProduct = () => {
    let navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        price: ''
    })

    const [img, setImg] = useState('')

    const newProduct = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const newImg = e => {
        setImg(e.target.files[0])
    }

    const createProduct = async e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('img', img);

        try {
            const res = await clientAxios.post(`/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            Swal.fire(
                'Agregado',
                res.data.msj,
                'success'
            )

            navigate('/products', { replace: true });

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrio un error, intente nuevamente',
            })
        }

    }

    return (
        <Fragment>
            <h2>Crear Productos</h2>

            <form onSubmit={createProduct}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre Producto" name="name" onChange={newProduct} />
                </div>

                <div className="campo">
                    <label>Precio:</label>
                    <input type="number" name="price" min="0.00" step="0.01" placeholder="Precio" onChange={newProduct} />
                </div>

                <div className="campo">
                    <label>Imagen:</label>
                    <input type="file" name="img" onChange={newImg} />
                </div>

                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Agregar Producto" />
                </div>
            </form>
        </Fragment>
    )
}

export default NewProduct