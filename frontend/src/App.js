import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/UserAuthenticationFrontend/loginProfile';
import Signup from './pages/UserAuthenticationFrontend/SignUpProfile';
import ChangePassword from './pages/UserAuthenticationFrontend/changePassword';
import PackageFetch from './pages/Packages/packageFetch';
import AddServices from './pages/Services/ServicesAdd';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/addPackages" element={<AddPackages />} />
          <Route path="/addServices" element={<AddServices />}/>
          <Route path="/packageFetch" element={<PackageFetch />} />
          <Route path="/serviceFetch" element={<ServiceFetch />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
