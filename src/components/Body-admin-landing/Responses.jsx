import React, { useEffect, useRef } from 'react'
import {
    AccordionDetails, AccordionSummary, Accordion, Box, Button,
    FormControl, IconButton, InputLabel,
    MenuItem, Paper, Select,
    TextField, Typography,
    Table, TableBody, TableCell, TableRow, TableHead, TableContainer
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useExamDataContext } from '../../context/ExamDataContest';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Responses = () => {

    // const refreshRan = useRef('false');
    const navigate = useNavigate();
    const { state } = useExamDataContext();




    // useEffect(() => {
    //     window.location.reload();
    // }, [localStorage])

    return (
        <>

            {/* {window.location.reload()} */}
            <Paper
                elevation={10}
                sx={{
                    width: '100vw',
                    height: '17vh',
                    boxSizing: 'border-box',
                    backgroundColor: 'primary.main',
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'sticky',
                    padding: '2vh'
                }}>
                <Typography sx={{ color: 'white' }} variant='h2'>Responses</Typography>

            </Paper>

            <Paper
                sx={{
                    margin: '5vh'
                }}>
                {/* {localStorage.getItem('Response')} */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                            >
                                <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Serial No</TableCell>
                                <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Student ID</TableCell>
                                <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >Student ID</TableCell>
                                <TableCell sx={{ boxSizing: 'border-box', width: '25%', display: 'flex', justifyContent: 'center' }} >See More</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {JSON.parse(localStorage.getItem('Response')).map((data, index) => (
                                <TableRow
                                    key={index + 1}
                                    sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                >

                                    <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }}   >{index + 1}</TableCell>
                                    <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} >{data.StudentId}</TableCell>
                                    <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} >{data.testId}</TableCell>
                                    <TableCell sx={{ width: '25%', display: 'flex', justifyContent: 'center' }} ><Button onClick={() => {
                                        // await dispatch({ type: 'DataCarrier', data: data })
                                        localStorage.setItem('answers', JSON.stringify(data))
                                        location.reload();
                                        window.location.href = '/adminDashboard/Responses/AnswerSheet'
                                    }} variant='contained'>See More</Button></TableCell>
                                </TableRow>

                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </>
    )
}

export default Responses