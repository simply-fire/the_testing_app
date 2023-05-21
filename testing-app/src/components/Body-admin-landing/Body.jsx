import React from 'react'
import Nav from "../Navbar-admin-landing/Navbar";
import { Paper, Box, Stack, Typography } from '@mui/material';
import Card from './Cards'

import { blue } from '@mui/material/colors';
import { Rowing } from '@mui/icons-material';

const body = () => {
    return (
        <>
            <Nav />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                <Paper elevation={1} sx={{
                    backgroundColor: '#e3f2fd',
                    minHeight: '35vh', minWidth: '100%',
                    paddingTop: '2vh', paddingBottom: '2vh', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',


                }} >
                    <Stack spacing={15} direction='row'>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Custom Quiz" media='add.png' background='add-background.jpg' />
                            <Typography variant='h5' color='primary.dark'>Custom-Quiz</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Subjective Quiz" media='add-rest.png' background='add-subjective-quiz.jpg' />
                            <Typography variant='h5' color='primary.dark'>Subjective-Quiz</Typography>

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Objective Quiz" media='add-rest.png' background='add-objective-quiz.jpg' />
                            <Typography variant='h5' color='primary.dark'>objective-Quiz</Typography>

                        </Box>
                    </Stack>

                </Paper>
            </Box>

        </>
    )
}

export default body