import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Button } from '@material-ui/core'
import { SimpleCard } from '../../../elements'
import minibar from '../../../../images/minibar.png'

export const Beneficios = () => {
    return (
        <Container>
            <Row className="mt-5 pt-5 text-center">
                <Col>
                    <Typography className="dfs-title" paragraph={true}><b>Beneficios</b> de operar con nosotros</Typography>
                    <img src={minibar} alt="bar" />
                </Col>
            </Row>
            <Row className="mt-5 mb-5 text-center">
                <Col className="my-auto">
                    <SimpleCard title="Soluciones integrales" body="Ayudamos a diseñar una estrategia financiera adaptada a sus necesidades, teniendo en consideración sus objetivos, compromisos y restricciones particulares."></SimpleCard>
                </Col>
                <Col className="my-auto">
                    <SimpleCard title="Optimización impositiva" body="Ponemos especial foco en la optimización impositiva a la hora de la toma de decisiones."></SimpleCard>
                </Col>
                <Col className="my-auto">
                    <SimpleCard title="Gestión de riesgo" body="Análisis exhaustivo del entorno político y financiero para focalizarnos en mitigar riesgos inherentes a sus necesidades, tanto de financiamiento como de inversión."></SimpleCard>
                </Col>
                <Col className="my-auto">
                    <SimpleCard title="Inversiones responsables" body="Tenemos altos estándares ESG y un fuerte compromiso con valores de ética y transparencia."></SimpleCard>
                </Col>
                <Col className="my-auto">
                    <SimpleCard title="Mirada más allá..." body="Somos intuitivos e innovadores."></SimpleCard>
                </Col>
                
            </Row>
            <Row className="mt-5 mb-5 text-center">
                <Col>
                    <Button className="btn-deal">Contáctenos</Button>
                </Col>
            </Row>
        </Container>
    )
}
