import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/UserAuthenticationFrontend/loginProfile';
import CreateLibrarian from './pages/UserAuthenticationFrontend/createLibrarianAccount';
import CreateLibraryStaff from './pages/UserAuthenticationFrontend/createLibraryStaffAccount';
import CreateMember from './pages/UserAuthenticationFrontend/createMemberAccount';
import CreateAdmin from './pages/UserAuthenticationFrontend/createAdminAccount';
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
import LibrarianManagement from './pages/Librarian/LibrarianManagement/LibrarianManagement';
import LibrarianDashboard from './pages/Librarian/librarianDashboard/LibrarianDashboard';
import RegisterMember from './pages/Member/RegisterMember/RegisterMember';
import RegisterLibraryStaff from './pages/LibraryStaff/RegisterLibraryStaff/RegisterLibraryStaff';
import RegisterLibrarian from './pages/Librarian/RegisterLibrarian/RegisterLibrarian';
import FineManagement from './pages/Member/FineManagement/FineManagement';
import Profile from './pages/common/Profile/Profile';
import HelpAndSupport from './pages/common/HelpAndSupport/HelpAndSupport';
import SystemLogs from './pages/Admin/SystemLogs/SystemLogs';
import ViewBorrowals from './pages/Books/BookBorrow/viewBorrowals';
import ViewReturns from './pages/Books/BookReturn/ViewBookReturn';
import ViewPurchaises from './pages/Books/BookPurchaiseAdd/viewPurchaises';
import ViewReservation from './pages/Books/BookReservation/viewReservation';
import ViewBookReplacement from './pages/Books/BookReplacement/viewBookReplacement';
import ViewBookDonations from './pages/Books/BookDonation/ViewDonations';
import ViewBooks from "./pages/Books/BooksAdd/ViewBooks";
import ViewBookDamages from "./pages/Books/BookDamages/viewBookDamages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/createLibrarian" element={<CreateLibrarian />} />
          <Route path="/createLibraryStaff" element={<CreateLibraryStaff />} />
          <Route path="/createMember" element={<CreateMember />} />
          <Route path="/createAdmin" element={<CreateAdmin />} />
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
          <Route path="/librarianManagement" element={<LibrarianManagement />} />
          <Route path="/librarianDashboard" element={<LibrarianDashboard />} /> 
          <Route path='/registerMembers' element={<RegisterMember />} />
          <Route path='/registerLibraryStaff' element={<RegisterLibraryStaff />} />
          <Route path='/registerLibrarian' element={<RegisterLibrarian />} />
          <Route path='/fineManagement' element={<FineManagement />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/helpAndSupport' element={<HelpAndSupport />} />
          <Route path='/systemLogs' element={<SystemLogs />} />
          <Route path='/viewBorrowals' element={<ViewBorrowals />} />
          <Route path='/viewReturns' element={<ViewReturns />} />
          <Route path="/viewPurchaises" element={<ViewPurchaises />} />
          <Route path="/viewReservation" element={<ViewReservation />} />
          <Route path="/viewBookReplacement" element={<ViewBookReplacement />} />
          <Route path="/viewDonations" element={<ViewBookDonations />} />
          <Route path="/viewBooks" element={<ViewBooks />} />
          <Route path="/viewBookDamages" element={<ViewBookDamages />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
