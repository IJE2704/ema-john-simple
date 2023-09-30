import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import google from '../../images/google.svg'

const SignUp = () => {
    return (
        <div className='signup-div'>
            <h2 className='login-text'>Sign Up</h2>
            <form className='form-container'>
                <div>
                    <label className='label' htmlFor="email">Email</label>
                    <input className='input-field' type="mail" name='email' placeholder='Email' />
                </div>
                <div>
                    <label className='label' htmlFor="password">Password</label>
                    <input className='input-field' type="password" name='password' placeholder='password' />
                </div>
                <div>
                    <label className='label' htmlFor="password">Confirm Password</label>
                    <input className='input-field' type="password" name='confirm' placeholder='password' />
                </div>
                <button className='btn' type='submit'>Sign Up</button>
            </form>
            <p className='transfer'>Already have an account? <Link to='/login'>Login</Link></p>
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

export default SignUp;