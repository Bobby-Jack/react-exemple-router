import React, { useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import pizzaData from "../../data/pizzaData.json"
import { useNavigate, useParams } from 'react-router-dom'

export default function PizzaDetail() {
    const nav = useNavigate()
    const { name } = useParams()
    

    return (
        <div>
            <NavBar />
            {
                !pizzaData[name] ?
                    <h1>Pizza not Found </h1> :
                    <>
                        <h1>Info about {name}</h1>
                        <ul>
                            <li>price : {pizzaData[name].price}</li>
                            <li> rank : {pizzaData[name].rank} / 5</li>
                        </ul>
                    </>
            }
        </div>
    )
}
