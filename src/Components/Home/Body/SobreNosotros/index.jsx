import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Button } from '@material-ui/core'
import minibar from '../../../../images/minibar.png'
import empresa from '../../../../images/empresa.png'

export const SobreNosotros = () => {
    return (
        <Container fluid>
            <Row className="mt-5 pt-5 text-center">
                <Col>
                    <img src={empresa} alt="" className="w-100" />
                </Col>
                <Col className="my-auto">
                    <Typography>Sobre <b>nosotros</b></Typography>
                    <img src={minibar} className="mt-1 mb-5"></img>

                    <Typography paragraph={true}>DFS acompaña a sus clientes a través de un asesoramiento financiero profesional, sólido y transparente, identificando las mejores oportunidades de inversión y financiamiento.</Typography>

                    <Button className="btn-deal">Conocé más</Button>
                </Col>

            </Row>
        </Container>
    )
}
