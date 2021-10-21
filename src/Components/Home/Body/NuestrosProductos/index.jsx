import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Button, Divider } from '@material-ui/core'
import { ProductosCard } from '../../../elements'
import {Link} from 'react-router-dom'
import minibar from '../../../../images/minibar.png'


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
                    <Link to="/instrumentos/cauciones">
                        <ProductosCard body="Cauciones"></ProductosCard>
                    </Link>
                </Col>
                <Col>
                    <Link to="/instrumentos/chpd">
                        <ProductosCard body="Cheques de Pago Diferido"></ProductosCard>
                    </Link>
                </Col>
                <Col>
                    <Link to="/instrumentos/letras">
                        <ProductosCard body="Letras"></ProductosCard>
                    </Link>
                </Col>
                <Col>
                    <Link to="/instrumentos/bonos">
                        <ProductosCard body="Bonos"></ProductosCard>
                    </Link>
                </Col>
            </Row>

            <Row className="mt-5 mb-5 text-center">
                <Col>
                    <Link to="/instrumentos/acciones">
                        <ProductosCard body="Acciones"></ProductosCard>
                    </Link>
                </Col>
                <Col>
                    <Link to="/instrumentos/cedears">
                        <ProductosCard body="Cedears"></ProductosCard>
                    </Link>
                </Col>
                <Col>
                    <Link to="/instrumentos/pagare-bursatil">
                        <ProductosCard body="Pagaré burstatil"></ProductosCard>
                    </Link>
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
                    <Link to="/instrumentos/fci">
                        <ProductosCard body="Fondos Comunes de Inversión"></ProductosCard>
                    </Link>
                </Col>
            </Row>

        </Container>
    )

}
