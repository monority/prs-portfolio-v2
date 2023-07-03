import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './components/Header'



const Root = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root