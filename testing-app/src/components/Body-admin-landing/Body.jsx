import React from 'react'
import Nav from "../Navbar-admin-landing/Navbar";
import {
    Paper, Box, Stack, Typography, Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import Card from './Cards'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'



const body = () => {

    return (
        <>
            <Nav />


            <Paper elevation={2} sx={{
                backgroundColor: '#e3f2fd',
                minHeight: '35vh', minWidth: '100%', padding: '1vh',
                paddingTop: '1vh', paddingBottom: '3vh', display: 'flex', flexDirection: 'column'

            }} >
                <Typography fontWeight='500' color='primary.dark' fontSize='1.2rem' sx={{ float: 'left', marginLeft: '12vw', marginBottom: '2vh' }}>
                    Create a new quiz
                </Typography>
                <Box sx={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                }}>
                    <Stack spacing={15} direction='row'>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Custom Quiz" media='add.png' background='add-background.jpg' />
                            <Typography fontWeight='600' marginTop='1vh' color='primary.dark'>Custom-Quiz</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Subjective Quiz" media='add-rest.png' background='add-subjective-quiz.jpg' />
                            <Typography fontWeight='600' marginTop='1vh' color='primary.dark'>Subjective-Quiz</Typography>

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Objective Quiz" media='add-rest.png' background='add-objective-quiz.jpg' />
                            <Typography fontWeight='600' marginTop='1vh' color='primary.dark'>Objective-Quiz</Typography>

                        </Box>
                    </Stack>
                </Box>

            </Paper>

            <Paper
                sx={{
                    backgroundColor: '#eeeee',
                    minWidth: '100%',
                    padding: '2vh', display: 'flex', flexDirection: 'column'

                }}
            >
                <Typography fontWeight='600' color='primary.dark' fontSize='1.2rem' sx={{ float: 'left', marginLeft: '12vw', marginBottom: '2vh' }}>
                    My quizes
                </Typography>
                <Box sx={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'left', justifyContent: 'center',
                    paddingLeft: '5vw', paddingRight: '5vw'
                }}>

                    <Accordion sx={{ background: '#e3f2fd', margin: '1vh' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ background: '#e3f2fd', margin: '1vh' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ background: '#e3f2fd', margin: '1vh' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Box>
            </Paper>


        </>
    )
}

export default body