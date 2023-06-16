import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Middle from './components/Middle'
import Bottom from './components/Bottom'

function App() {
  return (
    <div id='parent'>
      <Header/>
      <Middle/>
      <Bottom/>
    </div>
  )
}

export default App

