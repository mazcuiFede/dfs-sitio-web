import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FooterBeneficios } from '../Components/footerBeneficios'
import { Cotizaciones, Crypto, Graficador } from '../Components/TradingTools'

const tools = {
    graficador: 'graficador',
    cotizaciones: 'cotizaciones',
    crypto: 'crypto'

}

const renderBody = param => {
  switch(param) {
    case tools.graficador:
      return <Graficador />
    case tools.cotizaciones:
      return <Cotizaciones />
    case tools.crypto:
      return <Crypto />
    default:
      return <></>;
  }
}

export const TradingToolsPage = props => {
    
  const [tool, setTool] = useState()

    useEffect(() => {
      setTool(props.match.params.tool.toLowerCase())

    }, [props.match.params.tool])

    return (
        <>
          <Container>
              { renderBody(tool) }
          </Container>
          <FooterBeneficios />
            
        </>
    )
}
