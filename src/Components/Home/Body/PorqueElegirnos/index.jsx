import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Button } from '@material-ui/core'
import minibar from './../../../../images/minibar.png'
import empresa from './../../../../images/empresa.png'

export const PorqueElegirnos = () => {
    return (
        <Container fluid>
            <Row className="mt-5 pt-5 text-center">
               
                <Col className="my-auto">
                    <Typography>¿Por qué <b>elegirnos</b>?</Typography>
                    <img src={minibar} className="mt-1 mb-5"></img>

                    <Typography paragraph={true}>En DFS asesoramos a nuestros clientes con el objetivo de mantener y acrecentar sus ahorros. Deal Financial Services se enorgullece de abrir una nueva etapa de expansión y crecimiento a partir de 2016, invitando a los clientes individuales y a nuevos segmentos de clientes (instituciones, corporaciones y pymes) a sumarse nuestra propuesta de valor y también ampliando la oferta de servicios y productos financieros.</Typography>

                    <Button className="btn-deal">Conocé más</Button>
                </Col>
                <Col>
                    <img src={empresa} alt="" className="w-100" />
                </Col>
            </Row>
        </Container>
    )
}
