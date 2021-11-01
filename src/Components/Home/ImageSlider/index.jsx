import React from 'react'
import {Carousel} from 'react-bootstrap'
import slider1 from '../../../images/slider/1.jpg'
import slider2 from '../../../images/slider/2.jpg'
import slider3 from '../../../images/slider/3.jpg'
import slider4 from '../../../images/slider/4.jpg'
import slider5 from '../../../images/slider/5.jpg'
import {Link} from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'

export default function ImageSlider () {
    return (
        <Carousel className="d-none d-sm-flex">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    />

                <Carousel.Caption className="my-auto">
                    <Typography variant="h3" paragraph="true">Potenciamos su Empresa</Typography>
                    <Typography variant="h6" paragraph="true">Establecemos el horizonte de inversión adecuado para resolver sus necesidades.</Typography>
                    <Link to="/contacto"><Button className="btn-deal mt-4">Contactenos</Button></Link>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="First slide"
                    />

                <Carousel.Caption className="my-auto">
                    <Typography variant="h3" paragraph="true" className="card-title-1">Asesoramiento Personalizado</Typography>
                    <Typography variant="h6" paragraph="true" className="dark-grey">Más de 25 años acompañando a nuestros clientes.</Typography>
                    <Link to="/contacto"><Button className="btn-deal mt-4">Contactenos</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="First slide"
                    />

                <Carousel.Caption className="my-auto">
                    <Typography variant="h4" paragraph="true">Gestionamos sus activos de manera responsable y eficiente</Typography>
                    <Link to="/contacto"><Button className="btn-deal mt-4">Contactenos</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider4}
                    alt="First slide"
                    />

                <Carousel.Caption className="my-auto">
                    <Typography variant="h4" paragraph="true" className="card-title-1">Seleccionarmos la mejor combinación de activos para sus objetivos</Typography>
                    <Link to="/contacto"><Button className="btn-deal mt-4">Contactenos</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider5}
                    alt="First slide"
                    />
                <Carousel.Caption className="my-auto">
                    <Typography variant="h3" paragraph="true" className="card-title-1">Potenciamos su PYME</Typography>
                    <Typography variant="h6" paragraph="true" className="dark-grey">Establecemos el horizonte de inversión adecuado para resolver sus necesidades.</Typography>
                    <Link to="/contacto"><Button className="btn-deal mt-4">Contactenos</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
