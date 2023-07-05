import React from 'react'
import './Footer.css';


function Footer() {
  return (
    <footer id='footer'>

     <div id='usefull'>
      <h3>UseFull Links</h3>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
      <a href="#">Social Links</a>
      </div>

      <div id='newsletter'>
      <h3> NewsLetter</h3>
      <form >
        <input type='email' placeholder='Enter your Email' required></input>
        <br/> <br/>
        <button type='submit'>SUBSCRIBE</button>
      </form>
      </div>

      <div id="social">
      <h3>CONTACT</h3>
      <p>info.jobseekers@co.ke <br/> Nairobi, Westlands <br/></p><br/>
      </div>
    </footer>
  )
}

export default Footer