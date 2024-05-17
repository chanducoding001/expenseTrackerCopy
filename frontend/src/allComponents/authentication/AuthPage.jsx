import React from 'react'
import SignUpSlider from './SignUpSlider';
import './authStyles.css';
import Button from '../reusables/Button';
import {useNavigate} from 'react-router-dom';
const AuthPage = () => {
  const navigate = useNavigate();
  const handleSignUp = ()=>{
    console.log('sign up is pressed');
    navigate('/signUp');
  }
  const handleLogin = ()=>{
    console.log('login is pressed');
    navigate('/login');
  }
  return (
    <>
    <div className='signup-container'>
    <div className='signup-slider'><SignUpSlider/></div>
    <div className='signup-btns-container'>
      <Button text='Sign Up' bgColor='#7F3DFF' handleClick={handleSignUp}/>
      <Button text='Login' bgColor='#EEE5FF' handleClick={handleLogin}/>
    </div>
    </div>
    </>
  )
}

export default AuthPage;