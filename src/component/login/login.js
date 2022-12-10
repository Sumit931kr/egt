import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../Firebase'

const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({

        email: "",
        password: ""

    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        try {
           signInWithEmailAndPassword(auth, user.email, user.password)
           .then(auth => {
            setUser({
                email: "",
                password: ""
            })
            navigate('/find')
           })
           .catch((error)=> 
           {setUser({
            email: "",
            password: ""
        })
            console.log(error)})
        } catch (error) {
            setUser({
                email: "",
                password: ""
            })
            console.log(error);
        }
    }


    return (
        <div className="login">
            
            <h2>Login</h2>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handlechange} />
            <input type="password" name="password" minLength={8}  value={user.password} placeholder="Enter Your Password" onChange={handlechange} ></input>

            <div className="button" onClick={login}> Login</div>
            <div> or </div>
            <div className="button" onClick={() => navigate("/register")}> Register</div>

        </div>
    )
}

export default Login
