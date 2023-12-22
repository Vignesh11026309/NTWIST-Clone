import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { PiSuitcaseSimple } from "react-icons/pi";
import Footer from './components/Footer';


export default function Body() {
 
  //background: rgb(2,0,36);
// background: linear-gradient(Transparent,#7C72FF 30% );
    const verticalLineStyle = {
        borderLeft: '3.5px solid #7c72ff', 
        height: '260px',
        margin: '0 10px',
        position:'absolute',
        top: '190px',
        left: '150px',
        borderRadius:'10px',
    }
    const circleStyle ={
      position:'absolute',
        top: '150px',
        left: '154px',
        color: 'white'
    }
    const styleArrow={
      position:'absolute',
      top: '465px',
      left: '150px',
      color: 'white',
      // background: 'linear-gradient(90deg, #7c72ff, rgba(124, 114, 255, 0))',
      // borderRadius: '700px', // Adjust the border-radius as needed

    }
    const verticalLineStyle2 = {
      borderLeft: '3.5px solid #7c72ff', 
      height: '270px',
      margin: '0 10px',
      position:'absolute',
      top: '510px',
      left: '150px',
      borderRadius:'10px',
  }
  const verticalLineStyle3 = {
    borderLeft: '3.5px solid #3fb950', 
    height: '250px',
    margin: '0 10px',
    position:'absolute',
    top: '850px',
    left: '150px',
    borderRadius:'10px',
}
const verticalLineStyle4 = {
  borderLeft: '3.5px solid #3fb950', 
  height: '900px',
  margin: '0 10px',
  position:'absolute',
  top: '1579px',
  left: '-79px',
  borderRadius:'10px',
}
  const suitcaseStyle ={
      position:'absolute',
      top: '800px',
      left: '150px',
      color:  'white',
      fontSize:'24px'
}
const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px', // Adjust the padding as needed
  border: '1px solid #ccc', // Optional border for visualization
  position:'relative',
  top:'1040px',
  right:"120px",
  borderRadius:"20px",
  width:"1100px",
  height:"480px",


};
  return (
    
    <div className='header'>
      <div><div style={circleStyle}><FaRegCircle /></div>
      <div style={verticalLineStyle}></div>
      <div style={styleArrow}>&lt; &gt;</div>
      <div style={verticalLineStyle2}></div>
      <div><div style={suitcaseStyle}><PiSuitcaseSimple /></div>
      </div>
      <div style={verticalLineStyle3}></div>
      </div>
        
      <div className='contentHead'>
        <div>
          <span className='headSpan'>Let’s build from here</span><br />
          <p className='headSpan-2'>The world’s leading AI-powered developer platform.</p>
        </div>
        <div className='inputArea'>
          <form action="">
            <input className='input-email' type="Email" placeholder='  Email address'/>
            <button className='signup-for-github-btn'>
              Signup for GITHUB
            </button>
            <button className='Start-a-free-enterprise-trial-btn'>
              Start a free enterprise trial &gt;
            </button>

          </form>
         
        </div>
        <div className='company'>
          <div className='company-head'>Trusted by the world’s leading organizations ↘︎</div>
        </div><br />
        <div className='comany-img'>
          <img src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" alt="" />
          <img src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="" />
          <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="" />
          <img src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="" />
          <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="" />
          <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="" />
        </div>
        <div className='productivity-page'>
            <h4 className='productivity-head'>Productivity</h4>
            <div className='productivity-content'>
              <span className='productivity-span'>
              Accelerate innovation
              </span><br />Our AI-powered platform increases the <br />
               pace of software development.
            </div>
      </div>
      <div className='coding-div'>
        <img className='coding-img' src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png" alt="" />
      </div>
      
      <div style={verticalLineStyle4}></div>
      <div className='Github-copilot-content'>
              <span className='Github-copilot-span'>
              GitHub Copilot
              </span> empowers developers to <br />
              complete tasks 55% faster with <br />
              contextualized AI coding assistance across <br />
              workflows. <br /> <br />
              <span className='Github-copilot-span'>
              Explore GitHub Copilot 
              </span>
            </div>

            <div className='increase-page'>
            <p style={{border:"1px solid  #3fb950", width:"150px", borderRadius:"30px",color:" #3fb950", textAlign:'center'         ,}}>Did you know?</p>
            <div className='increase-content'>
              <span className='increase-span'>
              22% increase
              </span><br />in developer productivity after <br />
              three years with GitHub <br /><br />
              Read the report
            </div>
      </div>
      <div style={containerStyle}>
      <div>
      <div className='Github-copilot-img'>
              <span className='Github-copilot-span'>
              GitHub Actions
              </span>automates your build,<br />
              test, and deployment workflow with <br />
              simple and secure CI/CD. <br />
              <br /> <br />
              <span className='explore' >
              Explore GitHub Copilot 
              </span>
            </div>
      </div>
      <div>
        <img 
          src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&format=webpll"
          alt=""
          style={{ width: '570px', marginRight:"-10px", objectFit: 'cover' }}
        />
      </div>
    </div>
      
      </div>
      <Footer/>
    </div>
    
  )
}
