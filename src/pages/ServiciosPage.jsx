import React, {useEffect, useState} from 'react'
import { Title } from '../Components/elements/Title';
import { Container, Row, Col } from 'react-bootstrap'
import { FooterBeneficios } from '../Components/footerBeneficios'

export const ServiciosPage = props => {
    const [servicio, setServicio] = useState({})

    useEffect(() => {
        setServicio(props.match.params.servicio.toLowerCase())

    }, [])

    return (
        <>
        <Container>
            <Title>Servicios</Title>
            {servicio}
        </Container>
        <FooterBeneficios />
            
        </>
    )
}
