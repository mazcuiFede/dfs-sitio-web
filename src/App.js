import React from 'react';
import HeaderBar from './Components/HeaderBar';
import { DealFooter } from './Components/DealFooter'
import { HomePage } from './pages/HomePage'
import { NosotrosPage } from './pages/NosotrosPage'
import { NuestrosProductosPage } from './pages/NuestrosProductosPage'
import { InstrumentosPage} from './pages/InstrumentosPage'

import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

import './App.css';

function App() {

  return (

    <>
      <HeaderBar></HeaderBar>
      <div className="mt-5">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/nosotros" component={NosotrosPage}></Route>
            <Route exact path="/nuestrosproductos" component={NuestrosProductosPage}></Route>
            <Route exact path="/instrumentos/:descripcion" component={InstrumentosPage}></Route>
          </Switch>
        </Router>
      </div>

      <DealFooter />

    </>

  );
}

export default App;
