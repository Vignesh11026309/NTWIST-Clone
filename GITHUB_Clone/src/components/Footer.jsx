import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-con'>
        <span style={{fontSize:"30px"}}>
            GitHub
        </span><br />
        <span style={{fontSize:"24px"}}>Subscribe to our developer newsletter</span><br />
        Get tips, technical guides, and best practices. Once a month, Right in your inbox. <br />

        <button>Subscribe</button>
      </div>
      <div className='footer-list1'>
        <ul>
            <li>Product</li>   
            <li>Features</li>
            <li> Enterprise</li>
            <li>Copilot</li>
            <li>Security</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Resources</li>
            <li> Roadmap</li>
            <li>Compare GitHub</li>
            
        </ul>
      </div>
      <div className='footer-list2'>
        <ul>
            <li>Platform</li>
            <li>Developer API</li>
            <li>Partners</li>
            <li>Electron</li>
            <li>GitHub Destop</li>
            
        </ul>
      </div>
      <div className='footer-list3'>
        <ul>
            <li>Support</li>   
            <li>Docs</li>
            <li> Comunity Forum</li>
            <li>Professional Series</li>
            <li>Premium Support</li>
            <li>Skills</li>
            <li>Status</li>
            <li>Contact GitHub</li>
        </ul>
      </div>
      <div className='footer-list4'>
        <ul>
            <li>Company</li>   
            <li>About</li>
            <li> Customer stories</li>
            <li>Blog</li>
            <li>The ReadMe Project</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Inclusion</li>
            <li> Social Impact</li>
            <li>Shop</li>
            
        </ul>
      </div>
    </div>
  )
}
