import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Shimmer from './components/Shimmer/Shimmer'

function App() {

  return (
    <>
      <div>
     <BrowserRouter>
      <Routes>
        <Route path='/shimmer' element=<Shimmer/>/>
      </Routes>
     </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
