import React from 'react'
import { Title } from '../elements/Title';
import { Typography } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import { SimpleCard } from '../elements';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Link } from 'react-router-dom'

export default function AssetManagement () {
    return (
        <div>
            
            <Title>Asset Management</Title>

            <Container className="mb-5">
                <Typography paragraph="true">
                    Seleccionamos y gestionamos las mejores alternativas de inversión para obtener los retornos esperados acorde a sus objetivos e intereses. 
                </Typography>
                <Row className="mt-4">
                    <Col>
                        
                            <SimpleCard link="/servicios/administracion-de-carteras">
                                <Typography variant="h5"><ViewModuleIcon /> Administración de Carteras</Typography>
                            </SimpleCard>
                        
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                            <SimpleCard link="/servicios/fondos">
                                <Typography variant="h5"><ViewModuleIcon /> Familia de Fondos Comunes de Inversión</Typography>
                            </SimpleCard>
                    </Col>
                </Row>
            </Container>

                        
        </div>
    )
}
