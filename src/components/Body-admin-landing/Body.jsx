import React, { useEffect, useRef } from 'react'
import Nav from "../Navbar-admin-landing/Navbar";
import {
    Paper, Box, Stack, Typography, Accordion,
    AccordionSummary,
    AccordionDetails,
    Table, TableBody, TableCell, TableRow, TableHead, TableContainer, Button
} from '@mui/material';
import Card from './Cards'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import axios from 'axios';
import { useExamDataContext } from '../../context/ExamDataContest';
import { useNavigate } from 'react-router-dom';

const body = () => {

    const { state, dispatch } = useExamDataContext();
    const navigate = useNavigate();
    const effectRan = useRef(false);

    const clearNull = (arr) => {
        var ret = arr.filter(ele => {
            return ele !== null
        })

        return ret
    }

    useEffect(() => {
        if (effectRan.current === false) {
            axios.get('http://localhost:3000/adminDashboard/getAdata', {
                headers: {
                    authorization: localStorage.getItem('jwt'),
                    adminid: localStorage.getItem('email')
                }
            })
                .then((res) => {
                    console.log('Section-A', clearNull(res.data.Qdata))
                    localStorage.setItem('sectionA', JSON.stringify(clearNull(res.data.Qdata)))
                })
                .catch((err) => { console.log(err) })

            axios.get('http://localhost:3000/adminDashboard/getBdata', {
                headers: {
                    adminid: localStorage.getItem('email'),
                    authorization: localStorage.getItem('jwt')
                }
            })
                .then((res) => {
                    console.log('Section-B', clearNull(res.data.Qdata))
                    localStorage.setItem('sectionB', JSON.stringify(clearNull(res.data.Qdata)))
                })
                .catch((err) => { console.log(err) })

            axios.get('http://localhost:3000/adminDashboard/getCdata', {
                headers: {
                    adminid: localStorage.getItem('email'),
                    authorization: localStorage.getItem('jwt')
                }
            })
                .then((res) => {
                    console.log('Section-C', clearNull(res.data.Qdata))
                    localStorage.setItem('sectionC', JSON.stringify(clearNull(res.data.Qdata)));
                })
                .catch((err) => { console.log(err) })

            return () => { effectRan.current = true }
        }
    }, [])

    const myfunc = () => {
        // console.log(JSON.parse(localStorage.getItem('Qdata'))[0].testId);
        axios.get('http://localhost:3000/adminDashboard/responses', {
            headers: {
                authorization: localStorage.getItem('jwt'),
                testid: JSON.parse(localStorage.getItem('Qdata'))[0].testId
            }
        }).then((res) => {
            console.log(res)
            localStorage.setItem('Response', JSON.stringify(res.data))
        })
            .catch((err) => console.log(err))
    }



    return (
        <>
            <Nav />


            <Paper elevation={2} sx={{
                backgroundColor: '#e3f2fd',
                minHeight: '35vh', minWidth: '100%', padding: '1vh',
                paddingTop: '1vh', paddingBottom: '3vh', display: 'flex', flexDirection: 'column'

            }} >
                <Typography fontWeight='500' color='primary.dark' fontSize='1.2rem' sx={{ float: 'left', marginLeft: '12vw', marginBottom: '2vh' }}>
                    Create a new quiz
                </Typography>
                <Box sx={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                }}>
                    <Stack spacing={15} direction='row'>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Custom Quiz" media='add.png' background='add-background.jpg' oncl="/CreateCustomQuiz" />
                            <Typography fontWeight='600' marginTop='1vh' color='primary.dark'>Custom-Quiz</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Subjective Quiz" media='add-rest.png' background='add-subjective-quiz.jpg' oncl="/CreateSubjectiveQuiz" />
                            <Typography fontWeight='600' marginTop='1vh' color='primary.dark'>Subjective-Quiz</Typography>

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Card name="Objective Quiz" media='add-rest.png' background='add-objective-quiz.jpg' oncl="/CreateObjectiveQuiz" />
                            <Typography fontWeight='600' marginTop='1vh' color='primary.dark'>Objective-Quiz</Typography>

                        </Box>
                    </Stack>
                </Box>

            </Paper>

            <Paper
                sx={{
                    backgroundColor: '#eeeee',
                    minWidth: '100%',
                    padding: '2vh', display: 'flex', flexDirection: 'column',

                }}
            >
                <Typography fontWeight='600' color='primary.dark' fontSize='1.2rem' sx={{ float: 'left', marginLeft: '12vw', marginBottom: '2vh' }}>
                    My quizes
                </Typography>
                <Box sx={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'left', justifyContent: 'center',
                    paddingLeft: '5vw', paddingRight: '5vw'
                }}>

                    <Accordion sx={{ background: '#e3f2fd', margin: '1vh' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>CLass-A</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                        >
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Serial No</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >TestID</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Title</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >See More</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {JSON.parse(localStorage.getItem('sectionA')).map((data, index) => (
                                            <TableRow
                                                key={index + 1}
                                                sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                            >

                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }}   >{index + 1}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} >{data[0].testId}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} >{data[0].title}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} ><Button onClick={() => {
                                                    // await dispatch({ type: 'DataCarrier', data: data })
                                                    localStorage.setItem('Qdata', JSON.stringify(data))
                                                    myfunc()
                                                    window.location.href = '/adminDashboard/Responses'
                                                }} variant='contained'>See More</Button></TableCell>
                                            </TableRow>

                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ background: '#e3f2fd', margin: '1vh' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>CLass-B</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                        >
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Serial No</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >TestID</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Title</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >See More</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {JSON.parse(localStorage.getItem('sectionB')).map((data, index) => (
                                            <TableRow
                                                key={index + 1}
                                                sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                            >

                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }}   >{index + 1}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} >{data[0].testId}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} >{data[0].title}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} ><Button onClick={() => {
                                                    // await dispatch({ type: 'DataCarrier', data: data })
                                                    localStorage.setItem('Qdata', JSON.stringify(data))
                                                    myfunc()
                                                    window.location.href = '/adminDashboard/Responses'
                                                }} variant='contained'>See More</Button></TableCell>
                                            </TableRow>

                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ background: '#e3f2fd', margin: '1vh' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Class-C</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                        >
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Serial No</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >TestID</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Title</TableCell>
                                            <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >See More</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {JSON.parse(localStorage.getItem('sectionC')).map((data, index) => (
                                            <TableRow
                                                key={index + 1}
                                                sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                            >

                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }}   >{index + 1}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} >{data[0].testId}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} >{data[0].title}</TableCell>
                                                <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} ><Button onClick={() => {
                                                    // await dispatch({ type: 'DataCarrier', data: data })
                                                    localStorage.setItem('Qdata', JSON.stringify(data))
                                                    myfunc()
                                                    navigate('Responses')
                                                }} variant='contained'>See More</Button></TableCell>
                                            </TableRow>

                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </AccordionDetails>
                    </Accordion>

                </Box>
            </Paper>


        </>
    )
}

export default body