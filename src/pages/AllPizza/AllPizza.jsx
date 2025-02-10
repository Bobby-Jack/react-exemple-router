import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import pizzaData from "../../data/pizzaData.json" 
import { Link } from 'react-router-dom';
export default function AllPizza() {
    console.log(Object.values(pizzaData));
    
  return (
    <div>
        <NavBar/>
        <h1>Besta Pizza dela Towna</h1>
        <ul>
            {
                Object.values(pizzaData).map((data, key)=>{
                    return (
                        <li key={key}>
                        <Link to={'/pizza/'+data.name}>{data.name}</Link>
                        </li>
                    )
                }) 
            }
        </ul>
    </div>
  )
}
