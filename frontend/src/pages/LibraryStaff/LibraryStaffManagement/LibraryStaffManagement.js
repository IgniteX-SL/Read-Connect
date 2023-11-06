import React from "react";
import "./libraryStaffManagement.css";
import SideBar from "../../../components/SideBar/Sidebar";
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
                            <div className="textContainor"><Link to="/registerLibraryStaff" className="link">Register Library Staff</Link></div>
                        </div>
                        <div className="libraryStaffManagementTile">
                            <div className="textContainor"><Link to="/viewLibraryStaff" className="link">View Library Staff</Link></div>
                        </div>
                        <div className="libraryStaffManagementTile">
                            <div className="textContainor"><Link to="/generateLibraryStaffReports" className="link">Generate Reports</Link></div>
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