import React from "react"
import { Title } from "../elements/Title"
import { Typography, Box, Button } from "@material-ui/core"
import ViewModuleIcon from "@material-ui/icons/ViewModule"
import { SimpleCard } from "./../elements"
import { Link } from "react-router-dom"

import familiaDeFondosMock from "../../__mocks__/familiaDeFondos"
import { Container, Row, Col } from "react-bootstrap"
import productos from "../../images/productos.jpeg"

export default function Fondos() {
  return (
    <Container>
      <Title>Nuestra familia de Fondos</Title>

      <Row className="mt-3 mb-4">
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
          <Col xs={12} sm={4} className="mt-1 mb-2 pb-4 my-auto">
            <SimpleCard color="blue" className="text-center" link={x.link}>
              <Typography className="card-title-1" paragraph={true}>
                {x.title}
              </Typography>
              <Typography className="white" paragraph={true}>
                {x.body}
              </Typography>
              <br />
              <Button variant="outlined">Más Info</Button>
            </SimpleCard>
          </Col>
        ))}
      </Row>
      <Row className="mt-5 mb-5 text-center">
        <Col>
          <img
            src={productos}
            alt="productos"
            useMap="#workmap"
            style={{ width: "1270px", height: "500px" }}
          ></img>
          <map id="workmap" name="workmap">
            <area
              shape="rect"
              coords="0,0,307,500"
              alt="test"
              href="/servicios/liquidez"
            />
            <area
              shape="rect"
              coords="307,0,818,500"
              alt="test"
              href="/servicios/renta-fija"
            />
            <area
              shape="rect"
              coords="818,0,1270,500"
              alt="test"
              href="/servicios/renta-variable"
            />
          </map>
        </Col>
      </Row>
    </Container>
  )
}
