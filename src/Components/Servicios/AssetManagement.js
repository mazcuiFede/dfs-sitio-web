import React from "react"
import { Typography } from "@material-ui/core"
import { Container, Row, Col } from "react-bootstrap"
import { SimpleCard } from "../elements"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import ViewModuleIcon from "@mui/icons-material/ViewModule"

export default function AssetManagement() {
  return (
    <div>
      <Container className="mb-5 pt-3 pb-5">
        <Typography paragraph="true">
          <b>Servicios</b>
        </Typography>
        <Typography paragraph="true" className="blue-title">
          Asset Management
        </Typography>
        <Typography paragraph="true">
          Seleccionamos y gestionamos las mejores alternativas de inversión para
          obtener los retornos esperados acorde a sus objetivos e intereses.
        </Typography>
        <Row className="mt-4 pt-4">
          <Col>
            <SimpleCard link="/servicios/administracion-de-carteras">
              <Typography variant="h5">
                <ViewModuleIcon color={"info"} fontSize={"large"} />{" "}
                Administración de Carteras
                <ArrowForwardIosSharpIcon className="float-right" />
              </Typography>
            </SimpleCard>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <SimpleCard link="/servicios/fondos">
              <Typography variant="h5">
                <ViewModuleIcon color={"info"} fontSize={"large"} /> Familia de
                Fondos Comunes de Inversión
                <ArrowForwardIosSharpIcon className="float-right" />
              </Typography>
            </SimpleCard>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
