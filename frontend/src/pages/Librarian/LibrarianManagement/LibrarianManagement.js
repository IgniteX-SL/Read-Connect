import React from "react";
import "./librarianManagement.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
function LibrarianManagement() {
    return (
        <div className="librarianManagementContainor">
            <div className="leftLibrarianManagementContainor">
                <SideBar />
            </div>
            <div className="rightLibrarianManagementContainor">
                <Welcome />
                <div className="librarianManagementtileContainor">
                    <h6><b>Librarian Management</b></h6>
                    <div className="librarianManagementTileRow">
                        <div className="librarianManagementTile">
                            <div className="textLibrarianContainor"><Link to="/registerLibrarian" className="link"><img src="https://cdn2.iconfinder.com/data/icons/back-to-school-solid/64/learn_School-28-512.png" /><br></br>Register Librarian</Link></div>
                        </div>
                        <div className="librarianManagementTile">
                            <div className="textLibrarianContainor"><Link to="/viewLibrarian" className="link"><img src="https://cdn2.iconfinder.com/data/icons/ui-22/24/522-512.png" /><br></br>View Librarian</Link></div>
                        </div>
                        <div className="librarianManagementTile">
                        <div className="textLibrarianContainor"><Link to="/createLibrarian" className="link"><img src="https://cdn3.iconfinder.com/data/icons/ios-edge-glyph-1/25/Add-Users-512.png" /><br></br>Create Librarian</Link></div>
                        </div>
                        <div className="librarianManagementTile">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default LibrarianManagement;