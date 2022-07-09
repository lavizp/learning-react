import React from 'react'
import './proj.css'

export default function MovieDetails() {
  return (
    <div className="DetailsContainer">
        <h1>PEAKY BLINDERS</h1>
        <div className="Points">
            <h3>8.3 Points</h3>
            <h5>2021 |Temparados</h5>
        </div>
        <p>
        Peaky Blinders is a British crime drama television series created by Steven Knight. Set in Birmingham, England, it follows the exploits of the Peaky Blinders crime gang in the direct aftermath of the First World War. The fictional gang is loosely based on a real urban youth gang of the same name who were active in the city from the 1880s to the 1910s.
        </p>
        <div className='buttonContainers'>
            <button className='PlayButton Button'>Play</button>
            <button className='MoreButton Button'>More Information</button>
        </div>
        
    </div>
  )
}
