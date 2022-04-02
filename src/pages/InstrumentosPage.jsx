import React, { useEffect, useState } from "react"
import { Typography, Button } from "@material-ui/core"
import { Container, Row, Col } from "react-bootstrap"
import instrumentosPageMock from "./../__mocks__/instrumentosPages"
import { Link } from "react-router-dom"
import { FooterBeneficios } from "../Components/footerBeneficios"
import acciones from "../images/instrumentos/acciones.jpg"
import bonos from "../images/instrumentos/bonos.jpg"
import cauciones from "../images/instrumentos/cauciones.jpg"
import cedears from "../images/instrumentos/cedears.jpg"
import chpd from "../images/instrumentos/chpd.jpg"
import fci from "../images/instrumentos/fci.jpg"
import letras from "../images/instrumentos/letras.jpg"
import pagare_bursatil from "../images/instrumentos/pagare_bursatil.jpg"

export const InstrumentosPage = (props) => {
  const [instrumento, setInstrumento] = useState({})

  useEffect(() => {
    setInstrumento(
      instrumentosPageMock.find(
        (x) => x.url === props.match.params.descripcion.toLowerCase()
      )
    )
  }, [])

  const renderImage = (param) => {
    switch (param) {
      case "cauciones":
        return <img src={cauciones} alt="" className="w-100" />
      case "chpd":
        return <img src={chpd} alt="" className="w-100" />
      case "letras":
        return <img src={letras} alt="" className="w-100" />
      case "bonos":
        return <img src={bonos} alt="" className="w-100" />
      case "acciones":
        return <img src={acciones} alt="" className="w-100" />
      case "cedears":
        return <img src={cedears} alt="" className="w-100" />
      case "fci":
        return <img src={fci} alt="" className="w-100" />
      case "pagare_bursatil":
        return <img src={pagare_bursatil} alt="" className="w-100" />
      default:
        return <></>
    }
  }

  return (
    <div className="mt-5">
      <Container className="pt-5">
        <Row>
          <Col>
            <Typography>
              <Link to={"/nuestrosproductos"}>
                <b>Productos</b>
              </Link>
              : Instrumentos de Inversión{" "}
            </Typography>
          </Col>
        </Row>
      </Container>
      <Container className="mt-2 mb-5">
        <Row>
          <Col className="my-auto" xs={12} sm={6}>
            <Typography variant="h4" className="card-title-1" paragraph={true}>
              {instrumento.title}
            </Typography>
            <Typography align="justify">{instrumento.body}</Typography>
          </Col>
          <Col className="my-auto pt-2" xs={12} sm={6}>
            {renderImage(instrumento.link)}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <Link to="/contacto">
              <Button className="btn-deal">Contactenos</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <FooterBeneficios />
    </div>
  )
}
