import { MarketData } from "react-ts-tradingview-widgets";

import { Title } from '../elements/Title';
 
export default function Cotizaciones () {
    return( 
            <>
                <Title>Cotizaciones</Title>
                <MarketData width="100%" height={700}></MarketData>
            </>
        )
  
}