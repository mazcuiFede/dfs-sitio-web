import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import { Title } from '../../../elements/Title'
import { SimpleCard } from '../../../elements'

export const Beneficios = () => {
    return (
        <Container>
            <Row className="mt-5 pt-5">
                <Col>
                    <Title><b>Beneficios</b> de operar con nosotros</Title>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col>
                    <SimpleCard icon={true} title="Soluciones integrales" body="Ayudamos a diseñar una estrategia financiera adaptada a sus necesidades, teniendo en consideración sus objetivos, compromisos y restricciones particulares."></SimpleCard>
                </Col>
                <Col>
                    <SimpleCard icon={true} title="Optimización impositiva" body="Ponemos especial foco en la optimización impositiva a la hora de la toma de decisiones."></SimpleCard>
                </Col>
                <Col>
                    <SimpleCard icon={true} title="Gestión de riesgo" body="Análisis exhaustivo del entorno político y financiero para focalizarnos en mitigar riesgos inherentes a sus necesidades, tanto de financiamiento como de inversión."></SimpleCard>
                </Col>
                <Col>
                    <SimpleCard icon={true} title="Inversiones responsables" body="Tenemos altos estándares ESG y un fuerte compromiso con valores de ética y transparencia."></SimpleCard>
                </Col>
                <Col>
                    <SimpleCard icon={true} title="Mirada más allá..." body="Somos intuitivos e innovadores."></SimpleCard>
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
