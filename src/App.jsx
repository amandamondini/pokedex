import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Pokedex from './components/Pokedex'

function App() {

  const [name, setName] = useState("")

  return (
    <>
    <Input setName={setName}/>
    <Pokedex name={name}/>
    </>
  )
}

export default App


/*
  Prop review
  * props are objects 
  * need to destructure them (in child) when you pass them from parent to child 

  setName - is a function that modifes the name 
  
*/