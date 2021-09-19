import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../../../images/logo.png'


export const Partners = () => {
    return (
        <Container>
            <Row className="mt-5 pt-5 text-center mb-5">
                <Col>
                    <img src={logo} alt="" className="" />
                </Col>
                <Col>
                    <img src={logo} alt="" className="" />
                </Col>
                <Col>
                    <img src={logo} alt="" className="" />
                </Col>
                <Col>
                    <img src={logo} alt="" className="" />
                </Col>
            </Row>
        </Container>
    )
}
