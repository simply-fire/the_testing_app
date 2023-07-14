import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'

const QuestionDisplayCards = (props) => {
    return (
        <>
            <Box sx={{
                width: '75vw', marginLeft: '10px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'left', justifyContent: 'top', flexWrap: 'wrap', margin: '1vh',
                backgroundColor: '#e3f2fd', backgroundSize: 'cover',
                ':hover': {
                    boxShadow: 10,
                    cursor: 'pointer'
                }
            }}
            >
                <Box sx={{ display: 'flex', minHeight: '32%', maxWidth: '100%', margin: '2vh', marginBottom: '3vh' }}>
                    <Box sx={{
                        width: '15%',
                        height: '100%', minHeight: '10vh', backgroundColor: 'white',
                        padding: '2vh', boxSizing: 'border-box',
                        paddingRight: '2vh', paddingLeft: '2vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'left'
                    }}>
                        <Typography variant='h6' sx={{ color: 'primary.dark' }}>Question-{props.no}</Typography>
                    </Box>
                    <Box sx={{
                        width: '85%',
                        height: '100%', minHeight: '10vh', backgroundColor: 'white',
                        padding: '2vh', boxSizing: 'border-box',
                        marginLeft: '2vh', paddingRight: '2vh', paddingLeft: '2vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'left'
                    }}>
                        <Typography> {props.question} </Typography>
                    </Box>

                </Box>

                <Box
                    sx={{
                        minHeight: '15vh',
                        maxWidth: '100%',
                        backgroundColor: 'white',
                        margin: '2vh',
                        boxSizing: 'border-box',
                        padding: '2vh'
                        // marginTop: '10'
                    }}
                >
                    {props.type === 'Objective-question' && <Box>
                        <Typography variant='h6' color='primary.dark'> Options </Typography>

                        <List>
                            <ListItem><Typography>1. {props.o1}</Typography></ListItem>
                            <ListItem><Typography>2. {props.o2}</Typography></ListItem>
                            <ListItem><Typography>3. {props.o3}</Typography></ListItem>
                            <ListItem><Typography>4. {props.o4}</Typography></ListItem>
                        </List>
                    </Box>}
                    <Typography variant='h6' color='primary.dark'> Marked Answer </Typography>

                    <Typography>{props.ans}</Typography>

                </Box>
            </Box >
        </>
    )
}

export default QuestionDisplayCards