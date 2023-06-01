import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/material';
import TextBoxUpper from '../Text-Box/TextBoxUppeer';
import TextBoxLowerA from '../Text-Box/TextBoxLower-1';
import TextBoxLowerB from '../Text-Box/TextBoxLower-2';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
// import 


const Cards = (props) => {

    // const navigate = useNavigate();
    const [lowerCard, setLowerCard] = useState({})
    const changeLowerCard = (tip) => {

        console.log(tip);
        if (tip === 'Subjective-question')
            return <TextBoxLowerA />
        else if (tip === 'Objective-question')
            return <TextBoxLowerB />

    }

    const { render, questionType } = TextBoxUpper()

    return (

        <Box sx={{
            maxHeight: '50vh', width: '75vw', marginLeft: '10px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'left', justifyContent: 'top', flexWrap: 'wrap', margin: '1vh',
            backgroundColor: `${props.background}`, backgroundSize: 'cover',
            ':hover': {
                boxShadow: 10,
                cursor: 'pointer'
            }
        }} >

            {render}
            {changeLowerCard(questionType)}

            <Box sx={{ alignSelf: 'bottom' }}>
                <Tooltip title='delete question card'>
                    <IconButton onClick={() => props.delfunc(props.tip)}> <DeleteIcon sx={{ margin: '1vh', }} /> </IconButton>
                </Tooltip>
            </Box>
        </Box >

    )
}

export default Cards