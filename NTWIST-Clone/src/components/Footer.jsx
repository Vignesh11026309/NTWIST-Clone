import React from 'react'
// import { FaTwitter } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const styleTwitter = { color: "white", fontSize: "1.5em", padding:"10px" }
  const styleLinkedin = { color: "white", fontSize: "1.5em", padding:"10px" }
  // const iconStyle = { transition: "background-color 0.3s ease-in-out" };
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <img className='footer-img' src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
        <div className='footer-list'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div><br />
        <div className='address'>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</div> <br />
        <div className='footer-icons'>
       
            {/* <FaFacebookF  /> */}
        <BiLogoTwitter style={styleTwitter} /> 
        <BsLinkedin style={styleLinkedin}  />
        </div><br />
        <div className='copyrights'>© 2022. Ntwist Inc.</div>
      </div>
      
    </div>
  )
}
