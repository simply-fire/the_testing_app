import React from 'react'
import { Box, Button, Link, Paper, TextField, Typography } from '@mui/material'


const OTP = () => {
    return (
        <>
            <Paper sx={{ boxSizing: 'border-box', height: '100vh', width: '100vw', background: 'linear-gradient(to right bottom,#d4f3fa,#0ca3f5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Paper elevation='10' sx={{ boxSizing: 'border-box', paddingLeft: '2vw', paddingRight: '2vw', width: '25vw', minheight: '40vh', borderRadius: '20px', display: 'flex', justifyContent: 'top', alignItems: 'center', flexDirection: 'column' }}>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', width: '80%', padding: '2vh', marginTop: '3vh' }}><Typography variant='h4' fontWeight={600}>OTP</Typography></Box>


                    <TextField type='password' label='OTP' sx={{ margin: '1vh' }} fullWidth />
                    <Button sx={{ marginTop: '2vh', marginBottom: '6vh' }} variant='contained' fullWidth><Typography variant='h5'> Submit</Typography>
                    </Button>
                </Paper>
            </Paper>
        </>
    )
}

export default OTP