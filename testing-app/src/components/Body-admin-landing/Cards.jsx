import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const Cards = (props) => {
    return (
        <>
            <Card sx={{
                height: '30vh', width: '20vw', marginLeft: '10px',
                backgroundColor: 'white', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                backgroundImage: `url(${props.background})`, backgroundSize: 'cover',
                ':hover': {
                    boxShadow: 10,
                    border: 1,
                    borderColor: 'primary.dark',
                    cursor: 'pointer'
                }
            }}  >

                <CardMedia
                    // component='img'
                    image={props.media}
                    sx={{
                        boxSizing: 'border-box', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', height: '25vh', width: '25vh'
                    }}
                />
            </Card >
        </>
    )
}

export default Cards