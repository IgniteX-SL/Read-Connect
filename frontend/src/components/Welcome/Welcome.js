import React from "react";
import "./welcome.css";
// import { useAuthContext } from '../../hooks/useAuthContext';
function Welcome(){
    // const { user } = useAuthContext();
    return(
        <div className="welcomeHeader">
            <div className="welcomeText">
                {/* <h6>Hello  <b> {user.name}</b></h6> */}
                <h6>Hello  <b> Kasun </b></h6>
            </div>
            <hr></hr>
        </div>
    );
}
export default Welcome;