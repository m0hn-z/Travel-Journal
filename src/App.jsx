import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import datas from '../src/assets/Data.js'
function App() {
  const cardValues = datas.map((data) => {
    const splitDesc = data.desc.substring(0, 250)

    return (
     <>
     <Card 
     key = {data.id}
     img={data.img} 
     location={data.location.toUpperCase()}
     link = {data.link}
     name = {data.name}
     from = {data.from}
     to = {data.to}
     desc = {splitDesc + "..."}
     /> 
     </>

    )
  })
  return (
    <>
     <div className="container">
     <Navbar /> 
    {cardValues}
     </div>
    </>
  )
}

export default App
