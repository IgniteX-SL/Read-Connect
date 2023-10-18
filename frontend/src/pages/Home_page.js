import React from 'react'
import Name_logo from '../img/name_logo.png'
import NavBar from '../components/NavBar'
import Button from 'react-bootstrap/Button'
import Footer from '../components/Footer'
import '../css file/Home_page.css'
import { Link } from 'react-router-dom';

export default function Home_page() {
  return (
    <div>
        <NavBar/>
        <div className="home_background">
            <div className="name_logo">
                <img src={Name_logo}  alt="name logo"></img>
            </div>
            <div className="intro">
                <p id='intro'><strong>Welcome to our Quarantine Center</strong><br/>A secure haven dedicated to safeguarding public health during contagious disease outbreaks. Our center provides a controlled environment, expert medical care, and essential support services for individuals requiring isolation. We prioritize your health and well-being, ensuring a comfortable stay while actively preventing the spread of infectious diseases.</p>
                <Button id='buttonHome'>
                  <Link to="/serviceFetch" className='linkHome'>
                    Explore Us
                  </Link>
                  
                </Button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
