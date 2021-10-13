import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FooterBeneficios } from '../Components/footerBeneficios'
import { AdministracionDeCarteras, RentaFija, RentaVariable, Liquidez } from './../Components/Servicios'

const servicios = {
    administracionDeCarteras: 'administracion-de-carteras',
    rentaFija: 'renta-fija',
    rentaVariable: 'renta-variable',
    liquidez: 'liquidez'

}

const renderBody = param => {
  switch(param) {
    case servicios.administracionDeCarteras:
      return <AdministracionDeCarteras />;
    case servicios.rentaFija:
      return <RentaFija />;
    case servicios.rentaVariable:
      return <RentaVariable />;
    case servicios.liquidez:
      return <Liquidez />;
    default:
      return <></>;
  }
}

export const ServiciosPage = props => {
    const [servicio, setServicio] = useState()

    useEffect(() => {
        setServicio(props.match.params.servicio.toLowerCase())

    }, [])

    return (
        <>
        <Container>
            { renderBody(servicio) }
        </Container>
        <FooterBeneficios />
            
        </>
    )
}
