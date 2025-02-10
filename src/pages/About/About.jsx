import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import {  useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()
    const [counter, setcounter] = useState(3)
    function proceed(){
        setcounter(c=> c-1)
      if (counter === 0) {
        navigate("/")
      }
    }
    
  return (
    <div>
        <NavBar/>
        <h1>About</h1>
        <button onClick={()=>{proceed()}}>proceed{counter}</button>
    </div>
  )
}
