import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Login = () => {
  return (
    <>
      <section className='Register'>
        <h1>Create your Account</h1>
        <form className='RegisterForm'>
          <label>
            Complete name
            <br />
            <input type='text' placeholder='Name example' required />
            <br />
          </label>

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
            <br />
          </label>

          <label>
            Complete address
            <br />
            <input type='text' placeholder='Address ...' required />
            <br />
          </label>
        </form>
        <button>Register</button>
        <Link to='/' className='ToLogin'>
          Login
        </Link>
      </section>
    </>
  )
}

export default Login
