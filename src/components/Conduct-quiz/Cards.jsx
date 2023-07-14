import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import CardQuestionDisplay from './CardQuestionDisplay';
import CardAnswerDisplay from './CardAnswerDisplay';
import { useConductQuiz } from '../../hooks/useConductQuiz';
import { useConductQuizContext } from '../../context/ConductQuizContext';

const Cards = (props) => {

    const [cardAns, setCardAns] = useState([]);
    const [ans, setAns] = useState('');
    const { readAnsers } = useConductQuiz()
    const { state } = useConductQuizContext()

    const fetchAns = (ans) => {
        setAns(ans)
    }

    useEffect(() => {
        if (props.QT === 'Subjective-question')
            readAnsers(props.Qno, { ans, Type: props.QT, key: props.Qno, Question: props.Question })
        else
            readAnsers(props.Qno, { ans, Type: props.QT, key: props.Qno, Question: props.Question, o1: props.option1, o2: props.option2, o3: props.option3, o4: props.option4 })

    }, [ans])

    const populateCardAns = () => {
        if (props.QT === 'Subjective-question')
            setCardAns(<CardAnswerDisplay QT='SQ' fetchAns={fetchAns} />);
        else {
            setCardAns(<CardAnswerDisplay QT='OQ' fetchAns={fetchAns} option1={props.option1}
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