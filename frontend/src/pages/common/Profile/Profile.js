import React from "react";
import "./profile.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import profileImage from"./profileImage.jpg";
import { useAuthContext } from '../../../hooks/useAuthContext';
import { Link } from "react-router-dom";
function Profile() {
    const { user } = useAuthContext();
    return (
        <div className="profileContainor">
            <div className="leftProfileContainor">
                <SideBar />
            </div>
            <div className="rightProfileContainor">
                <Welcome />
                <div className="profileTileContainor">
                    <h6><b>Profile</b></h6>
                    <div class="profileArea">
                        <div class="profileImageArea">
                            <div class="profileImageContainer"><img class="profileImage" src={profileImage} alt=""></img></div>
                        </div>
                        <div class="profileDetailArea">
                            <div class="profileDetailRow">
                                <div class="profileDetailHeader">Name</div>
                                <div class="profileDetailCell">{user.name}</div>
                            </div>
                            <div class="profileDetailRow">
                                <div class="profileDetailHeader">Email Address : </div>
                                <div class="profileDetailCell">{user.email}</div>
                            </div>
                            <div class="profileDetailRow">
                                <div class="profileDetailHeader">Alternative Email : </div>
                                <div class="profileDetailCell">kasunu2001@gmail.com</div>
                            </div>
                            <div class="profileDetailRow">
                                <div class="profileDetailHeader">NIC : </div>
                                <div class="profileDetailCell">200108000159</div>
                            </div>
                            <div class="profileDetailRow">
                                <div class="profileDetailHeader">Contact Number : </div>
                                <div class="profileDetailCell">0767200338</div>
                            </div>
                            <div class="profileDetailRow">
                                <div class="profileDetailHeader">Address : </div>
                                <div class="profileDetailCell">3/29, Kaluwadumulla, Ambalangoda</div>
                            </div>
                        </div>
                    </div>
                    <div class="profileButtons">
                        <div class="changePicture"><input type="button" class="profileButton" value="Change Picture" /></div>
                        <div class="editDetailButton"><input type="button" class="profileButton" value="Edit Profile" /></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Profile;