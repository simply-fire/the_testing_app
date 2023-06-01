import React from 'react'
import Nav from './Navbar'
import { Box, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import Cards from './Cards'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';

const custom = () => {

    const [cardCount, setCardCount] = useState(2);
    const [cardElement, setCardElement] = useState([{
        id: 1,
        ele: <Cards background='#e3f2fd' tip={1} />
    }]);
    const insertCard = () => {

        setCardCount(cardCount => cardCount + 1);
        console.log(cardCount);

        setCardElement(cardElement =>
            [...cardElement, {
                id: cardCount,
                ele: <Cards delfunc={deleteCard} background='#e3f2fd' tip={cardCount} />
            }]
        )

    }

    const deleteCard = (key) => {
        setCardElement(current => current.filter((cardElement => {

            return cardElement.id !== key;
        })))
    }




    return (
        <>
            <Nav />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2vh' }}>
                <Box sx={{
                    height: '20vh', width: '75vw', marginLeft: '10px',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', margin: '1vh',
                    background: `#e3f2fd`, backgroundSize: 'cover',
                    ':hover': {
                        boxShadow: 10,
                        cursor: 'pointer'
                    },
                    borderLeft: 8,
                    borderColor: 'primary.dark',
                    boxSizing: 'border-box',
                    borderRadius: 2,
                    padding: '2vh'
                }} >
                    {/* <Box fullWidth sx={{ background: 'url(create-exam-top-graphic.jpg)', backgroundSize: 'cover', width: '100%', height: '40%' }}></Box> */}
                    <TextField label='Title' variant='standard' fullWidth sx={{ marginTop: '1vh', color: 'white' }} />
                </Box>

                {cardElement.map((i) => (
                    i.ele
                ))}

                <Box sx={{
                    boxSizing: 'border-box',
                    height: '8vh', width: '75vw', marginLeft: '10px',
                    display: 'flex',
                    alignItems: 'center', justifyContent: 'left', margin: '0.5vh',
                    backgroundColor: `#e3f2fd`,
                    ':hover': {
                        boxShadow: 10,
                        cursor: 'pointer'
                    },
                    paddingLeft: '2vh',
                    borderRadius: 2, flexGrow: 0
                }} >
                    <Tooltip title='New question'>
                        <IconButton onClick={insertCard} sx={{ padding: '0' }}>
                            <AddCircleOutlineIcon sx={{ color: 'primary.dark' }} fontSize='large' />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </>
    )
}

export default custom