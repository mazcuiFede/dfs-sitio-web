import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Button } from '@material-ui/core'
import { SimpleCard } from '../../../elements'
import minibar from '../../../../images/minibar.png'

export const Servicios = () => {
    return (
        <Row className="bg-grey">
            <Col>
                <Container className="">
                    <Row className="mt-5 pt-5 text-center">
                        <Col>
                            <Typography className="dfs-title" paragraph={true}>Estos son algunos de los <b>Servicios</b> que tenemos para usted.</Typography>
                            <img src={minibar}></img>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-5">
                    <Col xs={12} sm={6} xl={3} className="pt-3 my-auto">
                            <SimpleCard title="Asesoramiento Personalizado" body="Acompañamos a nuestros clientes a través de un asesoramiento financiero profesional, sólido y transparente, identificando las mejores oportunidades de inversión con el objetivo de mantener y acrecentar sus ahorros."></SimpleCard>
                        </Col>
                        <Col xs={12} sm={6} xl={3} className="pt-3 my-auto">
                            <SimpleCard title="Asset Management" body="Seleccionamos y gestionamos las mejores alternativas de inversión para obtener los retornos esperados acorde a sus objetivos e intereses."></SimpleCard>
                        </Col>
                        <Col xs={12} sm={6} xl={3} className="pt-3 my-auto">
                            <SimpleCard title="Sales & Trading" body="Nuestro equipo experimentado y de excelencia ejecutará, de manera eficiente, sus operaciones en el mercado."></SimpleCard>
                        </Col>
                        <Col xs={12} sm={6} xl={3} className="pt-3 my-auto">
                            <SimpleCard title="Financiamiento para empresas" body="Nuestro equipo experimentado y de excelencia ejecutará, de manera eficiente, sus operaciones en el mercado."></SimpleCard>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-5 text-center">
                        <Col>
                            <Button className="btn-deal">Contáctenos</Button>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}
