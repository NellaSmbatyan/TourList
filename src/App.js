import React from 'react'
import './App.css'
import TourList from './CityTours/TourList'

import NavbarPart from './CityTours/Components/Navbar'

const App = () => {
  return (
    <div>
   <NavbarPart/>
   <TourList/>
    </div>
  )
}

export default App
