import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Button, Divider } from '@material-ui/core'
import logo from './../../../images/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const DealFooter = () => {
    return (
        <>
            <Container fluid>
                <Row className="mt-5 pt-5 pb-5 pt-5 text-center" style={{"backgroundColor":"#0C64A1"}} >
                    <Col className="my-auto">
                        <Typography className="title-2">Si aún no eres cliente abra su cuenta de inversión <Button className="btn-deal ml-3">Abrir cuenta</Button></Typography>
                        
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mt-5 pb-5">
                    <Col xs={12} sm={3}>
                        <img src={logo} alt="logo" className="mb-3"/>
                        <Typography>Carlos Pellegrini 989, Piso 10. CABA 1009</Typography>
                        <Typography paragraph={true}>ABS, Buenos Aires, Argentina</Typography>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Typography paragraph={true}>Productos</Typography>
                        <ul>
                            <li>Asset Management</li>
                            <li>Brokerage</li>
                            <li>Contacto</li>
                            <li>DFS Renta Fija Pesos</li>
                            <li>FCI abierto pymes</li>
                            <li>Hechos Relevantes</li>
                        </ul>
                    </Col>

                    <Col xs={12} sm={3}>
                        <Typography paragraph={true}>Páginas</Typography>
                        <ul>
                            <li>Home</li>
                            <li>Servicios</li>
                            <li>Productos</li>
                            <li>Nosotros</li>
                            <li>Contacto</li>
                        </ul>
                    </Col>

                    <Col xs={12} sm={3}>
                        <Typography paragraph={true}>Contacto</Typography>
                        <ul>
                            <li>+54 11 5275 6390</li>
                            <li>administracion@dealfs.com.ar</li>
                        </ul>
                        <Divider />
                        <Typography paragraph={true}>
                            Seguinos en:
                        </Typography>
                        <a href="facebook.com"> 
                            <FacebookIcon />
                        </a>
                        <a href="facebook.com"> 
                            <TwitterIcon />
                        </a>
                        <a href="facebook.com"> 
                            <InstagramIcon />
                        </a>
                        <a href="facebook.com"> 
                            <YouTubeIcon />
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
