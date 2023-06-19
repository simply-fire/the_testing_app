import { Padding } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import io from "socket.io-client";


const socket = io.connect("http://localhost:3000");

const Upcoming = () => {

    const [obj, setObj] = useState({ mad: "chkcb" });
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('Quiz_Not_Available')
    const [body, SetBody] = useState([]);



    useEffect(() => {
        socket.on("rm", (message) => {
            // console.log(data);
            setData(message)
            setTitle(message[message.length - 1].title)
            // data.splice(3,)
            // let tip = data.splice(3, 1)
            // console.log("this is", tip);
            // SetBody(tip);
            // SetBody(main)
        })
    }, [socket])

    return (
        <>
            <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e3f2fd' }}>
                <Button variant='outlined' color='primary' sx={{
                    width: '60vw', marginTop: '4vh', marginBottom: '4vh'
                }} onClick={() => { location.reload() }}>Click to Refresh</Button>


            </Paper>
            <Box sx={{ margin: '4vh', paddingTop: '2vh', background: '#e3f2fd', height: '20vh' }}>
                <Box sx={{ margin: '4vh', padding: '2vh', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography>
                        Quiz Title: {title}
                    </Typography>
                    <Box width='70%'></Box>
                    <Button variant='contained' disabled={title === 'Quiz_Not_Available'} onClick={() => {
                        localStorage.setItem('quiz-data', JSON.stringify(data))
                        // console.log(data);
                        window.location.href = '/ExamConductor'
                    }} >
                        Attempt Quiz
                    </Button>
                </Box>
            </Box>
        </>
    )
}


export default Upcoming