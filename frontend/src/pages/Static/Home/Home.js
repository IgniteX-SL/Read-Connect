import React from 'react'
import Button from 'react-bootstrap/Button'
import './home.css'
import { Link } from 'react-router-dom';
import SideBar from '../../../components/SideBar/SideBar';
import backgroundImg from './backgroundImage.png';
import wave from './greenWave.png';
import { AuthContext } from '../../../context/AuthContext';
import { useLogout } from '../../../hooks/useLogout';

export default function Home() {
  const { user } = React.useContext(AuthContext);
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <div className="homeBackground">
        <div className="nameLogo">
          {/* <img src={NameLogo}  alt="Read Connect Logo"></img> */}
          <SideBar />
        </div>
        <div className='introImageWaveContainor'>
          <div className='introAndImageHolder'>
            <div className='introHolder'>
              <div className="intro">
                <h1>Welcome to Read Connect</h1>
                <p id='intro'>Read Connect is Your Gateway to Seamless Library Management! Enjoy a user-friendly experience . Connect with books effortlessly, whether you're a librarian, library staff, or member. Streamline registrations, manage books, get recommendations, and stay connected with notifications. Experience the future of library management with Read Connect.</p>
                <div>
                  {user ? (
                    <Button id='buttonHome' onClick={handleClick}>
                      Logout
                    </Button>
                  ) : (
                    <Button id='buttonHome'>
                      <Link to="/login" className='linkHome'>
                        Login
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className='backgroundImageHolder'>
              <img src={backgroundImg}></img>
            </div>
          </div>
          <div className='waveContainor'>
            <img src={wave}></img>
          </div>


        </div>
      </div>
    </div>
  )
}