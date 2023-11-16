import React from 'react';
import './login.css';
import LoginProfile from '../../img/loginprofile.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import loginPage from './loginImage.png'
import wave from './greenWave.png';
import SideBar from '../../components/SideBar/SideBar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    clearForm();
  };

  function clearForm() {
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <div className='loginPage'>
        <div className='sideBarContainor'>
          <SideBar />
        </div>
        <div className='loginPageHolder'>
          <div className='loginPageContainor'>
            <div className='loginPageLeft'>
              <img src={loginPage} className='loginPageImage'></img>
            </div>
            <div className='loginPageRight'>
              <div className="loginBack">
                <div className="loginS">
                  <img src={LoginProfile} alt="signinProfile" className='loginProfileImage'></img>
                  <form className='signin' onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
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

                    <div className='loginButton'>
                      <button
                        type="submit"
                        className='submitBtnLogin'
                        disabled={isLoading}
                      >
                        <b>Log in</b>
                      </button>
                    </div>
                    <div className="change-password-link">
                      <Link to="/changePassword">Change Password ?</Link>
                    </div>
                    {error && <div className='errorLogin'>{error}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='waveContainor'>
            <img src={wave}></img>
          </div>
        </div>

      </div>
    </div>
  );
}
