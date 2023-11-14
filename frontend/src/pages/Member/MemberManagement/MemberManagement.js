import React from "react";
import "./memberManagement.css";
import SideBar from "../../../components/SideBar/SideBar";
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
                            <div className="textMemberContainor"><Link to="/registerMembers" className="link"><img src="https://cdn2.iconfinder.com/data/icons/back-to-school-solid/64/learn_School-28-512.png" /><br></br>Register Members</Link></div>
                        </div>
                        <div className="memberManagementTile">
                            <div className="textMemberContainor"><Link to="/viewMembers" className="link"><img src="https://cdn2.iconfinder.com/data/icons/ui-22/24/522-512.png" /><br></br>View Members</Link></div>
                        </div>
                        <div className="memberManagementTile">
                            <div className="textMemberContainor"><Link to="/createMember" className="link"><img src="https://cdn3.iconfinder.com/data/icons/ios-edge-glyph-1/25/Add-Users-512.png" /><br></br>Create Member</Link></div>
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