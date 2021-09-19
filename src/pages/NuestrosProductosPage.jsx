import React from 'react'
import { Title } from '../Components/elements/Title';
import { Contacto } from '../Components/Home/Body/Contacto';
import { Cards } from './../Components/NuestrosProductos/Cards'

export const NuestrosProductosPage = () => {
    return (
        <div className="mt-5">
            <Title>Nuestros <b>Productos</b></Title>

            <Cards />

            <Contacto />
        </div>
    )
}
