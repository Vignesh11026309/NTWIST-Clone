import React from 'react'
import NavBar from './NavBar'

export default function Header() {
  return (

      <div className='head'>
        <NavBar/>
        <div>
            <div className='content'>
                <div className='head-content'>Data-powered solutions <br />for Industrial Excellence <br/> <br />
                 <button className='readmore-btn'>Read More</button></div>
                <div className='img-map-div'>
                <img className='img-map' src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
                </div>
            </div>
            
        </div>
        
      </div>
    
  )
}
