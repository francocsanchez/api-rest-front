import React, { Fragment, useState, useEffect } from "react";
import clientAxios from "../../config/axios";
import { useNavigate, useParams } from 'react-router-dom';

import Swal from "sweetalert2";

const EditProduct = () => {

    let navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        name: '',
        price: '',
        img: ''
    });

    const [img, setImg] = useState('')

    const getProduct = async () => {
        const data = await clientAxios.get(`/products/${id}`);
        setProduct(data.data)
    }

    useEffect(() => {
        getProduct();
    }, [])

    const updateProduct = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const updateImg = e => {
        setImg(e.target.files[0])
    }

    //! NO SE ESTA ACTUALIZANDO EL PRODCUTO EN LA BASE DATOS
    const editProduct = async e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('img', img);

        try {
            const res = await clientAxios.put(`/products/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            Swal.fire(
                'Actualizado',
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
            <h2>Editar Productos</h2>

            <form onSubmit={editProduct}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder="Nombre Producto"
                        name="name"
                        defaultValue={product.name}
                        onChange={updateProduct} />
                </div>

                <div className="campo">
                    <label>Precio:</label>
                    <input type="number"
                        name="price"
                        min="0.00" step="0.01"
                        placeholder="Precio"
                        defaultValue={product.price}
                        onChange={updateProduct} />
                </div>

                <div className="campo">
                    <label>Imagen:</label>
                    <input type="file" name="img" onChange={updateImg} />
                </div>

                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Editar Producto" />
                </div>
            </form>
        </Fragment>
    )
}

export default EditProduct