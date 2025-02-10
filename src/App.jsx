import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ErrorPage from './pages/Error/ErrorPage'
import AllPizza from './pages/AllPizza/AllPizza'
import PizzaDetail from './pages/PizzaDetail/PizzaDetail'
function App() {

  return (
    <>

    <Routes>
      <Route path='/allPizza' element={<AllPizza/>}/>
      <Route path='/pizza/:name' element={<PizzaDetail/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default App
