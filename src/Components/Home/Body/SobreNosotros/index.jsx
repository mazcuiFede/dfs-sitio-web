import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Button } from '@material-ui/core'
import minibar from '../../../../images/minibar.png'
import empresa from '../../../../images/sobre_nosotros.jpg'

export const SobreNosotros = () => {
    return (
        <Container fluid>
            <Row className="mt-5 pt-5 text-center">
                <Col className="d-none d-sm-flex" >
                    <img src={empresa} alt="" className="w-100" />
                </Col>
                <Col className="my-auto">
                    <Typography>Sobre <b>nosotros</b></Typography>
                    <img src={minibar} className="mt-1 mb-5"></img>

                    <Typography paragraph={true}>En DFS asesoramos a nuestros clientes con el objetivo de mantener y acrecentar sus ahorros. Deal Financial Services se enorgullece de abrir una etapa de expansión a partir del 2016, ampliando la propuesta de valor para Instituciones, empresas y Pymes.</Typography>

                    <Button className="btn-deal">Conocé más</Button>
                </Col>

            </Row>
        </Container>
    )
}
