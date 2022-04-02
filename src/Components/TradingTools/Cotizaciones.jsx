import React from "react"
import { MarketData } from "react-ts-tradingview-widgets"

import { Title } from "../elements/Title"

export default class Cotizaciones extends React.PureComponent {
  constructor(props) {
    super(props)
    this._ref = React.createRef()
  }

  componentDidMount() {
    const script = document.createElement("script")
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      // symbolsGroups: [
      //   {
      //     name: "Panel Lider",
      //     originalName: "Bonds",
      //     symbols: [
      //       {
      //         name: "BCBA:GGAL",
      //       },
      //       {
      //         name: "BCBA:YPFD",
      //       },
      //       {
      //         name: "BCBA:BMA",
      //       },
      //       {
      //         name: "BCBA:TXAR",
      //       },
      //       {
      //         name: "BCBA:CEPU",
      //       },
      //       {
      //         name: "BCBA:ALUA",
      //       },
      //       {
      //         name: "BCBA:PAMP",
      //       },
      //       {
      //         name: "BCBA:LOMA",
      //       },
      //       {
      //         name: "BCBA:MIRG",
      //       },
      //       {
      //         name: "BCBA:TGSU2",
      //       },
      //       {
      //         name: "BCBA:BBAR",
      //       },
      //       {
      //         name: "BCBA:TGNO4",
      //       },
      //       {
      //         name: "BCBA:VALO",
      //       },
      //       {
      //         name: "BCBA:SUPV",
      //       },
      //       {
      //         name: "BCBA:TRAN",
      //       },
      //       {
      //         name: "BCBA:CVH",
      //       },
      //       {
      //         name: "BCBA:TECO2",
      //       },
      //       {
      //         name: "BCBA:COME",
      //       },
      //       {
      //         name: "BCBA:CRES",
      //       },
      //       {
      //         name: "BCBA:EDN",
      //       },
      //       {
      //         name: "BCBA:BYMA",
      //       },
      //       {
      //         name: "BCBA:HARG",
      //       },
      //       {
      //         name: "BCBA:RICH",
      //       },
      //     ],
      //   },
      // ],
      showSymbolLogo: false,
      colorTheme: "light",
      isTransparent: false,
      locale: "es",
    })

    this._ref.current.appendChild(script)
  }

  render() {
    return (
      <>
        <Title>Cotizaciones</Title>
        <div class="tradingview-widget-container mt-3">
          <div
            class="tradingview-widget-container__widget"
            ref={this._ref}
            style={{ height: "500px" }}
          ></div>
          <div class="tradingview-widget-copyright">
            <a
              href="https://es.tradingview.com/markets/bonds/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span class="blue-text">Panel Lider</span>
            </a>{" "}
            por Tradingview
          </div>
        </div>
      </>
    )
  }
}

// <Title>Cotizaciones</Title>
