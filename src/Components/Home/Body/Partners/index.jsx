import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import logo1 from "../../../../images/partners/1.png"
import logo2 from "../../../../images/partners/2.png"
import logo3 from "../../../../images/partners/3.png"
import logo4 from "../../../../images/partners/4.png"
import logo5 from "../../../../images/partners/5.png"

export const Partners = () => {
  return (
    <Container fluid>
      <Row className="mt-5 pt-5 text-center mb-5 align-items-center">
        <Col>
          <img src={logo1} alt="" className="" />
        </Col>
        <Col>
          <img src={logo2} alt="" className="" />
        </Col>
        <Col>
          <img src={logo3} alt="" className="" />
        </Col>
        <Col>
          <img src={logo4} alt="" className="" />
        </Col>
        <Col>
          <img src={logo5} alt="" className="" />
        </Col>
      </Row>
    </Container>
  )
}
