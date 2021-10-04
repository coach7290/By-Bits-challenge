import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'



const Login = ({ username, password, setUsername, setPassword, getTokenThenData }) => {





    return (
        <div className='form-container'>
            <form>
                <h1>Sign in</h1>
                <label>User Name:</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' />
                <label>Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link onClick={() => getTokenThenData(username, password)} to={username === '' || password === '' ? '/' : '/profile'}><button type='submit'>Sign in</button></Link>
            </form>
        </div>
    )
}

export default Login
