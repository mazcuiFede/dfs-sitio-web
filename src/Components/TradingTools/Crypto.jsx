import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

import { Title } from '../elements/Title';
 
export default function Crypto () {
    return( 
            <>
                <Title>Crypto</Title>
                <CryptoCurrencyMarket width="100%" height={600}></CryptoCurrencyMarket>
            </>
        )
  
}