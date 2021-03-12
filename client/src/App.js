/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
// import axios from 'axios'
// import Header from './components/ui/Header'
// import Search from './components/ui/Search'
import './App.css'
import { AppNavbar } from './components/ui/AppNavbar'
import { ExpTrk } from './components/ExpTrk'

const App = () => {


  return (
    <div>
      <AppNavbar />
      {/* <Header />
      <Search /> */}
      <ExpTrk />
    </div>
  )
}

export default App