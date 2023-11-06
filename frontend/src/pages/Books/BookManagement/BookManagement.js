import React from "react";
import "./bookManagement.css";
import SideBar from "../../../components/SideBar/Sidebar";
import Welcome from "../../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
function BookManagement() {
    return (
        <div className="bookManagementContainor">
            <div className="leftBookManagementContainor">
                <SideBar />
            </div>
            <div className="rightBookManagementContainor">
                <Welcome />
                <div className="bookManagementtileContainor">
                    <h6><b>Book Management</b></h6>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookBorrow" className="link">Borrow Books</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookReturn" className="link">Return Books</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookPurchaiseAdd" className="link">Book Purchaising</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookGovernmentGrants" className="link">Government Grants</Link></div>
                        </div>
                    </div>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookRemoveBooks" className="link">Remove Books</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookReplacement" className="link">Book Replacement</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookDonation" className="link">Book Donation</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/booksAdd" className="link">Add Books</Link></div>
                        </div>
                    </div>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookDamage" className="link">Mark Damages</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookReservation" className="link">Book Reservation</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor"><Link to="/bookStockTaking" className="link">Stock Taking</Link></div>
                        </div>
                        <div className="bookManagementTile">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BookManagement;