import React from 'react'
import ImageSlider from '../Components/Home/ImageSlider';
import TradingViewTicker from '../Components/Home/TradingViewTicker'
import { Body1 } from '../Components/Home/Body/Body1'
import { Servicios } from '../Components/Home/Body/Servicios'
import { NuestrosProductos } from '../Components/Home/Body/NuestrosProductos'
import { Beneficios } from '../Components/Home/Body/Beneficios'
import { PorqueElegirnos } from '../Components/Home/Body/PorqueElegirnos'
import { Partners } from '../Components/Home/Body/Partners'
import { SobreNosotros } from '../Components/Home/Body/SobreNosotros'
import { Contacto } from '../Components/Home/Body/Contacto'

export const HomePage = () => {
    return (
        <>
            <ImageSlider />

            <TradingViewTicker />

            <Body1></Body1>

            <Servicios></Servicios>

            <NuestrosProductos></NuestrosProductos>

            <Beneficios />

            <PorqueElegirnos />

            <SobreNosotros />

            <Partners />

            <Contacto />
        </>
    )
}
