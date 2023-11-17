import React from "react";
import "./helpAndSupport.css";
import SideBar from "../../components/SideBar/SideBar";
import Welcome from "../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
function HelpAndSupport() {
    return (
        <div className="libraryStaffManagementContainor">
            <div className="leftLibraryStaffManagementContainor">
                <SideBar />
            </div>
            <div className="rightLibraryStaffManagementContainor">
                <Welcome />
                <div className="libraryStaffManagementtileContainor">
                    <h6><b>Help And Support</b></h6>
                    

                </div>
            </div>
        </div>
    );
}
export default HelpAndSupport;