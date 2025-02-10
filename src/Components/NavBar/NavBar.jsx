import React from 'react'
import { NavLink } from 'react-router-dom'



export default function NavBar() {
    
  return (
    <div>
        <ul>
            <li>
                <NavLink className={({isActive})=>{isActive ? "active": ""}} to={"/"}>HOME</NavLink>
            </li>
            <li>

                <NavLink to={"/about"}>About</NavLink>
            </li>
        </ul>
    </div>
  )
}
