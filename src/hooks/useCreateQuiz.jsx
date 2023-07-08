import { useEffect } from "react";
import { useCreateQuizContext } from "../context/CreateQuizContext";


export const useCreateQuiz = () => {
    const { dispatch, state } = useCreateQuizContext()
    const addQuestionDetails = (No, instance) => {
        dispatch({ No: No, type: 'ADD', payload: instance });
    }
    const deleteQuestionDetails = (key) => {
        dispatch({ type: 'DELETE', key })
    }

    useEffect(() => { console.log(state) }, [state])
    return {
        addQuestionDetails, deleteQuestionDetails, state
    }
}
