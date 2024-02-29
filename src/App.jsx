import React from 'react'
import './App.css'

// file links
import Banner from './components/Banner'
import ServiceCards from './components/ServiceCards'
import Workprocess from './components/Workprocess'
import Plans from './components/Plans'
import Contactwithus from './components/Contactwithus'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Banner />
      <ServiceCards />
      <Workprocess />
      <Plans />
      <Contactwithus />
      <Footer />
    </>
  )
}

export default App;