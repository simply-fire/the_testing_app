import { Padding } from '@mui/icons-material'
import { Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio } from '@mui/material'
import React from 'react'

const TextBoxLower = () => {
    return (
        <>
            <Box
                sx={{
                    height: '35%',
                    maxWidth: '100%',
                    backgroundColor: 'white',
                    margin: '2vh',
                    boxSizing: 'border-box',
                    padding: '2vh'
                    // marginTop: '10'
                }}

            >
                <Typography fontWeight={600} fontSize='1rem' sx={{ color: 'grey' }}>Choose the correct answer</Typography>                <br />                <hr />
                <FormControl >
                    <RadioGroup row >
                        <FormControlLabel sx={{ marginRight: '5vw', marginLeft: '0' }} control={<Radio />} label='Option-1' value='1'></FormControlLabel>
                        <FormControlLabel sx={{ marginRight: '5vw', marginLeft: '2vh' }} control={<Radio />} label='Option-2' value='2'></FormControlLabel>
                        <FormControlLabel sx={{ marginRight: '5vw', marginLeft: '2vh' }} control={<Radio />} label='Option-3' value='3'></FormControlLabel>
                        <FormControlLabel sx={{ marginRight: '5vw', marginLeft: '2vh' }} control={<Radio />} label='Option-4' value='4'></FormControlLabel>
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default TextBoxLower