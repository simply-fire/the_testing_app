import { useEffect } from "react";
import { useConductQuizContext } from "../context/ConductQuizContext";

export const useConductQuiz = () => {

    const { state, dispatch } = useConductQuizContext();

    const readAnsers = (key, instance) => {
        dispatch({ type: 'readAll', key, instance })
    }
    useEffect(() => {
        console.log(state)
        localStorage.setItem('ansSheet', JSON.stringify(state))
    }, [state])
    return {
        readAnsers
    }
}