import React from 'react'
import { NavLink } from 'react-router-dom'

import "./NavBar.css"

export default function NavBar() {
    
  return (
    <div>
        <ul>
            <li>
                    <NavLink
                    to="/"
                    className={({isActive}) =>
                        "nav-link" + (isActive ? " selected" : "")
                    }
                    >
                    Home
                    </NavLink>
            </li>
            <li>

                    <NavLink
                    to="/about"
                    className={({isActive}) =>
                        "nav-link" + (isActive ? " selected" : "")
                    }
                    >
                    About
                    </NavLink>
            </li>
        </ul>
    </div>
  )
}
