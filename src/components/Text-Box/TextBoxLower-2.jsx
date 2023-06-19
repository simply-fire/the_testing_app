import { Label, Padding } from '@mui/icons-material'
import { Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const TextBoxLower = (props) => {

    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }


    const [o1, seto1] = useState('')
    const [o2, seto2] = useState('')
    const [o3, seto3] = useState('')
    const [o4, seto4] = useState('')


    const handleOption_1_valueChange = (event) => {
        seto1(event.target.value)
        // console.log(o1);
    }
    const handleOption_2_valueChange = (event) => {
        seto2(event.target.value)
        // console.log(o2);
    }
    const handleOption_3_valueChange = (event) => {
        seto3(event.target.value)
    }
    const handleOption_4_valueChange = (event) => {
        seto4(event.target.value)
    }

    // console.log(o1, o2, o3, o4);
    return {

        value, o1, o2, o3, o4, render1: (
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
                    <Typography fontWeight={600} fontSize='1rem' sx={{ color: 'grey' }}>Choose the correct answer</Typography>                 <hr />
                    <FormControl sx={{ marginTop: '1vh' }}>
                        <RadioGroup row
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                control={<Radio />}
                                label={<TextField
                                    id='opt-1'
                                    variant='filled'
                                    onBlur={handleOption_1_valueChange}
                                />}
                                value='1' />

                            <FormControlLabel control={<Radio />} label={<TextField
                                id='opt-2'
                                variant='filled'
                                onBlur={handleOption_2_valueChange}
                            />} value='2' />

                            <FormControlLabel control={<Radio />} label={<TextField
                                id='opt-3'
                                variant='filled'
                                onBlur={handleOption_3_valueChange}
                            />} value='3' />

                            <FormControlLabel control={<Radio />} label={<TextField
                                id='opt-4'
                                variant='filled'
                                onBlur={handleOption_4_valueChange}
                            />} value='4' />
                        </RadioGroup>
                    </FormControl>

                </Box>


            </>
        )
    }
}

export default TextBoxLower