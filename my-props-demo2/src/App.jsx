import React from 'react'
import './App.css'
import Greeting from './Greeting'

function App() {
  const person = {
    name: "Beyonce",
    age:40,
    wildClass: "of her own"
  }

  return (
 <div>
  <Greeting person={person}/>
 </div>
  )
}

export default App
