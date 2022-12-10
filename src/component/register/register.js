import React, { useState } from "react";
import "./register.css"
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../Firebase'

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    const handlechange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {

        const { name, email, password, reEnterPassword } = user

        if (name && email && password && (password === reEnterPassword)) {
          createUserWithEmailAndPassword(auth, email, password)
          .then(auth => {
            setUser({
                name: "",
                email: "",
                password: "",
                reEnterPassword: ""
            })
            navigate('/find')
           })
          .catch((error)=> {
            setUser({
                name: "",
                email: "",
                password: "",
                reEnterPassword: ""
            })
            console.log(error)
        })

        }
        else {
            setUser({
                name: "",
                email: "",
                password: "",
                reEnterPassword: ""
            })
            alert("Invalid Input")
        }

    }

    return (
        <div className="register">

            <h2>Register</h2>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handlechange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handlechange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" minLength={8} onChange={handlechange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Password" minLength={8}  onChange={handlechange}></input>
            <div className="button" onClick={register} >Register</div>
            <div> or </div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    )
}

export default Register
