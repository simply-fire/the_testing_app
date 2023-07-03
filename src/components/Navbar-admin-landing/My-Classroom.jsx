import {
    AccordionDetails, AccordionSummary, Accordion, Box, Button,
    FormControl, IconButton, InputLabel,
    MenuItem, Paper, Select,
    TextField, Typography,
    Table, TableBody, TableCell, TableRow, TableHead, TableContainer
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { pink } from '@mui/material/colors';
const MyClassroom = () => {

    var cred;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [clas, setClas] = useState('');

    const handleSubmit = async () => {
        cred = {
            name: name,
            email: email,
            section: clas,
            adminId: localStorage.getItem('email')
        };
        console.log(cred);
        const token = localStorage.getItem('jwt');
        await axios.post('http://localhost:3000/adminDashboard/MyClassroom/addStudent', cred, {
            headers: {
                authorization: token
            }
        }).then(console.log(cred)).catch((err) => { console.log(err); });

        location.reload()
    }

    const [class_A, useClassA] = useState(null);
    const [class_B, useClassB] = useState(null);
    const [class_C, useClassC] = useState(null);

    const populateArrays = (a, b, c) => {

        useClassA(a);
        useClassB(b);
        useClassC(c);


        console.log("from here " + class_A);
    }

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        const emailId = localStorage.getItem('email');
        // console.log(emailID);
        axios.get('http://localhost:3000/adminDashboard/Myclassroom/getStudents', {
            headers: {
                authorization: token,
                email: emailId
            }
        })
            .then((res) => {
                populateArrays(res.data.class_A, res.data.class_B, res.data.class_C);
            })
            .catch((err) => { console.log(err); })
    }, [])

    return (
        <>

            <Paper
                elevation={10}
                sx={{
                    width: '100vw',
                    height: '40vh',
                    boxSizing: 'border-box',
                    backgroundColor: '#33a7ff',
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    position: 'sticky'

                }}>
                <Box sx={{
                    backgroundColor: 'white',
                    padding: '2vh',
                    margin: '5vh',
                    boxSizing: 'border-box',
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'end',

                }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ margin: '2vh', marginBottom: 0 }} variant='h6' fontWeight={600}> Add a Student </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        margin: '2vh',
                        boxSizing: 'border-box',


                    }}>
                        <TextField onChange={(e) => { setName(e.target.value) }} sx={{ marginRight: '2vh', width: '35%' }} label='Name' />
                        <TextField onChange={(e) => { setEmail(e.target.value) }} type='email' sx={{ marginRight: '2vh', width: '35%' }} label='Email' />
                        {/* <Selection /> */}
                        <FormControl sx={{ marginRight: '2vh', width: '20%' }}>
                            <InputLabel id="tipojf">Select-Class</InputLabel>
                            <Select labelId='tipojf' value={clas} onChange={(e) => { setClas(e.target.value) }}>
                                <MenuItem value='A'>Class-A</MenuItem>
                                <MenuItem value='B'>Class-B</MenuItem>
                                <MenuItem value='C'>Class-C</MenuItem>

                            </Select>
                        </FormControl>
                        <Button onClick={handleSubmit} variant='contained' sx={{
                            width: '10%', background: '#058df5', ":hover": {
                                background: '#d8dee3',
                                color: 'black'
                            }
                        }} endIcon={<AddBoxIcon />}> ADD  </Button>

                    </Box>

                </Box>
            </Paper>

            <Box
                sx={{
                    minHeight: '40vh',
                    margin: '5vh',
                    backgroundColor: 'rgba(179, 229, 255, 0.3)',
                    padding: '5vh',
                    boxSizing: 'border-box'
                }}>

                {/* Acordions Begin */}
                <Accordion sx={{ marginBottom: '2vh' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                    // id="panel2a-header"
                    >
                        <Typography>Class-A</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                    >
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Serial No</TableCell>
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Name</TableCell>
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {class_A && class_A.map((row, index) => (
                                        <TableRow
                                            key={index + 1}
                                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                        >
                                            {/* <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell> */}
                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }}   >{index + 1}</TableCell>
                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }} >{row.name}</TableCell>
                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }} >{row.email}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>


                <Accordion sx={{ marginBottom: '2vh' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                    // id="panel2a-header"
                    >
                        <Typography>Class-B</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                    >
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Serial No</TableCell>
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Name</TableCell>
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {class_B && class_B.map((row, index) => (
                                        <TableRow
                                            key={index + 1}
                                            sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                        >

                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }}   >{index + 1}</TableCell>
                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }} >{row.name}</TableCell>
                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }} >{row.email}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>


                <Accordion sx={{ marginBottom: '2vh' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                    // id="panel2a-header"
                    >
                        <Typography>Class-C</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                    >
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Serial No</TableCell>
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Name</TableCell>
                                        <TableCell sx={{ boxSizing: 'border-box', width: '33.33%', display: 'flex', justifyContent: 'center' }} >Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {class_C && class_C.map((row, index) => (
                                        <TableRow
                                            key={index + 1}
                                            sx={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}
                                        >

                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }}   >{index + 1}</TableCell>
                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }} >{row.name}</TableCell>
                                            <TableCell sx={{ width: '33.33%', display: 'flex', justifyContent: 'center' }} >{row.email}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>

            </Box >
        </>
    )
}

export default MyClassroom