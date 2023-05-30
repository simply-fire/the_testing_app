import { Padding } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const TextBoxLower = () => {
    return (
        <>
            <Box
                sx={{
                    height: '35%',
                    maxWidth: '100%',
                    backgroundColor: 'white',
                    margin: '2vh',
                    boxSizing: 'border-box',
                    padding: '2vh'
                    // marginTop: '10'
                }}
            >
                <Typography fontWeight={600} fontSize='1rem' sx={{ color: 'grey' }}>Long answer type</Typography>                <br />                <hr />
                <br />
                <br />
                <hr />
            </Box>
        </>
    )
}

export default TextBoxLower