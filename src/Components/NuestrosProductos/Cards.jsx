import React from "react"
import Typography from "@mui/material/Typography"
import { Container, Row, Col } from "react-bootstrap"
import { Button } from "@material-ui/core"
import ViewModuleIcon from "@material-ui/icons/ViewModule"
import { SimpleCard } from "./../elements"
import { Link } from "react-router-dom"
import instrumentosMock from "../../__mocks__/instrumentos"
import familiaDeFondosMock from "../../__mocks__/familiaDeFondos"

export const Cards = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SimpleCard>
            <Typography variant="h5">
              <ViewModuleIcon /> Instrumentos de Inversión
            </Typography>
          </SimpleCard>
        </Col>
      </Row>
      <Row>
        {instrumentosMock.map((x) => (
          <Col xs={12} sm={4} className="mt-5 mb-4">
            <SimpleCard link={x.link}>
              <Typography paragraph={true} className="card-body">
                <Typography className="card-title-1" paragraph="true">
                  {x.title}
                </Typography>
                {x.body}
                <br />
                <Button variant="outlined" className="mt-3">
                  Más Info
                </Button>
              </Typography>
            </SimpleCard>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <SimpleCard>
            <Typography variant="h5">
              <ViewModuleIcon /> Emisiones Primarias
            </Typography>
          </SimpleCard>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={4} className="mt-5 mb-5">
          <SimpleCard>
            <Typography paragraph={true} className="card-title-1">
              Emisiones Primarias
            </Typography>
            <Typography paragraph={true} className="card-body">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.{" "}
            </Typography>
            <Link to={"/contacto"}>
              <Button variant="outlined">Más Info</Button>
            </Link>
          </SimpleCard>
        </Col>
      </Row>

      <Row className="mt-5 mb-4">
        <Col>
          <SimpleCard color="blue">
            <Typography variant="h5">
              <ViewModuleIcon /> Familia de Fondos que usted puede elegir.
            </Typography>
          </SimpleCard>
        </Col>
      </Row>
      <Row>
        {familiaDeFondosMock.map((x) => (
          <Col xs={12} sm={4} className="mt-5 mb-2 pb-4 my-auto">
            <SimpleCard color="blue" className="text-center">
              <Typography className="card-title-1" paragraph={true}>
                {x.title}
              </Typography>
              {x.body}
              <br />
              <br />
              <Link to={x.link}>
                <Button variant="outlined">Más Info</Button>
              </Link>
            </SimpleCard>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
