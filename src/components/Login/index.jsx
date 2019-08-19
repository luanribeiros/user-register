import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Login = () => {
  return (
    <>
      <section className='Login'>
        <h1>Login to your Account</h1>
        <form className='LoginForm'>
          <label>
            Email address
            <br />
            <input type='email' placeholder='user@example.com' required />
            <br />
          </label>

          <label>
            Password
            <br />
            <input type='password' placeholder='******' required />
          </label>
        </form>
        <button>Login</button>
        <Link to='/register' className='LoginRegister'>
          Create account
        </Link>
      </section>
    </>
  )
}

export default Login
