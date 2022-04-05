import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Title } from "./elements/Title"
import beneficiosMock from "./../__mocks__/beneficios"
import { SimpleCard } from "../Components/elements"

export const FooterBeneficios = () => {
  return (
    <>
      <Row>
        <Col className="text-center">
          <Title>
            <b>Beneficios</b> de operar con nosotros
          </Title>
        </Col>
      </Row>
      <Container fluid className="title pt-3 pb-4 bg-grey">
        <Container>
          <Row>
            {beneficiosMock.map((x, i) => (
              <Col xs={12} sm key={i}>
                <SimpleCard icon={true} height={290} title={x.title}>
                  {x.body}
                </SimpleCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  )
}
