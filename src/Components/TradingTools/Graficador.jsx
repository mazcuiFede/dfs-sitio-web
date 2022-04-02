import TradingViewWidget from "react-tradingview-widget"
import { AdvancedChart } from "react-tradingview-embed"

import { Title } from "../../Components/elements/Title"

export default function Graficador() {
  return (
    <>
      <Title>Graficador</Title>
      <TradingViewWidget symbol="NASDAQ:AAPL" />
    </>
  )
}
