import './LSstyle.css'
import { useState } from 'react'
const Spage = () => {

    const [Credentials, SetCred] = useState({ username: '', email: '', password: '' });
    return (
        <div className='pgCont'>
            <div className='center'>
                <h1 id='mainh'>Signup</h1>
                <form onSubmit={e => SetCred({ ...Credentials, username: document.getElementById('usrnm').value, email: document.getElementById('eml').value, password: document.getElementById('pswd').value })}>

                    <div className='txt_field'>
                        <input type='text' id='usrnm' required />
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div className='txt_field'>
                        <input type='email' id='eml' required />
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div className='txt_field'>
                        <input type='password' id='pswd' required />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <input type='submit' value='Signup' />

                    <div className='signup_link'>
                        Already have an account? <a href='./Lspage'>Login</a>
                    </div>

                </form>

                {/* <div>
                    {JSON.stringify(Credentials)}
                </div> */}
            </div >
        </div>


    )
}

export default Spage