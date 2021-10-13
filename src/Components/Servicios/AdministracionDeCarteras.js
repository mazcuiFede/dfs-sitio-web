import React from 'react'
import { Title } from '../../Components/elements/Title';
import { SimpleAccordion, SimpleCard } from '../elements'
import {Typography, Box } from '@material-ui/core'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { CoorporativasMock, InstitucionalesMock, HighNetworthIndividualsMock } from '../../__mocks__/administracionDeCarteras';



export default function AdministracionDeCarteras () {
    return (
        <div>
            
            <Title>Administración de Carteras</Title>

            <Box mb={3}>
                <SimpleCard>
                    <Typography variant="h5"><ViewModuleIcon /> Coorporativas</Typography>
                </SimpleCard>
                
                {
                    CoorporativasMock.map( x => {
                        return <SimpleAccordion title={x.title} rows={x.rows} />
                    })
                }
                
                
            </Box>

            <Box mb={3}>
                <SimpleCard>
                    <Typography variant="h5"><ViewModuleIcon /> Institucionales</Typography>
                </SimpleCard>
                {
                    InstitucionalesMock.map( x => {
                        return <SimpleAccordion title={x.title} rows={x.rows} />
                    })
                }
            </Box>
            

            <Box mb={3}>
                <SimpleCard>
                    <Typography variant="h5"><ViewModuleIcon /> High Networth Individuals</Typography>
                </SimpleCard>
                {
                    HighNetworthIndividualsMock.map( x => {
                        return <SimpleAccordion title={x.title} rows={x.rows} />
                    })
                }
            </Box>
        </div>
    )
}
