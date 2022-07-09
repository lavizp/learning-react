import React from 'react'
import Navbar from './Navbar';
import MovieDetails from './MovieDetails';
import './proj.css'


export default function ImageContainer() {
  return (
    <div>
        <div className="BackgroundImage">
            <Navbar/>
            <MovieDetails/>
        </div>
        
    </div>
  )
}
