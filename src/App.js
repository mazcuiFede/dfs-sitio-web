import React from 'react';
import HeaderBar from './Components/HeaderBar';
import ImageSlider from './Components/ImageSlider';
import TradingViewTicker from '../src/Components/TradingViewTicker'
import { Body1 } from '../src/Components/Body/Body1'
import { Servicios } from '../src/Components/Body/Servicios'
import { NuestrosProductos } from '../src/Components/Body/NuestrosProductos'
import { Beneficios } from '../src/Components/Body/Beneficios'
import { PorqueElegirnos } from '../src/Components/Body/PorqueElegirnos'
import { Partners } from '../src/Components/Body/Partners'
import { SobreNosotros } from '../src/Components/Body/SobreNosotros'
import { Contacto } from '../src/Components/Body/Contacto'
import { DealFooter } from '../src/Components/Body/DealFooter'

import './App.css';

function App() {

  return (

    <>
      <HeaderBar ></HeaderBar>

      <ImageSlider></ImageSlider>

      <TradingViewTicker></TradingViewTicker>

      <Body1></Body1>

      <Servicios></Servicios>

      <NuestrosProductos></NuestrosProductos>

      <Beneficios />
      
      <PorqueElegirnos />

      <SobreNosotros />

      <Partners />

      <Contacto />

      <DealFooter />

    </>

  );
}

export default App;
