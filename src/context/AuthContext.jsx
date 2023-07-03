import { createContext, useEffect, useReducer, useContext } from "react";


export const AuthContext = createContext();
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context)
        throw Error('useAuthContext must be used inside AuthContextProvider');

    return context;
};

export const AuthContextProvider = ({ children }) => {
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

    useEffect(() => {
        const user = localStorage.getItem('user');

        if (user) {
            dispatch({ type: 'Login', payload: user })
        }
    }, [])

    console.log('AuthContext state : ' + state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}