import React from "react";
import "./profile.css";
import SideBar from "../../components/SideBar/SideBar";
import Welcome from "../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
function Profile() {
    return (
        <div className="libraryStaffManagementContainor">
            <div className="leftLibraryStaffManagementContainor">
                <SideBar />
            </div>
            <div className="rightLibraryStaffManagementContainor">
                <Welcome />
                <div className="libraryStaffManagementtileContainor">
                    <h6><b>Profile</b></h6>
                    

                </div>
            </div>
        </div>
    );
}
export default Profile;