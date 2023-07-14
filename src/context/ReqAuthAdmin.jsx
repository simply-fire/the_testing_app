import React from 'react'
import { useAuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export const ReqAuth = ({ children }) => {

    // const navigate = useNavigate();
    // const { ...state } = useAuthContext();
    const user = localStorage.getItem('jwt');
    const identity = localStorage.getItem('identity');
    if (!user)
        return <Navigate to='/' />
    else {
        axios.post('http://localhost:3000/adminDashboard/verifyAdmin', { identity }, { headers: { authorization: user } })
            .then((res) => {
                console.log("in then");
                console.log(res);
                if (res.data.identity !== 'admin')
                    window.location.href = '/'
            })
            .catch((err) => {
                console.log(err);
                window.location.href = '/'
            })
    }

    return children;
}












