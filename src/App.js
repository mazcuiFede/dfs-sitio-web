import React from "react"
import HeaderBar from "./Components/HeaderBar"
import { DealFooter } from "./Components/DealFooter"
import { HomePage } from "./pages/HomePage"
import { NosotrosPage } from "./pages/NosotrosPage"
import { NuestrosProductosPage } from "./pages/NuestrosProductosPage"
import { InstrumentosPage } from "./pages/InstrumentosPage"
import { ServiciosPage } from "./pages/ServiciosPage"
import { TradingToolsPage } from "./pages/TradingToolsPage"
import { ContactoPage } from "./pages/ContactoPage"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css"
import { ScrollToTop } from "./Components/elements"

function App() {
  return (
    <>
      <Router>
        <HeaderBar></HeaderBar>
        <div style={{ marginTop: "100px" }}>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/servicios" component={ServiciosPage}></Route>
            <Route exact path="/nosotros" component={NosotrosPage}></Route>
            <Route
              exact
              path="/nuestrosproductos"
              component={NuestrosProductosPage}
            ></Route>
            <Route
              exact
              path="/instrumentos/:descripcion"
              component={InstrumentosPage}
            ></Route>
            <Route
              exact
              path="/servicios/:servicio"
              component={ServiciosPage}
            />

            <Route
              exact
              path="/trading-tools/:tool"
              component={TradingToolsPage}
            />

            <Route exact path="/contacto" component={ContactoPage} />
          </Switch>
        </div>
        <DealFooter />
      </Router>
    </>
  )
}

export default App
