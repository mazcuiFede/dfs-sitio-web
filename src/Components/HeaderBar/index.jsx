import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col } from 'react-bootstrap'
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../../images/logo.png'
import Slide from '@material-ui/core/Slide';
import { Button } from 'react-bootstrap';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HeaderBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="default">
          <Toolbar>
            <Container>
              <Row>
                <Col>
                  <img src={logo} alt="" className="h-100p p-1" />
                </Col>
                <Col className="my-auto text-right">
                  <Button className="h-100p btn-header-alto">Home</Button>
                  <Button className="h-100p btn-header-alto">Servicios</Button>
                  <Button className="h-100p btn-header-alto">Productos</Button>
                  <Button className="h-100p btn-header-alto">Nosotros</Button>
                  <Button className="h-100p btn-header-alto">Contacto</Button>
                </Col>
              </Row>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}