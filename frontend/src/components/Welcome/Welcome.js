import React from "react";
import "./welcome.css";
import { useAuthContext } from '../../hooks/useAuthContext';
function Welcome(){
    const { user } = useAuthContext();
    return(
        <div className="welcomeHeader">
            <div className="welcomeText">
                <h6><b>Welcome   {user.name}</b></h6>
            </div>
            <hr></hr>
        </div>
    );
}
export default Welcome;