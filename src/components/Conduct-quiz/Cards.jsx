import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import CardQuestionDisplay from './CardQuestionDisplay';
import CardAnswerDisplay from './CardAnswerDisplay';


const Cards = (props) => {

    const [cardAns, setCardAns] = useState([]);

    const populateCardAns = () => {
        if (props.QT === 'Subjective-question')
            setCardAns(<CardAnswerDisplay QT='SQ' />);
        else {
            setCardAns(<CardAnswerDisplay QT='OQ' option1={props.option1}
                option2={props.option2}
                option3={props.option3}
                option4={props.option4} />)
        }
    }
    return (

        <Box sx={{
            width: '75vw', marginLeft: '10px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'left', justifyContent: 'top', flexWrap: 'wrap', margin: '1vh',
            backgroundColor: `${props.background}`, backgroundSize: 'cover',
            ':hover': {
                boxShadow: 10,
                cursor: 'pointer'
            }
        }}

        >

            <CardQuestionDisplay Qno={props.Qno} Question={props.Question} />
            {useEffect(() => populateCardAns, [])}
            {cardAns}
        </Box >

    )
}


export default Cards