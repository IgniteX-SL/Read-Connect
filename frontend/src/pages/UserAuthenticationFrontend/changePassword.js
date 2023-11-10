import React from 'react'
import './changepassword.css';
import NavBar from '../../components/NavBar/NavBar';
import ChangePageImage from './changePassword.jpg';
import LoginProfile from '../../img/loginprofile.png';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useChangePassword } from '../../hooks/useChangePassword';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ChnagePassword() {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const { changePassword, error, isLoading } = useChangePassword();

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    await changePassword({ email, currentPassword, newPassword, confirmNewPassword });
    clearForm();
  }

  function clearForm() {
    setEmail("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  }

  return (
    <div>
      <NavBar />
      <div className='changePasswordPage'>
        <div className='changePageLeft'>
          <img src={ChangePageImage} className='changePageImage'></img>
        </div>
        <div className='changePageRight'>
          <div className="changeBack">
            <div className="changeS">
              <img src={LoginProfile} className='loginProfileImage' />
              <form className='change' onSubmit={handlePasswordChange}>
                <h3>Change Password</h3>
                <Row className='md-2'>
                  <Col>
                    <label>Email</label>
                    <input
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Col>
                  <Col>
                    <label>Current Password</label>
                    <input
                      type="password"
                      required
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      value={currentPassword}
                    />
                  </Col>
                </Row>
                <Row className='md-2'>
                  <Col className='newPassword'>
                    <label>New Password</label>
                    <input
                      type="password"
                      required
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                    />
                  </Col>
                  <Col className='newPassword'>
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      required
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      value={confirmNewPassword}
                    />
                  </Col>

                </Row>
                <button type="submit" onClick={handlePasswordChange} className='changeBtn' disabled={isLoading}><b>Change</b></button>
                <div className="sign-in">
                  <Link to="/login">Sign In ?</Link>
                </div>
                {error && <div className='errorChangePassword'>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}  
