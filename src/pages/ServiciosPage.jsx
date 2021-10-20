import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FooterBeneficios } from '../Components/footerBeneficios'
import { AdministracionDeCarteras, RentaFija, RentaVariable, Liquidez, AssetManagement, Fondos } from './../Components/Servicios'

const servicios = {
    administracionDeCarteras: 'administracion-de-carteras',
    assetManagement: 'asset-management',
    rentaFija: 'renta-fija',
    rentaVariable: 'renta-variable',
    liquidez: 'liquidez',
    fondos: 'fondos'

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
    case servicios.assetManagement:
      return <AssetManagement />;
    case servicios.fondos:
      return <Fondos />;
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
