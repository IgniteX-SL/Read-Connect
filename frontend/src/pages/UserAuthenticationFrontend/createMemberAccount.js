import React from 'react'
import './signup.css';
import LoginProfile from '../../img/loginprofile.png';
import SignUpImage from './signUpImage.jpg'
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import Welcome from "../../components/Welcome/Welcome";
import SideBar from '../../components/SideBar/SideBar';



export default function CreateMemberAccount() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    const role = "member";
    e.preventDefault()
    await signup({ email, password, name, role });
    clearForm();
  }
  function clearForm() {
    setEmail("");
    setPassword("");
    setName("");
  }
  return (
    <div>
      <div className='signUpPage'>
        <div className='sideBarContainor'>
          <SideBar />
        </div>
        <div className='signUpRight'>
          <div className='welcomeHolder'>
            <Welcome />
          </div>
          <div className='signUpPageHolder'>
            <div className='signUpPageLeft'>
              <img src={SignUpImage} className='signUpPageImage'></img>
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
                    <label>Name</label>
                    <input
                      type="text"
                      required
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />

                    <button type="submit" onClick={handleSubmit} className='submitBtnSignup' disabled={isLoading}><b>Create</b></button>
                    {error && <div className='errorSignup'>{error}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
