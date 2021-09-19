import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography } from '@material-ui/core'
import minibar from '../../../../images/minibar.png'
import steps from '../../../../images/steps.jpg'

export const Body1 = () => {
    return (
        <Container>
            <Row className="mt-5 pt-5 text-center">
                <Col>
                    <Typography className="dfs-title" paragraph={true}><b>Abra su cuenta de inversión en simples pasos</b> y acceda al mercado de capitales desde su cuenta como Persona Física o Persona Jurídica.</Typography>
                    <img src={minibar} alt="minibar"></img>
                </Col>
            </Row>
            <Row className="mt-5 mb-5 text-center">
                <Col>
                    <img src={steps} alt="minibar"></img>
                </Col>
            </Row>
        </Container>
    )
}