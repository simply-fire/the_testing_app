import { Box, Button, ButtonGroup, TextField, IconButton, MenuItem, FormControl } from '@mui/material'
import React, { useEffect } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';
import { render } from 'react-dom';
import { useCreateQuiz } from '../../hooks/useCreateQuiz'



const TextBox = (props) => {

    const { addQuestionDetails } = useCreateQuiz();

    const [questionType, setQuestionType] = useState('')
    const [question, setQuestion] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value);
        setQuestionType(event.target.value)
    };

    const handleChange1 = (event) => {
        setQuestion(event.target.value)
    };

    useEffect(() => {
        props.getData(question, questionType)
    }, [question, questionType])

    return (



        <Box sx={{ display: 'flex', height: '32%', maxWidth: '100%', margin: '2vh', marginBottom: '3vh' }}>
            {/* <FormControl> */}

            <Box sx={{ width: '80%', height: '100%', minHeight: '15vh', backgroundColor: 'white', paddingRight: '2vh', paddingLeft: '2vh' }}>
                <TextField
                    label="Question"
                    variant="outlined"
                    sx={{
                        marginTop: '2vh',
                        width: '100%',

                    }}
                    onChange={handleChange1}
                />

                <Box sx={{
                    // margin: '1vh',

                    marginLeft: '2vh',
                    display: 'flex'
                }}>
                    <ButtonGroup variant='outlined'>
                        <IconButton><FormatBoldIcon sx={{ color: 'primary.dark' }} fontSize='medium' /></IconButton>
                        <IconButton><FormatItalicIcon sx={{ color: 'primary.dark' }} fontSize='medium' /></IconButton>
                        <IconButton><FormatUnderlinedIcon sx={{ color: 'primary.dark' }} fontSize='medium' /></IconButton>
                    </ButtonGroup>
                </Box>
            </Box>
            <Box sx={{ width: '20%', height: '100%', minHeight: '15vh', backgroundColor: 'white', marginLeft: '2vh', paddingRight: '2vh', paddingLeft: '2vh' }}>
                <TextField
                    label='Question type'
                    select
                    value={questionType}
                    onChange={handleChange}

                    sx={{
                        marginTop: '2vh',
                        width: '100%'
                    }}
                >
                    <MenuItem value='Subjective-question'>Subjective-question</MenuItem>
                    <MenuItem value='Objective-question'>Objective-question</MenuItem>
                </TextField>
            </Box>
            {/* </FormControl> */}
        </Box>

    )

}

export default TextBox