import { useContext, createContext, useReducer } from "react";

export const conductQuizContext = createContext();
export const useConductQuizContext = () => {

    const context = useContext(conductQuizContext);
    return context;
}
export const ConductQuizContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'readAll':
                return { ...state, [`Card${action.key}`]: action.instance }
            default:
                return state
        }
    }, {

    })

    return (
        <conductQuizContext.Provider value={{ state, dispatch }}>
            {children}
        </conductQuizContext.Provider>
    )
}