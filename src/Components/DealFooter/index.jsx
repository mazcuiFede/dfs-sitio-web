import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Typography, Button, Divider } from "@material-ui/core"
import logo from "./../../images/logo.png"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"
import { Link } from "react-router-dom"

export const DealFooter = () => {
  return (
    <>
      <Container fluid className="deal-footer">
        <Row
          className="pt-5 pb-5 pt-5 text-center"
          style={{ backgroundColor: "#0C64A1" }}
        >
          <Col className="my-auto">
            <Typography className="title-2">
              Si aún no eres cliente abra su cuenta de inversión{" "}
              <Link to="https://aperturadecuenta.dealfs.com.ar/">
                {" "}
                <Button className="btn-deal ml-3">Abrir cuenta</Button>
              </Link>
            </Typography>
          </Col>
        </Row>
        <Container>
          <Row className="mt-5 pb-5">
            <Col xs={12} sm={3}>
              <img src={logo} alt="logo" className="mb-3" />
              <Typography>Carlos Pellegrini 989, Piso 10. CABA 1009</Typography>
              <Typography paragraph={true}>
                ABS, Buenos Aires, Argentina
              </Typography>
            </Col>
            <Col xs={12} sm={3}>
              <Typography paragraph={true}>Productos</Typography>
              <ul>
                <li>
                  <Link to="/servicios/asset-management">Asset Management</Link>
                </li>
                {/* <li>Brokerage</li> */}
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                  <Link to="/servicios/renta-fija">DFS Renta Fija Pesos</Link>
                </li>
                <li>
                  <Link to="instrumentos/fci">FCI abierto pymes</Link>
                </li>
                {/* <li>Hechos Relevantes</li> */}
              </ul>
            </Col>

            <Col xs={12} sm={3}>
              <Typography paragraph={true}>Páginas</Typography>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/servicios/asset-management">Servicios</Link>
                </li>
                <li>
                  <Link to="/nuestrosproductos">Productos</Link>
                </li>
                <li>
                  <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
              </ul>
            </Col>

            <Col xs={12} sm={3}>
              <Typography paragraph={true}>Contacto</Typography>
              <ul>
                <li>+54 11 5275 6390</li>
                <li>
                  <Link to="/contacto">contacto@dealfs.com.ar</Link>
                </li>
              </ul>
              <Divider />
              <Typography paragraph={true}>Seguinos en:</Typography>
              <a href="facebook.com">
                <FacebookIcon />
              </a>
              <a href="facebook.com">
                <TwitterIcon />
              </a>
              <a href="facebook.com">
                <InstagramIcon />
              </a>
              <a href="facebook.com">
                <YouTubeIcon />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}
