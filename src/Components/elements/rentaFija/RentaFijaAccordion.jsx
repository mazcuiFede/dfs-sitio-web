import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FondoDescripcionTable, FondoDetalleTable } from '..';

export default function RentaFijaAccordion ( props ) {
  const { rows } = props
  return (
      rows ? 
        rows.map(x =>  
          <>
            <Accordion className="transparent" elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><b>{x.title}</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FondoDescripcionTable data={x}></FondoDescripcionTable>
                <FondoDetalleTable data={x}></FondoDetalleTable>
              </AccordionDetails>
            </Accordion>
          </>
        )
      : 
        <></>
  );
}