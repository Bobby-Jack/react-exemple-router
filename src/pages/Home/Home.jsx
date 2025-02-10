import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <h1>HOME</h1>
        <Link to={"/about"}>go to about</Link>
    </div>
  )
}
