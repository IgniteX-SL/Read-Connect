import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/UserAuthenticationFrontend/loginProfile';
import Signup from './pages/UserAuthenticationFrontend/SignUpProfile';
import ChangePassword from './pages/UserAuthenticationFrontend/changePassword';
import SideBar from './components/SideBar/Sidebar';
import Table from './components/Table/Table';
import Home from './pages/Static/Home/Home';
import BookManagement from './pages/Books/Librarian/BookManagement/BookManagement';
import BookBorrow from './pages/Books/Librarian/BookBorrow/bookBorrow';
import BookReturn from './pages/Books/Librarian/BookReturn/bookReturn';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/table" element={<Table />} />
          <Route path="/" element={<Home />} />
          <Route path="/bookManagement" element={<BookManagement />} />
          <Route path="/bookBorrow" element={<BookBorrow />} />
          <Route path="/bookReturn" element={<BookReturn />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
