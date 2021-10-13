import React from 'react'
import { Title } from '../elements/Title';
import {Typography, Box } from '@material-ui/core'
import { AccionesMock } from '../../__mocks__/rentaVariable';
import RentaFijaAccordion from '../elements/rentaFija/RentaFijaAccordion';


export default function RentaVariable () {
    return (
        <div>
            
            <Title>Renta Variable</Title>

            <Box mb={3}>
                {
                    AccionesMock.map( x => 
                        <>
                            <Typography className="blue-text" paragraph="true">{x.title}</Typography>
                            <Typography>Elija el fondo que se ajuste a su perfíl de inversor teniendo en cuenta el tipo de moneda, instrumentos, horizonte de inversión y tiempo de rescate.</Typography>
                            <RentaFijaAccordion rows={x.rows} />
                        </>
                    )
                }
            </Box>

                        
        </div>
    )
}
