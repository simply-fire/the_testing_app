import React, { useState } from 'react'
import { Box, Button, Link, Paper, TextField, Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import axios from 'axios';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [identity, setIdentity] = useState('')
    // const [cred, setCred] = useState({});
    var cred;

    const handleSubmit = () => {

        cred = {
            userName: name,
            email: email,
            password: password,
            identity: identity
        }

        console.log(cred);
        // axios.defaults.withCredentials = true;
        axios.post('http://localhost:3000/authenticate/signup', cred)
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) });
        // window.location.href = '/OTP';
    }


    return (
        <>
            <Paper sx={{ boxSizing: 'border-box', height: '100vh', width: '100vw', background: 'linear-gradient(to right bottom,#d4f3fa,#0ca3f5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Paper elevation='10' sx={{ boxSizing: 'border-box', paddingLeft: '2vw', paddingRight: '2vw', width: '25vw', minheight: '40vh', borderRadius: '20px', display: 'flex', justifyContent: 'top', alignItems: 'center', flexDirection: 'column' }}>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', width: '80%', padding: '2vh', marginTop: '3vh' }}><Typography variant='h4' fontWeight={600}>Signup</Typography></Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', width: '100%', padding: '1vh', }}>

                        <RadioGroup row
                            // value={value}
                            onChange={(e) => setIdentity(e.target.value)}
                        >
                            <FormControlLabel
                                control={<Radio />} label='Student' value='student' />

                            <FormControlLabel control={<Radio />} label='Admin' value='admin' />

                        </RadioGroup>
                    </Box>
                    <TextField onChange={(event) => setName(event.target.value)} label='Username' sx={{ margin: '1vh' }} fullWidth />
                    <TextField onChange={(event) => setEmail(event.target.value)} type='email' label='Email' sx={{ margin: '1vh' }} fullWidth />
                    <TextField onChange={(event) => setPassword(event.target.value)} type='password' label='Password' sx={{ margin: '1vh' }} fullWidth />
                    <Button onClick={handleSubmit} sx={{ margin: '1vh', marginTop: '1vh', marginBottom: '1vh' }} variant='contained' fullWidth><Typography variant='h5'>Sign Up</Typography>
                    </Button>
                    <Box sx={{ marginBottom: '4vh' }}><Typography> Have an account? <Link href='/Login' >Login</Link></Typography></Box>
                </Paper>
            </Paper>
        </>
    )
}

export default Signup