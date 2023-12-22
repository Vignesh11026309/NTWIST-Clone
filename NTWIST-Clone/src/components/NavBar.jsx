import React from 'react'
import { BiColor } from 'react-icons/bi'

export default function NavBar() {
  const style={color:"black"}
  return (
    <div>
      <div className='nav-container'>
        
            <img className='img-logo' src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="logo" />
       
        <div className='nav-item'>
        <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li class="dropdown">
            <a href="" className="dropbtn" >Industries</a>
        <div className="dropdown-content">
            <a style={style} href="#sustainability">Sustainability</a>
            <a style={style} href="#mineral processing">Mineral Processing</a>
            <a style={style} href="#mine-to-mill">Mine-To-Mill-To-Mine <br />Optimization</a>
            <a style={style} href="#mine-to-mill">Mine-To-Mill-To-Mine <br />Optimization</a>
            <a style={style} href="#oil & gas">Oil & Gas</a>
        </div>
        </li>
            <li><a href="#ai software">AI Software</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact Us</a></li>
</ul>
        </div>
      </div>
    </div>
  )
}
