import React from "react";
import "./homepage.css"
import { useNavigate } from "react-router-dom";
// import Find from "../Find";
import { auth, Auth } from "../../Firebase";
import Phone from "../Phone";

const Homepage = () =>{
    const navigate = useNavigate()

    return(
        <>
        <div className = "homepage">
            <h1>Hello Beautiful People</h1>
            <div className="button" onClick={ () => navigate("/login")}>login</div>
            {/* <div className="button" onClick={ () => auth.signOut()}>logout</div> */}
        </div>
            {/* <Phone/> */}
        </>
    )
}

export default Homepage
