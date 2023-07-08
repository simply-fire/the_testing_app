import React, { useEffect, useState, useMo } from 'react'
import Cards from './Cards'
import { Box, Card, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import io from "socket.io-client";
import { useConductQuizContext } from '../../context/ConductQuizContext';

import Nav from './Navbar'
import axios from 'axios';



const socket = io.connect("http://localhost:3000");




const ExamCounductor = () => {

    const quizData = JSON.parse(localStorage.getItem('quiz-data') || '[]');
    console.log(quizData);
    const [cards, setCards] = useState([]);
    const { state } = useConductQuizContext()



    useEffect(() => {
        socket.on("eq", () => {

            console.log(quizData[0].testId, localStorage.getItem('stuEmail'));
            const id = localStorage.getItem('stuEmail')
            const tid = quizData[0].testId
            axios.post('http://localhost:3000/stuDashboard/SubmitExam', { ansSheet: localStorage.getItem('ansSheet'), emailId: id, testId: tid });
        })
    }, [socket])

    const populateCards = () => {

        setCards([]);
        for (let i = 0; i < quizData.length - 1; i++) {

            console.log(quizData[i]);
            if (quizData[i].questionType === 'Objective-question') {
                setCards(cards => [...cards, <Cards QT={quizData[i].questionType} key={quizData[i].questinNo} background='#e3f2fd' Qno={quizData[i].questinNo} Question={quizData[i].question}
                    option1={quizData[i].option1}
                    option2={quizData[i].option2}
                    option3={quizData[i].option3}
                    option4={quizData[i].option4} />])
                // if (thread !== null)
                //     setAnsObj({ ...ansObj, [quizData[i].questinNo]: thread })
            }
            if (quizData[i].questionType === 'Subjective-question') {
                setCards(cards => [...cards, <Cards QT={quizData[i].questionType} key={quizData[i].questinNo} background='#e3f2fd' Qno={quizData[i].questinNo} Question={quizData[i].question} />])
                // if (thread !== null)
                //     setAnsObj({ ...ansObj, [quizData[i].questinNo]: thread })
            }
        }
    }


    return (
        <>
            <Nav />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2vh' }}>
                <Box sx={{
                    height: '20vh', width: '75vw', marginLeft: '10px',
                    display: 'flex',
                    alignItems: 'top', justifyContent: 'end', margin: '1vh',
                    background: `#e3f2fd`, backgroundSize: 'cover',
                    ':hover': {
                        boxShadow: 10,
                        cursor: 'pointer'
                    },
                    borderLeft: 8,
                    borderColor: 'primary.dark',
                    boxSizing: 'border-box',
                    borderRadius: 2,
                    padding: '2vh',
                    flexDirection: 'column'
                }} >
                    {/* <Box fullWidth sx={{ background: 'url(create-exam-top-graphic.jpg)', backgroundSize: 'cover', width: '100%', height: '40%' }}></Box> */}
                    {/* <TextField label='Title' variant='standard' fullWidth sx={{ marginTop: '1vh', color: 'white' }} /> */}
                    <Typography variant='h3' sx={{ color: 'primary.dark', fontFamily: 'sans-serif' }}>{quizData[quizData.length - 1].title}</Typography>
                    <Typography sx={{ fontSize: '1rem', color: 'primary.dark', fontFamily: 'sans-serif' }}><b>Submit Before:</b> {localStorage.getItem('end').slice(0, 10)}  {localStorage.getItem('end').slice(11, 16)}</Typography>
                </Box>

                {useEffect(() => populateCards, [])}
                {cards.map((i) => (
                    i
                ))}
                {/* {console.log(ansObj)} */}


            </Box>

        </>
    )
}

export default ExamCounductor