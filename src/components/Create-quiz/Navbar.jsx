import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import axios from 'axios'
import { useState } from 'react';

import { useCreateQuizContext } from '../../context/CreateQuizContext';


const pages = [];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props) {

    // ***********
    const [drawer, setDrawer] = useState();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const { state } = useCreateQuizContext();

    const handleScheduleTest = () => {

        // console.log(state);
        const id = localStorage.getItem('email');
        const token = localStorage.getItem('jwt');

        console.log('By Nav', props.object)
        axios.post('http://localhost:3000/adminDashboard/createExam', state, {
            headers: {
                adminid: id,
                testid: `${id}${props.start}`,
                Scheduledatetime: props.start,
                title: props.title,
                authorization: token,
                end: props.end,
                section: props.section
            }
        })
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })

        axios.post('http://localhost:3000/adminDashboard/appendkey', {
            adminid: id, keys: {
                testId: `${id}${props.start}`,
                section: props.section
            }
        }, {
            headers: {
                authorization: token
            }
        })
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={handleScheduleTest} sx={{ p: 0 }}>
                                <Tooltip title='Click to Schedule the test'><Button ><ScheduleSendIcon fontSize='large' sx={{ color: 'white' }} /></Button></Tooltip >
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    );
}
export default ResponsiveAppBar;