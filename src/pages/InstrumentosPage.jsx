import React from 'react'
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
