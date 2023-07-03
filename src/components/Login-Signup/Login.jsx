import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import { Box, Button, Link, Paper, TextField, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import { useLogin } from '../../hooks/useLogin'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [identity, setIdentity] = useState('')
    const { login, error, isLoading } = useLogin()

    // const [cred, setCred] = useState({});
    var cred;

    const handleSubmit = async () => {

        cred = {

            email: email,
            password: password,
            identity: identity

        }

        await login(cred);

    }


    return (
        <>
            <Paper sx={{ boxSizing: 'border-box', height: '100vh', width: '100vw', background: 'linear-gradient(to right bottom,#d4f3fa,#0ca3f5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Paper elevation='10' sx={{ boxSizing: 'border-box', paddingLeft: '2vw', paddingRight: '2vw', width: '25vw', minheight: '40vh', borderRadius: '20px', display: 'flex', justifyContent: 'top', alignItems: 'center', flexDirection: 'column' }}>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', width: '100%', padding: '2vh', marginTop: '3vh' }}><Typography variant='h4' fontWeight={600}>Login</Typography></Box>
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

                    <TextField onChange={(event) => setEmail(event.target.value)} type='email' label='Email' sx={{ margin: '1vh' }} fullWidth />
                    <TextField onChange={(event) => setPassword(event.target.value)} type='password' label='Password' sx={{ margin: '1vh' }} fullWidth />
                    <Button onClick={handleSubmit} sx={{ margin: '1vh', marginTop: '3vh', marginBottom: '1vh', width: '100%' }} variant='contained' ><Typography variant='h6'>login</Typography>
                    </Button>

                    <Box sx={{ marginBottom: '4vh' }}><Typography>Don't have an account? <Link href='/Signup' >Signup</Link></Typography></Box>
                </Paper>
            </Paper>
        </>
    )
}

export default Login