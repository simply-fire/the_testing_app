import React from 'react'
import Nav from './Navbar'
import { Box, Card, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import Cards from './Cards'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import TextBoxUpper from '../Text-Box/TextBoxUppeer'
const custom = () => {

    // const { question, render, questionType, props } = Cards()
    const [cardValues, setCardValues] = useState({})

    // let newValue = {:''}
    // const pie = {};

    const getCardData = (key, Type, Question, o1, o2, o3, o4) => {
        if (Type === 'Subjective-question')
            setCardValues({ ...cardValues, [`Card${key}`]: { Type: Type, Question: Question, Status: 'full', Option1: 0, Option2: 0, Option3: 0, Option4: 0, id: key } })
        else if (Type === 'Objective-question')
            setCardValues({ ...cardValues, [`Card${key}`]: { Type: Type, Question: Question, Status: 'full', Option1: o1, Option2: o2, Option3: o3, Option4: o4, id: key } })
        // console.log(o1, o2, o3, o4);
    }
    console.log(cardValues);

    const [cardCount, setCardCount] = useState(2);

    const [cardElement, setCardElement] = useState([{
        id: 1,
        ele: <Cards delfunc={
            (key) => {
                setCardElement(current => current.filter((cardElement => {

                    return cardElement.id !== key;
                })))
                setCardValues(current => {

                    const copy = { ...current };
                    delete copy[`Card${key}`];
                    return copy;

                })
            }
        } background='#e3f2fd' tip={1} key='1' getf={getCardData} />
    }]);

    const insertCard = () => {

        setCardCount(cardCount => cardCount + 1);
        console.log(cardCount);

        setCardElement(cardElement =>
            [...cardElement, {
                id: cardCount,
                ele: <Cards delfunc={deleteCard} background='#e3f2fd' tip={cardCount} key={cardCount} getf={getCardData} />
            }]
        )

    }

    const deleteCard = (key) => {
        setCardElement(current => current.filter((cardElement => {

            return cardElement.id !== key;
        })))
        setCardValues(current => {

            const copy = { ...current };
            delete copy[`Card${key}`];
            return copy;

        })
    }

    return (
        <>
            <Nav object={cardValues} />

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