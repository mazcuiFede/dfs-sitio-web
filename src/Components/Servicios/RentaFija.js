import React from "react"
import { Title } from "../elements/Title"
import { SimpleAccordion, SimpleCard } from "../elements"
import { Typography, Box } from "@material-ui/core"
import ViewModuleIcon from "@material-ui/icons/ViewModule"
import {
  CoberturaTipoCambioMock,
  CoberturaInflacionMock,
  RentaInternacionalMock,
  PYMEMock,
} from "../../__mocks__/rentaFija"
import RentaFijaAccordion from "../elements/rentaFija/RentaFijaAccordion"

export default function RentaFija() {
  return (
    <div>
      <Title>Renta Fija</Title>

      <Box mb={3} pt={4}>
        {CoberturaTipoCambioMock.map((x) => (
          <>
            <Typography className="blue-text" paragraph="true">
              {x.title}
            </Typography>
            <RentaFijaAccordion rows={x.rows} />
          </>
        ))}
      </Box>

      <hr />

      <Box mb={3}>
        {CoberturaInflacionMock.map((x) => (
          <>
            <Typography className="blue-text" paragraph="true">
              {x.title}
            </Typography>
            <RentaFijaAccordion rows={x.rows} />
          </>
        ))}
      </Box>

      <hr />

      <Box mb={3}>
        {RentaInternacionalMock.map((x) => (
          <>
            <Typography className="blue-text" paragraph="true">
              {x.title}
            </Typography>
            <RentaFijaAccordion rows={x.rows} />
          </>
        ))}
      </Box>

      <hr />

      <Box mb={3}>
        {PYMEMock.map((x) => (
          <>
            <Typography className="blue-text" paragraph="true">
              {x.title}
            </Typography>
            <RentaFijaAccordion rows={x.rows} />
          </>
        ))}
      </Box>
    </div>
  )
}
