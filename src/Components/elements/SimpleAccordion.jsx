import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'

export default function SimpleAccordion ( props ) {
  const { title, rows } = props

  return (
    <div>
      <Accordion className="transparent" elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>{title}</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
                {
                rows ? 
                rows.map(x => 
                    <>
                      <TableRow>
                        {
                          x.text.length > 0 ?
                            <TableCell><Typography className="blue-text">{x.text}</Typography></TableCell>
                          :
                            <></>
                        }
                        
                        
                        <TableCell><Typography>{x.descripcion}</Typography></TableCell>
                        <TableCell>
                          <Link to={"/contacto"}><Button variant="outlined">Más info</Button> </Link>
                        </TableCell>
                      </TableRow>
                    </>
                )
                : 
                  <></>
                }

            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
      

    </div>
  );
}