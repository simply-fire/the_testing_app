import { createContext, useContext, useReducer } from "react";

export const CreateQuizContext = createContext();

// Use context hook
export const useCreateQuizContext = () => {
    const context = useContext(CreateQuizContext);
    if (!context)
        throw Error('useAuthContext must be used inside AuthContextProvider');
    return context;
}
// hook Ends

export const CreateQuizContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ADD':
                return { ...state, [`Card${action.No}`]: action.payload }
            case 'DELETE':
                const { [`Card${action.key}`]: removedProperty, ...rest } = state;
                return rest

            default:
                return state
        }
    }, {})
    console.log('CreateQuizContext state : ' + JSON.stringify(state));

    return (
        <CreateQuizContext.Provider value={{ state, dispatch }}>
            {children}
        </CreateQuizContext.Provider>
    )

}