import React from 'react'
import Button from 'react-bootstrap/Button'
import './home.css'
import { Link } from 'react-router-dom';
import SideBar from '../../../components/SideBar/SideBar';

export default function Home() {
  return (
    <div>
      <div className="homeBackground">
        <div className="nameLogo">
          {/* <img src={NameLogo}  alt="Read Connect Logo"></img> */}
          <SideBar />
        </div>
        <div className='backgroundImageHolder'>
          <div className="intro">
            <h1>Welcome to Read Connect</h1>
            <p id='intro'><b>Read Connect is Your Gateway to Seamless Library Management! Enjoy a user-friendly experience . Connect with books effortlessly, whether you're a librarian, library staff, or member. Streamline registrations, manage books, get recommendations, and stay connected with notifications. Experience the future of library management with Read Connect.</b></p>
            <Button id='buttonHome'>
              <Link to="/login" className='linkHome'>
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}