import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Title } from "../../Components/elements/Title"
import { SimpleAccordion, SimpleCard } from "../elements"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ViewModuleIcon from "@material-ui/icons/ViewModule"
import {
  CoorporativasMock,
  InstitucionalesMock,
  HighNetworthIndividualsMock,
} from "../../__mocks__/administracionDeCarteras"

export default function AdministracionDeCarteras() {
  return (
    <>
      <Container className="pt-3">
        <Typography paragraph="true">
          <b>
            Servicios / <span class="blue-text">Asset Management</span>
          </b>
        </Typography>
      </Container>
      <Container fluid className="title-grey">
        <Container>
          <Typography variant={"h4"}>
            <b>Administración de Carteras</b>
          </Typography>
        </Container>
      </Container>

      <Container>
        <Box mb={3}>
          <SimpleCard>
            <Typography variant="h5" className="light">
              <ViewModuleIcon color={"info"} fontSize={"large"} /> Coorporativas
            </Typography>
          </SimpleCard>
          <Box mt={2}>
            {CoorporativasMock.map((x, i) => {
              return <SimpleAccordion key={i} title={x.title} rows={x.rows} />
            })}
          </Box>
        </Box>

        <Box mb={3}>
          <SimpleCard>
            <Typography variant="h5">
              <ViewModuleIcon color={"info"} fontSize={"large"} />{" "}
              Institucionales
            </Typography>
          </SimpleCard>
          <Box mt={2}>
            {InstitucionalesMock.map((x) => {
              return <SimpleAccordion title={x.title} rows={x.rows} />
            })}
          </Box>
        </Box>

        <Box mb={3}>
          <SimpleCard>
            <Typography variant="h5">
              <ViewModuleIcon color={"info"} fontSize={"large"} /> High Networth
              Individuals
            </Typography>
          </SimpleCard>
          <Box mt={2}>
            {HighNetworthIndividualsMock.map((x) => {
              return <SimpleAccordion title={x.title} rows={x.rows} />
            })}
          </Box>
        </Box>
      </Container>
    </>
  )
}
