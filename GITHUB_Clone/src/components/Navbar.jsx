import { FaGithub } from "react-icons/fa";
import React, { useState } from 'react';
import { PiCube } from "react-icons/pi";
import { LuShieldCheck } from "react-icons/lu";
import { GoCodeReview } from "react-icons/go";
import { FaRegCircleDot } from "react-icons/fa6";
import { BiCopyAlt } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { GoCodespaces } from "react-icons/go";
import { AiTwotoneInteraction } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";
export default function Navbar() {
  const styleLogo = { fontSize: "2.0em", color: "white" };
  const styleSearch = { height: "30px", backgroundColor:"transparent", border:"1px solid white", marginTop:"-15px",  '::placeholder': {
    opacity: 1,
  },};
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });

  const handleDropdownToggle = (dropdownId) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [dropdownId]: !prevStates[dropdownId],
    }));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-tranparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FaGithub style={styleLogo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
  className={`nav-item dropdown ${dropdownStates.dropdown3 ? 'show' : ''}`}
  onMouseEnter={() => handleDropdownToggle('dropdown3')}
  onMouseLeave={() => handleDropdownToggle('dropdown3')}
>
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdown3"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Product
  </a>
  <ul
    className={`dropdown-menu  multi-column-dropdown`}
    aria-labelledby="navbarDropdown3"
    style={{ backgroundColor: 'white', color: 'black' }}
  >
    
      <div className="productDrop"  style={{ backgroundColor: 'white'}}>
        <div className=" drop">
         
          <a className="dropdown-item" href="#">
          <AiTwotoneInteraction style={{color:'black', fontSize:'30px', backgroundColor: 'transparent', marginRight:'20px', marginTop:"15px"}}/>
          <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', paddingLeft: '50px',marginTop:"-18px" }}>Automate any workflow</span>
          </a>
          <a className="dropdown-item" href="#"><PiCube style={{color:'black', fontSize:'30px', backgroundColor: 'transparent', marginRight:'20px', marginTop:"15px"}}/>
          <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', paddingLeft: '50px',marginTop:"-18px" }}>Host and manage packages</span>
          </a>
          <a className="dropdown-item" href="#"><LuShieldCheck style={{color:'black', fontSize:'30px', backgroundColor: 'transparent', marginRight:'20px', marginTop:"15px"}}/>
          <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', paddingLeft: '50px',marginTop:"-18px" }}>Find and fix vulnerabilities</span>
          </a>
          <a className="dropdown-item" href="#"><GoCodespaces style={{color:'black', fontSize:'30px', backgroundColor: 'transparent', marginRight:'20px', marginTop:"15px"}}/>
          <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', paddingLeft: '50px',marginTop:"-18px" }}>Instant dev environments</span>
          </a>
          <a className="dropdown-item" href="#"><BiCopyAlt style={{color:'black', fontSize:'30px', backgroundColor: 'transparent', marginRight:'20px', marginTop:"15px"}}/>
          <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', paddingLeft: '50px',marginTop:"-18px" }}>Write better code with AI</span>
          </a>
          <a className="dropdown-item" href="#"><GoCodeReview style={{color:'black', fontSize:'30px', backgroundColor: 'transparent', marginRight:'20px', marginTop:"15px"}}/>
          <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', paddingLeft: '50px',marginTop:"-18px" }}>Manage code changes</span>
          </a>
          <a className="dropdown-item" href="#"><FaRegCircleDot style={{color:'black', fontSize:'30px', backgroundColor: 'transparent', marginRight:'20px', marginTop:"15px"}}/>
          <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', paddingLeft: '50px',marginTop:"-18px" }}>Plan and track work</span>
          </a>
          <a className="dropdown-item" href="#"><GoCommentDiscussion  style={{color:'black', fontSize:'30px', backgroundColor: 'transparent', marginRight:'20px', marginTop:"15px"}}/>
          <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', paddingLeft: '50px',marginTop:"-18px" }}>Colabrate outside of code</span>
          </a>
          
        </div>
        <div style={{borderRight:'1px solid'}}></div>
        <div className=" drop" style={{marginRight:"30px"}}>
          <h6 className="dropdown-header" style={{backgroundColor:"transparent", color:"black"}}>Explore</h6>
          <a className="dropdown-item" href="#">
            All features
          </a>
          <a className="dropdown-item" href="#">
            Documentation
          </a>
          <a className="dropdown-item" href="#">
            GitHub skills
          </a>
          <a className="dropdown-item" href="#">
            Blog
          </a>

             </div>
      </div>
    
  </ul>
</li>
              <li
                className={`nav-item dropdown ${dropdownStates.dropdown1 ? 'show' : ''}`}
                onMouseEnter={() => handleDropdownToggle('dropdown1')}
                onMouseLeave={() => handleDropdownToggle('dropdown1')}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <ul
                  className={`dropdown-menu ${dropdownStates.dropdown1 ? 'show' : ''}`}
                  aria-labelledby="navbarDropdown1"
                >   
               <div className="Drop"  style={{ backgroundColor: 'white'}}>
        <div className=" drop">
        <h6 className="dropdown-header" style={{backgroundColor:"transparent", color:"black"}}>For</h6>
          <a className="dropdown-item" href="#">
            Enterprie
          </a>
          <a className="dropdown-item" href="#">
            Teams
          </a>
          <a className="dropdown-item" href="#">
            Startups
          </a>
          <a className="dropdown-item" href="#">
            Education
          </a>
         
        </div>
        <div style={{borderBottom:'1px solid'}}></div>
        <div className=" drop">
        <h6 className="dropdown-header" style={{backgroundColor:"transparent", color:"black"}}>By solutions</h6>
          <a className="dropdown-item" href="#">
            CI/CD & Automation
          </a>
          <a className="dropdown-item" href="#">
            DevOps
          </a>
          <a className="dropdown-item" href="#">
            DevSecOps
          </a>
          <div style={{borderBottom:'1px solid'}}></div>
          <h6 className="dropdown-header" style={{backgroundColor:"transparent", color:"black"}}>Resources</h6>
          <a className="dropdown-item" href="#">
            Learning pathways
          </a>
          <a className="dropdown-item" href="#">
            White papers, Ebooks,Webinars
          </a>
          <a className="dropdown-item" href="#">
            Customer stories
          </a>
          <a className="dropdown-item" href="#">
            Partners
          </a>

             </div>
      </div>
                  
                </ul>
              </li>
              <li
                className={`nav-item dropdown ${dropdownStates.dropdown2 ? 'show' : ''}`}
                onMouseEnter={() => handleDropdownToggle('dropdown2')}
                onMouseLeave={() => handleDropdownToggle('dropdown2')}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Open Source
                </a>
                <ul
                  className={`dropdown-menu ${dropdownStates.dropdown2 ? 'show' : ''}`}
                  aria-labelledby="navbarDropdown2"
                >
                 <div className="Drop"  style={{ backgroundColor: 'white'}}>
        <div className=" drop">
         
          <a className="dropdown-item" href="#">
         
            <span style={{fontWeight:'600', backgroundColor:"transparent", color:"black"}}>GitHub Sponsors</span> <br />
                     <span style={{display: 'block', backgroundColor: 'transparent', marginTop:"0px" }}>Fund open source developers</span>
          </a>
          <br />
          <div style={{borderBottom:'1px solid'}}></div>
          <a className="dropdown-item" href="#">
         
         The ReadME Project <br />
                  <span style={{display: 'block', backgroundColor: 'transparent', marginTop:"0px" }}>GitHub communities articles</span>
       </a>
       <br />
       <div style={{borderBottom:'1px solid'}}></div>
       <h6 className="dropdown-header" style={{backgroundColor:"transparent", color:"black"}}>Repositories</h6>
          <a className="dropdown-item" href="#">
            Topics
          </a>
          <a className="dropdown-item" href="#">
            Trending
          </a>
          <a className="dropdown-item" href="#">
            Collections
          </a>
          
     
        </div>
        
        <div className=" drop">
          {/* <h6 className="dropdown-header">Column 2</h6> */}
          

             </div>
      </div>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                  Pricing
                </a>
              </li>
            </ul>
            <form className="d-flex " >
              <input style={styleSearch}
                className="form-control mt-1  me-2"
                type="search"
                placeholder=" Search or jump to..."
                aria-label="Search"
              />
              <button style={{width:"150px", height:"35px", borderStyle:"none", color:"white"}} className="btn btn-outline-success me-2 " type="submit">
                Search In
              </button>
              <button style={{width:"130px", height:"35px", textAlign:"center", borderColor:"Transparent", color:"white"}} className="btn btn-outline-success   " type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

