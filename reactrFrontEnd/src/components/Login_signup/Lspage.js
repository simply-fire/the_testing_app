import './LSstyle.css'
import { useState } from 'react'

const Lspage = () => {

  const [Credentials, SetCred] = useState({ username: '', password: '' });
  return (
    <div className='pgCont'>
      <div className='center'>
        <h1 id='mainh'>Login</h1>
        <form onSubmit={e => SetCred({ ...Credentials, username: document.getElementById('usrnm').value, password: document.getElementById('pswd').value })}>

          <div className='txt_field'>
            <input type='text' id='usrnm' required />
            <span></span>
            <label>Username</label>
          </div>

          <div className='txt_field'>
            <input type='password' id='pswd' required />
            <span></span>
            <label>Password</label>
          </div>

          <div className='pass'>Forgot Password?</div>

          <input type='submit' value='Login' />

          <div className='signup_link'>
            Not a member? <a href='./Spage'>Signup</a>
          </div>

          {/* <div>
          {JSON.stringify(Credentials)}
        </div> */}

        </form>
      </div >
    </div>
  )
}

export default Lspage