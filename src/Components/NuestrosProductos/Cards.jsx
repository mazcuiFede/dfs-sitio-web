import React from "react"
import Typography from "@mui/material/Typography"
import { Container, Row, Col } from "react-bootstrap"
import Button from "@mui/material/Button"
import ViewModuleIcon from "@material-ui/icons/ViewModule"
import { SimpleCard } from "./../elements"
import { Link } from "react-router-dom"
import instrumentosMock from "../../__mocks__/instrumentos"
import familiaDeFondosMock from "../../__mocks__/familiaDeFondos"

export const Cards = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <SimpleCard>
            <Typography variant="h5">
              <ViewModuleIcon fontSize={"large"} style={{ color: "#0C64A1" }} />{" "}
              Instrumentos de Inversión
            </Typography>
          </SimpleCard>
        </Col>
      </Row>
      <Row>
        {instrumentosMock.map((x) => (
          <Col xs={12} sm={4} className="mt-4 mb-4">
            <SimpleCard link={x.link} height={315}>
              <Typography paragraph={true} className="card-body">
                <Typography className="card-title-1" paragraph="true">
                  {x.title}
                </Typography>
                {x.body}
                <br />
                <Button
                  variant="outlined"
                  style={{
                    color: "#2D9EE0",
                    border: "2px solid #2D9EE0",
                    textTransform: "lowercase",
                  }}
                  className="mt-3"
                >
                  ㅤMás Infoㅤ
                </Button>
              </Typography>
            </SimpleCard>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <SimpleCard style={{ "background-color": "#F7F7F7" }}>
            <Typography variant="h5">
              <ViewModuleIcon fontSize={"large"} style={{ color: "#0C64A1" }} />{" "}
              Emisiones Primarias
            </Typography>
          </SimpleCard>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={4} className="mt-5 mb-5">
          <SimpleCard style={{ "background-color": "#F7F7F7" }}>
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
