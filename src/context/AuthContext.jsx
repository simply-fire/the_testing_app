import { createContext, useEffect, useReducer, useContext } from "react";


export const AuthContext = createContext();

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context)
        throw Error('useAuthContext must be used inside AuthContextProvider');

    return context;
};

export const AuthContextProvider = ({ children }) => {

    useEffect(() => {
        const user = localStorage.getItem('jwt');

        if (user) {
            dispatch({ type: 'Login', payload: user })
        }
    }, [])


    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'Login':
                return { user: action.payload }
            case 'Logout':
                return { user: null }
            default:
                return state
        }
    }, {
        user: null
    })




    console.log('AuthContext state : ' + state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}

