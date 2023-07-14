import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import QuestionDisplayCards from './QuestionDisplayCards'


const AnswerSheet = () => {

    var arr = [];

    const answers = JSON.parse(localStorage.getItem('answers')).ansObject;
    var keys = Object.keys(answers);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        arr[i] = answers[key];
    }

    return (
        <>
            {/* <Box sx={{ boxSizing: 'border-box', maxwidth: '100vw' }}> */}
            <Paper
                elevation={10}
                sx={{
                    maxWidth: '100vw',
                    height: '17vh',
                    boxSizing: 'border-box',
                    backgroundColor: 'primary.main',
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    // alignItems: 'end',
                    position: 'sticky',
                    padding: '2vh',
                    paddingLeft: '2vh'
                }}>
                <Typography sx={{ color: 'white' }} variant='h2'>Answer Sheet</Typography>
                <Typography variant='h5' sx={{ color: 'white', marginBottom: '1vh', marginLeft: '1vw' }}>Student Id: {JSON.parse(localStorage.getItem('answers')).StudentId} </Typography>
                <Typography></Typography>
            </Paper>

            <Box sx={{ display: 'flex', marginTop: '5vh', alignItems: 'center', flexDirection: 'column' }}>
                {arr.map((data, index) => (

                    <QuestionDisplayCards o1={data.o1} o2={data.o2} o3={data.o3} o4={data.o4} type={data.Type} key={index} no={index + 1} question={data.Question} ans={data.ans} />
                ))}
            </Box>
            {/* </Box> */}
        </>
    )
}

export default AnswerSheet  