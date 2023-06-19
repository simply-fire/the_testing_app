import React from 'react'
import { Box, Button, ButtonGroup, TextField, IconButton, MenuItem, Typography } from '@mui/material'


const CardQuestionDisplay = (props) => {
    return (
        <>
            <Box sx={{ display: 'flex', minHeight: '32%', maxWidth: '100%', margin: '2vh', marginBottom: '3vh' }}>
                <Box sx={{
                    width: '15%',
                    height: '100%', minHeight: '10vh', backgroundColor: 'white',
                    padding: '2vh', boxSizing: 'border-box',
                    paddingRight: '2vh', paddingLeft: '2vh',
                    display: 'flex', alignItems: 'center', justifyContent: 'left'
                }}>
                    <Typography variant='h6' sx={{ color: 'primary.dark' }}>Question-{props.Qno} </Typography>
                </Box>
                <Box sx={{
                    width: '85%',
                    height: '100%', minHeight: '10vh', backgroundColor: 'white',
                    padding: '2vh', boxSizing: 'border-box',
                    marginLeft: '2vh', paddingRight: '2vh', paddingLeft: '2vh',
                    display: 'flex', alignItems: 'center', justifyContent: 'left'
                }}>
                    <Typography> {props.Question} </Typography>
                </Box>

            </Box>
        </>
    )
}

export default CardQuestionDisplay