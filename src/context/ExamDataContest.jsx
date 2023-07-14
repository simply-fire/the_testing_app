import { createContext, useContext, useReducer } from "react";

export const ExamDataContext = createContext();

export const useExamDataContext = () => {
    return useContext(ExamDataContext);
}

export const ExamDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'DataCarrier':
                return { ...state, val: action.data }
            default:
                return state;
        }
    }, {

    })

    console.log("Log from ExamDataContext" + JSON.stringify(state));

    return (
        <ExamDataContext.Provider value={{ state, dispatch }}>
            {children}
        </ExamDataContext.Provider>
    )
}