import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Row, Col } from 'react-bootstrap'
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button } from '@material-ui/core'
import logo from '../../images/logo.png'
import Slide from '@material-ui/core/Slide';
import ButtonHeader from '../elements/ButtonHeader';
import menuMock from '../../__mocks__/menu';
import { Link } from "react-router-dom";

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
              <Row className="header">
                <Col xs={4}>
                  <img src={logo} alt="" className="h-100p p-1" />
                </Col>
                <Col className="my-auto text-right" xs={8}>
                  {
                    menuMock.map(x => {
                      return <Link to={x.link} className="inline"><ButtonHeader title={x.title} subItems={x.subItems}/></Link>
                    })
                  }
                  <Link><Button variant="outlined" color="primary" className="ml-2">Ingresar</Button></Link>
                  <a href={"https://aperturadecuenta.dealfs.com.ar/"} target="_blank"><Button className="btn-deal ml-2">Abrir Cuenta</Button></a>
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