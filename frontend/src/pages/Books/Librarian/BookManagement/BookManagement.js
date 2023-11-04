import React from "react";
import "./bookManagement.css";
import SideBar from "../../../../components/SideBar/Sidebar";
import Welcome from "../../../../components/Welcome/Welcome";
function BookManagement() {
    return (
        <div className="bookManagementContainor">
            <div className="leftContainor">
                <SideBar />
            </div>
            <div className="rightContainor">
                <Welcome />
                <div className="bookManagementtileContainor">
                    <h6><b>Book Management</b></h6>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainor">Borrow Books</div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor">Return Books</div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor">Book Purchaising</div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor">Government Grants</div>
                        </div>
                    </div>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainor">Remove Books</div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor">Book Replacement</div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor">Book Donation</div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor">Add Books</div>
                        </div>
                    </div>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainor">Mark Damages</div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainor">Book Reservation</div>
                        </div>
                        <div className="bookManagementTile">

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