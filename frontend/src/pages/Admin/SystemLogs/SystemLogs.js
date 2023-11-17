import React from "react";
import "./systemLogs.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
function SystemLogs() {
    return (
        <div className="libraryStaffManagementContainor">
            <div className="leftLibraryStaffManagementContainor">
                <SideBar />
            </div>
            <div className="rightLibraryStaffManagementContainor">
                <Welcome />
                <div className="libraryStaffManagementtileContainor">
                    <h6><b>System Logs</b></h6>
                    

                </div>
            </div>
        </div>
    );
}
export default SystemLogs;