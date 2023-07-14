import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import axios from 'axios'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (cred) => {
        setIsLoading(true)
        setError(null)
        // localStorage.setItem('email', cred.email);


        // 
        axios.post('http://localhost:3000/authenticate/signup', cred, {
            headers: { "Content-Type": 'application/json' }
        })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    // console.log(res.data.token);
                    const token = res.data.token;
                    localStorage.setItem('jwt', token);
                    dispatch({ type: 'Login', payload: token });
                    setIsLoading(false)
                    if (res.data.identity === 'student') {
                        window.location.href = '/stuDashboard';
                        localStorage.setItem('stuEmail', res.data.email)
                        localStorage.setItem('identity', 'student')
                    }
                    else {
                        window.location.href = '/adminDashboard'
                        localStorage.setItem('email', res.data.email)
                        localStorage.setItem('identity', 'admin')
                    }
                }
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
                setError(json.error)
            });

    }

    return { signup, isLoading, error }
}