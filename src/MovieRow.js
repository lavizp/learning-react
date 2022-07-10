import React from 'react'
import "./proj.css"
import Movie from './Movie'

export default function MovieRow(props) {
  return (
    <div>
        <div className='rowContainer'>
            <h1>{props.title}:</h1>
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
