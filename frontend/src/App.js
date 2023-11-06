import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/UserAuthenticationFrontend/loginProfile';
import Signup from './pages/UserAuthenticationFrontend/SignUpProfile';
import ChangePassword from './pages/UserAuthenticationFrontend/changePassword';
import Table from './components/Table/Table';
import Home from './pages/Static/Home/Home';
import BookManagement from './pages/Books/BookManagement/BookManagement';
import BookBorrow from './pages/Books/BookBorrow/bookBorrow';
import BookReturn from './pages/Books/BookReturn/bookReturn';
import BookPurchaiseAdd from './pages/Books/BookPurchaiseAdd/bookPurchaiseAdd';
import BookReplacement from './pages/Books/BookReplacement/bookReplacement';
import BookDonation from './pages/Books/BookDonation/BookDonation';
import BookDamages from './pages/Books/BookDamages/BookDamages';
import BookReservation from './pages/Books/BookReservation/BookReservation';
import BooksAdd from './pages/Books/BooksAdd/BooksAdd';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/table" element={<Table />} />
          <Route path="/" element={<Home />} />
          <Route path="/booksAdd" element={<BooksAdd />} />
          <Route path="/bookManagement" element={<BookManagement />} />
          <Route path="/bookBorrow" element={<BookBorrow />} />
          <Route path="/bookReturn" element={<BookReturn />} />
          <Route path="/bookPurchaiseAdd" element={<BookPurchaiseAdd />} />
          <Route path="/bookReplacement" element={<BookReplacement />} />
          <Route path="/bookDonation" element={<BookDonation />} />
          <Route path="/bookDamage" element={<BookDamages />} />    
          <Route path="/bookReservation" element={<BookReservation />} />      

        </Routes>

      </Router>

    </div>
  );
}

export default App;
