import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { makeStyles, Typography, Button } from '@material-ui/core'
import { Form, Field } from "react-final-form";
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

const onSubmit = async (values) => {
    window.alert(JSON.stringify(values, 0, 2));
};

export const Contacto = () => {
    const classes = useStyles();
    return (
        <Container id="contacto">
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
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <Row>
                            <Col>
                                <Field id="nombre" placeholder="Nombre" component="input" name="nombre" variant="filled"  className="w-100 form-control"/>
                            </Col>
                            <Col>
                                <Field id="email" placeholder="Email" component="input" name="email" variant="filled" className="w-100 form-control" />
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col>
                                <Field id="titulo" placeholder="Título" component="input" name="title" variant="filled" className="w-100 form-control" />
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col>
                                <Field id="mensaje" name="mensaje" component="input" placeholder="Mensaje" variant="filled" className="w-100 form-control" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-3">
                                <Button type="submit" className="btn-deal">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </form>
                    )}
                    />
                </Col>
            </Row>

        </Container>
    )
}
