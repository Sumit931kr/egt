import { useState, useEffect, } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";
import {useAuthState}  from 'react-firebase-hooks/auth'
import {auth} from '../Firebase'

import React from 'react'


const Find = (props) => {

    const navigate = useNavigate()
const [user,loading, error]=  useAuthState(auth);


    const [data, setData] = useState({ string: '', character: '' })

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    useEffect(() => {
if(! user){
navigate('/login')
}
    }, [])


    const find = () => {

        let string = data.string
        let char = data.character

        let index = string.indexOf(char);
       
        let result = string.substr(index + 1)
       
        if (result.length == string.length) {
            document.getElementById('output').innerHTML = `<h4> The letter does not exist in the sentence </h4>`
        }
        else {
            document.getElementById('output').innerHTML = `<h4> ${result} </h4>`
        }

    }
    return (
        <div className="Appp">
            <header className="App-header">
                <div>
                    <div>
                        Enter the string
                    </div>
                    <input type="text" value={data.string} name='string' onChange={onchange} />
                </div>
                <div>
                    <div>Enter the character</div>
                    <input type="text" value={data.character} name='character' maxLength={1} onChange={onchange} />
                </div>
                <button disabled={data.string.length < 3 || data.character.length === 0} onClick={find}>Submit</button>
                <div id="output"></div>
            </header>
        </div>
    )
}

export default Find