import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './components/Header'
import Footer from './components/Footer'




const Root = () => {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default Root;