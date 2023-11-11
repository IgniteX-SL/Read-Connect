import React from "react";
import "./libraryStaffManagement.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
function LibraryStaffManagement() {
    return (
        <div className="libraryStaffManagementContainor">
            <div className="leftLibraryStaffManagementContainor">
                <SideBar />
            </div>
            <div className="rightLibraryStaffManagementContainor">
                <Welcome />
                <div className="libraryStaffManagementtileContainor">
                    <h6><b>Library Staff Management</b></h6>
                    <div className="libraryStaffManagementTileRow">
                        <div className="libraryStaffManagementTile">
                            <div className="textLibraryStaffContainor"><Link to="/registerLibraryStaff" className="link"><img src="https://cdn2.iconfinder.com/data/icons/ecommerce-line-pack/40/SignUp-512.png" /><br></br>Register Library Staff</Link></div>
                        </div>
                        <div className="libraryStaffManagementTile">
                            <div className="textLibraryStaffContainor"><Link to="/viewLibraryStaff" className="link"><img src="https://cdn2.iconfinder.com/data/icons/ui-22/24/522-512.png" /><br></br>View Library Staff</Link></div>
                        </div>
                        <div className="libraryStaffManagementTile">
                        <div className="textLibraryStaffContainor"><Link to="/createLibraryStaff" className="link"><img src="https://cdn3.iconfinder.com/data/icons/ios-edge-glyph-1/25/Add-Users-512.png" /><br></br>Create Library Staff</Link></div>
                        </div>
                        <div className="libraryStaffManagementTile">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default LibraryStaffManagement;