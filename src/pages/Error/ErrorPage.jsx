import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const nav = useNavigate()
  return (
    <div>
        <NavBar/>
        <h1>Page not Found :/</h1>
        <button onClick={()=>{nav(-1)}}>return to safe world</button>
    </div>
  )
}
