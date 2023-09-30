import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import google from '../../images/google.svg'
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error =>{
            console.error(error, error.message);
        })
    }
    return (
        <div className='login-div'>
            <h2 className='login-text'>Login</h2>
            <form onSubmit={handleSignIn} className='form-container'>
                <div>
                <label className='label' htmlFor="email">Email</label>
                <input className='input-field' type="mail" name='email' placeholder='Email' />
                </div>
                <div>
                <label className='label' htmlFor="password">Password</label>
                <input className='input-field' type="password" name='password' placeholder='password' />
                </div>
                <button className='btn' type='submit'>Login</button>
            </form>
            <p className='transfer'>New to Ema-John? <Link to='/signup'>Create New Account</Link></p>
            <div className='underline'>
                <div className='line'></div>
                <p>or</p>
                <div className='line'></div>
            </div>
            <div>
                <button className='btn-2'>
                    <div className='continue-google'>
                        <img src={google} alt="" />
                        <p>Continue With Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Login;