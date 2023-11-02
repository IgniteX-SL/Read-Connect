import React from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function SideBar() {
  const arrows = document.querySelectorAll(".arrow");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      const arrowParent = e.target.closest(".arrow").parentElement.parentElement;
      arrowParent.classNameList.toggle("showMenu");
    });
  });

  const sidebar = document.querySelector(".sidebar");
  const sidebarBtn = document.querySelector(".bx-menu");

  sidebarBtn.addEventListener("click", () => {
    sidebar.classNameList.toggle("close");
  });


  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxs-pyramid'></i>
          <span className="logo_name">DashBoard</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className='bx bx-grid-alt'></i>
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Category</a></li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className='bx bx-collection'></i>
                <span className="link_name">Category</span>
              </a>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Category</a></li>
              <li><a href="#">HTML & CSS</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">PHP & MySQL</a></li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className='bx bx-book-alt'></i>
                <span className="link_name">Posts</span>
              </a>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Posts</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Form</a></li>
              <li><a href="#">Card Design</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-pie-chart-alt-2'></i>
              <span className="link_name">Analytics</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Analytics</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-line-chart'></i>
              <span className="link_name">Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Chart</a></li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className='bx bx-plug'></i>
                <span className="link_name">Plugins</span>
              </a>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Plugins</a></li>
              <li><a href="#">UI Face</a></li>
              <li><a href="#">Pigments</a></li>
              <li><a href="#">Box Icons</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-compass'></i>
              <span className="link_name">Explore</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Explore</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-history'></i>
              <span className="link_name">History</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">History</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-cog'></i>
              <span className="link_name">Setting</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Setting</a></li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src="http://placebeard.it/250/250" alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">Farid Vatani</div>
                <div className="job">Software Engineer</div>
              </div>
              <i className='bx bx-log-out'></i>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className='bx bx-menu'></i>
          <span className="text">DashBoard Sidebar</span>
        </div>
      </section>
    </div>
  );
}

export default SideBar;
