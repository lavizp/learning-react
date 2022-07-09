import React from 'react'
import "./proj.css"
import Movie from './Movie'

export default function MovieRow() {
  return (
    <div>
        <div className='rowContainer'>
            <h1>Featured:</h1>
            <div className='movielistflexcontainer'>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
              
            </div>
            

        </div>

    </div>
  )
}
