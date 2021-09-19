import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { makeStyles, Typography, TextField, InputLabel, Input, TextareaAutosize  } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import minibar from '../../../../images/minibar.png'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%'
      },
    },
  }));


export const Contacto = () => {
    const classes = useStyles();
    return (
        <Container>
            <Row className="mt-5 pt-5 text-center">
                <Col>
                    <Typography className="dfs-title" paragraph={true}>Contactese con nuestro equipo</Typography>
                    <img src={minibar}></img>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col className="my-auto">
                    <Row>
                        <Col className="text-center" xs={4}>
                            <LocationOnIcon style={{fontSize: "3rem"}} />
                        </Col>
                        <Col className="my-auto" xs={8}>
                            <Typography>Carlos Pellegrini 989, piso 10. CABA 1009</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center" xs={4}>
                            <MailOutlineIcon style={{fontSize: "3rem"}}></MailOutlineIcon>
                        </Col>
                        <Col className="my-auto" xs={8}>
                            <Typography>administracion@dealfs.com.ar</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center" xs={4}>
                            <PhoneIcon style={{fontSize: "3rem"}}></PhoneIcon>
                        </Col>
                        <Col className="my-auto" xs={8}>
                            <Typography>+54 11 5275 6390</Typography>
                        </Col>
                    </Row>
                        
                </Col>
                <Col className="my-auto">
                    <form className={classes.root} noValidate autoComplete="off">
                        <Row>
                            <Col>
                                <TextField id="nombre-basic" label="Nombre" variant="filled"  className="w-100"/>
                            </Col>
                            <Col>
                                <TextField id="email" label="Email" variant="filled" className="w-100" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField id="titulo" label="Título" variant="filled" className="w-100" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField id="mensaje" label="Mensaje" variant="filled" className="w-100" />
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>

        </Container>
    )
}
