import React, { useState } from 'react'
import Tour from './Tour'
import { tourData } from './Tour'

const TourList = () => {
  const [state,setState] = useState([tourData])
 
  console.log(state)
  return (
    <div>
      <Tour tourData = {tourData}/>

   
    </div>
  )
}

export default TourList
