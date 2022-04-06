import React, { useEffect, useState } from "react"
import { FooterBeneficios } from "../Components/footerBeneficios"
import { Servicios } from "../Components/Home/Body/Servicios"
import {
  AdministracionDeCarteras,
  RentaFija,
  RentaVariable,
  Liquidez,
  AssetManagement,
  Fondos,
} from "./../Components/Servicios"
import { Container } from "react-bootstrap"

const servicios = {
  administracionDeCarteras: "administracion-de-carteras",
  assetManagement: "asset-management",
  rentaFija: "renta-fija",
  rentaVariable: "renta-variable",
  liquidez: "liquidez",
  fondos: "fondos",
}

const renderBody = (param) => {
  if (param === undefined) return <Servicios />
  switch (param) {
    case servicios.administracionDeCarteras:
      return <AdministracionDeCarteras />
    case servicios.rentaFija:
      return <RentaFija />
    case servicios.rentaVariable:
      return <RentaVariable />
    case servicios.liquidez:
      return <Liquidez />
    case servicios.assetManagement:
      return <AssetManagement />
    case servicios.fondos:
      return <Fondos />
    default:
      return <></>
  }
}

export const ServiciosPage = (props) => {
  const [servicio, setServicio] = useState()

  useEffect(() => {
    setServicio(props.match.params.servicio?.toLowerCase())
  }, [props.match.params.servicio])

  return (
    <>
      <Container>{renderBody(servicio)}</Container>
      <FooterBeneficios />
    </>
  )
}
