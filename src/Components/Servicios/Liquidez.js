import React from 'react'
import { Title } from '../elements/Title';
import {Typography, Box } from '@material-ui/core'
import { FamiliaDeFondosMock } from '../../__mocks__/liquidez';
import RentaFijaAccordion from '../elements/rentaFija/RentaFijaAccordion';
import {Row} from 'react-bootstrap'

export default function Liquidez () {
    return (
        <div>
            
            <Title>Liquidez</Title>

            <Box mb={3}>
                {
                    FamiliaDeFondosMock.map( x => 
                        <>
                            <Typography className="blue-text" paragraph="true">{x.title}</Typography>
                            <Typography paragraph="true">Elija el fondo que se ajuste a su perfíl de inversor teniendo en cuenta el tipo de moneda, instrumentos, horizonte de inversión y tiempo de rescate.</Typography>
                            
                            <RentaFijaAccordion rows={x.rows} />

                        </>
                    )
                }
            </Box>

                        
        </div>
    )
}
