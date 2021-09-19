import React from 'react'
import instrumentosPageMock from './../__mocks__/instrumentosPages'
import { Title } from '../Components/elements/Title';
import { Contacto } from '../Components/Home/Body/Contacto';
import { Cards } from '../Components/NuestrosProductos/Cards'
import { Typography } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap'

export const InstrumentosPage = props => {
    
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col>
                        <Typography>Productos: Instrumentos de Inversión </Typography>
                    </Col>
                </Row>
            </Container>    
            
            <h1>{props.match.params.descripcion}</h1>
        </div>
    )

}
