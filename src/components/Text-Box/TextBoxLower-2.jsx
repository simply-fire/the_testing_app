import { Padding } from '@mui/icons-material'
import { Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio, TextField } from '@mui/material'
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
                <FormControl sx={{ marginTop: '1vh' }}>
                    <RadioGroup row >
                        <FormControlLabel
                            control={<Radio />}
                            label={<TextField
                                id='opt-1'
                                variant='filled'
                            />}
                            value='1'></FormControlLabel>

                        <FormControlLabel control={<Radio />} label={<TextField
                            id='opt-2'
                            variant='filled'
                        />} value='2'></FormControlLabel>

                        <FormControlLabel control={<Radio />} label={<TextField
                            id='opt-3'
                            variant='filled'
                        />} value='3'></FormControlLabel>

                        <FormControlLabel control={<Radio />} label={<TextField
                            id='opt-4'
                            variant='filled'
                        />} value='4'></FormControlLabel>
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default TextBoxLower