import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function FondoDescripcionTable(props) {
  const { data } = props
  
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="blue-text">
            <TableCell>Fondo</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Plazo de Rescate</TableCell>
            <TableCell>Moneda</TableCell>
            <TableCell>Perfil del inversor</TableCell>
            <TableCell>Inversión Mínima</TableCell>
            <TableCell>Horizonte de Inversión</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data ? 
            
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{ data.fondo }</TableCell>
              <TableCell>{ data.tipo }</TableCell>
              <TableCell>{ data.plazo }</TableCell>
              <TableCell>{ data.moneda }</TableCell>
              <TableCell>{ data.perfilInversor }</TableCell>
              <TableCell>{ data.inversionMinima }</TableCell>
              <TableCell>{ data.horizonte }</TableCell>
            </TableRow>
            : 
            <></>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}