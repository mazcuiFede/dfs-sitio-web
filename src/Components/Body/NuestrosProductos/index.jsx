import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Button, Divider } from '@material-ui/core'
import { ProductosCard } from '../../elements'
import minibar from '../../../images/minibar.png'

export const NuestrosProductos = () => {

    return (
        <Container>
            <Row className="mt-5 pt-5 text-center">
                <Col>
                    <Typography className="dfs-title" paragraph={true}><b>Nuestros Productos</b>.</Typography>
                    <img src={minibar}></img>
                </Col>
            </Row>
            
            <Row className="mt-5 mb-5 text-center">
                <Col>
                    <ProductosCard body="Cauciones"></ProductosCard>
                </Col>
                <Col>
                    <ProductosCard body="Cheques de Pago Diferido"></ProductosCard>
                </Col>
                <Col>
                    <ProductosCard body="Letras"></ProductosCard>
                </Col>
                <Col>
                    <ProductosCard body="Bonos"></ProductosCard>
                </Col>
            </Row>

            <Row className="mt-5 mb-5 text-center">
                <Col>
                    <ProductosCard body="Acciones"></ProductosCard>
                </Col>
                <Col>
                    <ProductosCard body="Cedears"></ProductosCard>
                </Col>
                <Col>
                    <ProductosCard body="Pagaré burstatil"></ProductosCard>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Divider />
                </Col>
            </Row>
            
            <Row className="mt-5 mb-5 text-center">
                <Col>
                    <ProductosCard body="Emisiones Primarias"></ProductosCard>
                </Col>
                <Col>
                    <ProductosCard body="Fondos Comunes de Inversión"></ProductosCard>
                </Col>
            </Row>

        </Container>
    )

}
