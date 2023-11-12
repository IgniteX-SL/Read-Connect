import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/UserAuthenticationFrontend/loginProfile';
import CreateLibrarian from './pages/UserAuthenticationFrontend/createLibrarianAccount';
import CreateLibraryStaff from './pages/UserAuthenticationFrontend/createLibraryStaffAccount';
import CreateMember from './pages/UserAuthenticationFrontend/createMemberAccount';
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
import MemberManagement from './pages/Member/MemberManagement/MemberManagement';
import LibraryStaffManagement from './pages/LibraryStaff/LibraryStaffManagement/LibraryStaffManagement';
import LibrarianDashboard from './pages/Librarian/librarianDashboard/LibrarianDashboard';
import RegisterMember from './pages/Member/RegisterMember/RegisterMember';
import RegisterLibraryStaff from './pages/LibraryStaff/RegisterLibraryStaff/RegisterLibraryStaff';
import RegisterLibrarian from './pages/Librarian/RegisterLibrarian/RegisterLibrarian';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/createLibrarian" element={<CreateLibrarian />} />
          <Route path="/createLibraryStaff" element={<CreateLibraryStaff />} />
          <Route path="/createMember" element={<CreateMember />} />
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
          <Route path="/memberManagement" element={<MemberManagement />} />
          <Route path="/libraryStaffManagement" element={<LibraryStaffManagement />} /> 
          <Route path="/librarianDashboard" element={<LibrarianDashboard />} /> 
          <Route path='/registerMembers' element={<RegisterMember />} />
          <Route path='/registerLibraryStaff' element={<RegisterLibraryStaff />} />
          <Route path='/registerLibrarian' element={<RegisterLibrarian />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
