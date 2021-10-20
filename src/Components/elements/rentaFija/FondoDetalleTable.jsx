import * as React from 'react';
import { Table, TableBody, TableRow, TableCell, TableContainer, TableHead } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {Link} from 'react-router-dom'
import {Row} from 'react-bootstrap'

export default function FondoDetalleTable ( props ) {
  const { data } = props

  return (
    <Row>
    <TableContainer className="bg-grey mt-5">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="blue-text">
            <TableCell>Objetivo</TableCell>
            <TableCell>Cartera</TableCell>
            <TableCell>Agente de administración</TableCell>
            <TableCell>Agente de custodia</TableCell>
            <TableCell style={{minWidth: "145px"}}>Descargar Informe y RG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data ? 
            
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{ data.objetivo }</TableCell>
              <TableCell>{ data.cartera }</TableCell>
              <TableCell>{ data.agenteAdministracion }</TableCell>
              <TableCell>{ data.agenteCustodia }</TableCell>
              <TableCell>
              <Link to={ data.linkInforme }><PictureAsPdfIcon /></Link>
                
                
                { data.linkRG }
              </TableCell>

            </TableRow>
            : 
            <></>
          }
        </TableBody>
      </Table>
    </TableContainer>
    </Row>
  );
}