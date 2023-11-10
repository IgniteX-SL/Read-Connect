import React from 'react'
import './signup.css';
import LoginProfile from '../../img/loginprofile.png';
import SignUpImage from './signUpImage.jpg'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SideBar from '../../components/SideBar/Sidebar';


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    const role = "member";
    e.preventDefault()
    await signup({ email, password, role });
    clearForm();
  }
  function clearForm() {
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <div className='signUpPage'>
        <div className='sideBarContainor'>
          <SideBar />
        </div>
        <div className='signUpPageLeft'>
          <img src= {SignUpImage} className='signUpPageImage'></img>
        </div>
        <div className='signUpPageRight'>
          <div className="signUpBack">
            <div className="signUpS">
              <img src={LoginProfile} className='signUpProfileImage'></img>
              <form onSubmit={handleSubmit}>
                <h3>Create Member Account</h3>
                <label>Email</label>
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label>Password</label>
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button type="submit" onClick={handleSubmit} className='submitBtnSignup' disabled={isLoading}><b>Create</b></button>
                {error && <div className='errorSignup'>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
