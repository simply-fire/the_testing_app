import React, { useEffect, useState } from 'react'
// import { Box } from '@mui/material'
import { Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio, TextField, IconButton, ButtonGroup } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';




const CardAnswerDisplay = (props) => {



    const [card, setCard] = useState();
    const [marked, setMarked] = useState();
    const handleChange = (e) => {
        setMarked(e.target.value)
        // console.log("Log from ansdisplay ", e.target.value);
        // props.fetchAns({ ans: e.target.value, type: props.QT })
    }

    useEffect(() => {
        props.fetchAns(marked);
    }, [marked])

    const populateCard = () => {
        if (props.QT === 'OQ') {
            setCard(<Box
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
                <Typography fontWeight={600} fontSize='1rem' sx={{ color: 'grey' }}>Choose the correct answer</Typography>                         <hr />
                <FormControl sx={{ marginTop: '1vh' }}>
                    <RadioGroup row
                        sx={{ display: 'flex', flexDirection: 'column' }}
                        value={marked}
                        onChange={handleChange}
                    >
                        <FormControlLabel control={<Radio />} label={<Typography>{props.option1}</Typography>} value='1' />
                        <FormControlLabel control={<Radio />} label={<Typography>{props.option2}</Typography>} value='2' />
                        <FormControlLabel control={<Radio />} label={<Typography>{props.option3}</Typography>} value='3' />
                        <FormControlLabel control={<Radio />} label={<Typography>{props.option4}</Typography>} value='4' />

                    </RadioGroup>
                </FormControl>

            </Box>
            )
        }
        else if (props.QT === 'SQ') {
            setCard(<Box
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
                <Typography fontWeight={600} fontSize='1rem' sx={{ color: 'grey' }}>Subjective type Answer</Typography>                         <hr />
                <ButtonGroup variant='outlined' sx={{ marginTop: '2vh' }}>
                    <IconButton ><FormatBoldIcon sx={{ color: 'primary.dark' }} fontSize='medium' /></IconButton>
                    <IconButton><FormatItalicIcon sx={{ color: 'primary.dark' }} fontSize='medium' /></IconButton>
                    <IconButton><FormatUnderlinedIcon sx={{ color: 'primary.dark' }} fontSize='medium' /></IconButton>
                </ButtonGroup>
                <TextField onChange={handleChange}
                    fullWidth />

            </Box>)
        }
    }
    return (

        <>
            {useEffect(() => populateCard, [])}
            {card}
        </>
    )
}

export default CardAnswerDisplay