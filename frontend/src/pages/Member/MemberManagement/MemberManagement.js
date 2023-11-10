import React from "react";
import "./memberManagement.css";
import SideBar from "../../../components/SideBar/Sidebar";
import Welcome from "../../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
function MemberManagement() {
    return (
        <div className="memberManagementContainor">
            <div className="leftMemberManagementContainor">
                <SideBar />
            </div>
            <div className="rightMemberManagementContainor">
                <Welcome />
                <div className="memberManagementtileContainor">
                    <h6><b>Member Management</b></h6>
                    <div className="memberManagementTileRow">
                        <div className="memberManagementTile">
                            <div className="textContainor"><Link to="/registerMembers" className="link">Register Members</Link></div>
                        </div>
                        <div className="memberManagementTile">
                            <div className="textContainor"><Link to="/viewMembers" className="link">View Members</Link></div>
                        </div>
                        <div className="memberManagementTile">
                            <div className="textContainor"><Link to="/createMember" className="link">Create Member</Link></div>
                        </div>
                        <div className="memberManagementTile">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default MemberManagement;