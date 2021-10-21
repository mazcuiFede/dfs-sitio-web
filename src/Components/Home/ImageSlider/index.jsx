import React from 'react'
import {Carousel} from 'react-bootstrap'
import slider from '../../../images/slider.jpg'
import {Link} from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import { TextField } from '@mui/material'

export default function ImageSlider () {
    return (
        <Carousel className="d-none d-sm-flex">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider}
                    alt="First slide"
                    />

                <Carousel.Caption>
                    <Typography variant="h2" paragraph="true">Potenciamos su Empresa</Typography>
                    <Typography variant="h5" paragraph="true">Establecemos el horizonte de inversión adecuado para resolver sus necesidades.</Typography>
                    <Link to="/contacto"><Button className="btn-deal mt-4">Contactenos</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
