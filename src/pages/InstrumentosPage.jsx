import React, {useEffect, useState} from 'react'
import { Typography, Button } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap'
import instrumentosPageMock from './../__mocks__/instrumentosPages'
import {Link} from 'react-router-dom'
import { FooterBeneficios } from '../Components/footerBeneficios';

export const InstrumentosPage = props => {

    const [instrumento, setInstrumento] = useState({})

    useEffect(() => {
        setInstrumento(instrumentosPageMock.find(x => x.url === props.match.params.descripcion.toLowerCase()))

    }, [])
    

    return (
        <div className="mt-5">
            <Container className="pt-5">
                <Row>
                    <Col>
                        <Typography><b>Productos</b>: Instrumentos de Inversión </Typography>
                    </Col>
                </Row>
            </Container>    
            <Container className="mt-2 mb-5">
                <Row>
                    <Col className="my-auto">
                        <Typography variant="h4" className="card-title-1" paragraph={true}>{instrumento.title}</Typography> 
                        <Typography variant="p">{instrumento.body}</Typography> 
                    </Col>
                    <Col>
                        <img src="https://conceptodefinicion.de/wp-content/uploads/2014/05/Imagen-2.jpg" alt="" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="text-center">
                        <Link to="/#contacto"><Button className="btn-deal">Contactenos</Button></Link>
                    </Col>
                </Row>
            </Container>

            <FooterBeneficios />

            
        </div>
    )

}
