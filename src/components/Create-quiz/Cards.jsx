import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/material';
import TextBoxUpper from '../Text-Box/TextBoxUppeer';
import TextBoxLowerA from '../Text-Box/TextBoxLower-1';
import TextBoxLowerB from '../Text-Box/TextBoxLower-2';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useCreateQuiz } from '../../hooks/useCreateQuiz';
// import 


const Cards = (props) => {

    const { addQuestionDetails } = useCreateQuiz()

    // const navigate = useNavigate();
    // const [lowerCard, setLowerCard] = useState({})
    const changeLowerCard = (tip) => {

        console.log(tip);
        if (tip === 'Subjective-question')
            return <TextBoxLowerA />
        else if (tip === 'Objective-question')
            return render1

    }

    const [questionType, setQuestionType] = useState('');
    const [question, setQuestion] = useState('');
    const getUpperCardData = (question, questionType) => {
        setQuestionType(questionType);
        setQuestion(question);
    }

    const { value, o1, o2, o3, o4, render1 } = TextBoxLowerB()

    // useEffect(() => {
    //     props.getf(props.tip, questionType, o1, o2, o3, o4)
    // }, [questionType, o1, o2, o3, o4])

    // useEffect(()=>{
    //     dispatch(act)
    // },[o1,o2,o3,o4])
    useEffect(() => {

        if (questionType === 'Objective-question') {
            addQuestionDetails(props.tip, { Status: 'full', Question: question, Type: questionType, Option1: o1, Option2: o2, Option3: o3, Option4: o4 })
        }
        else {
            addQuestionDetails(props.tip, { Status: 'full', Question: question, Type: questionType, Option1: null, Option2: null, Option3: null, Option4: null })

        }
    }, [questionType, question, o1, o2, o3, o4,])
    return (

        <Box sx={{
            maxHeight: '50vh', width: '75vw', marginLeft: '10px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'left', justifyContent: 'top', flexWrap: 'wrap', margin: '1vh',
            backgroundColor: `${props.background}`, backgroundSize: 'cover',
            ':hover': {
                boxShadow: 10,
                cursor: 'pointer'
            }
        }}

        >

            <TextBoxUpper getData={getUpperCardData} />
            {changeLowerCard(questionType)}

            {/* {props.getf(props.tip, questionType, question, o1, o2, o3, o4)} */}
            {/* {o1 = 0} {o2 = 0}{o3 = 0} {o4 = 0} */}
            <Box sx={{ alignSelf: 'bottom' }}>
                <Tooltip title='delete question card'>
                    <IconButton onClick={() => props.delfunc(props.tip)}> <DeleteIcon sx={{ margin: '1vh', }} /> </IconButton>
                </Tooltip>
            </Box>
        </Box >

    )
}


export default Cards