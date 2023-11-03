import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/UserAuthenticationFrontend/loginProfile';
import Signup from './pages/UserAuthenticationFrontend/SignUpProfile';
import ChangePassword from './pages/UserAuthenticationFrontend/changePassword';
import SideBar from './components/SideBar/Sidebar';
import Table from './components/Table/Table';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home_page />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/table" element={<Table />} />
          
        </Routes>

      </Router>

    </div>
  );
}

export default App;
