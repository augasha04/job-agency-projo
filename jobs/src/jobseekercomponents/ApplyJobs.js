import React from 'react'
import './ApplyJobs.css';

function ApplyJobs() {
  return (
    <div className='container'>

      <div className='cover-image'>
          <img src=""alt=""/>
      </div>

      <div className='form-table'>
        <h1 style={{color: "brown"}} >Job Application Form</h1><br/>

        <form id='form1'>
         <h3>CREATE ACCOUNT</h3>
         <input type='text' placeholder='Email' required/> 
         <input type='text' placeholder='Name' required/>
         <input type='text' placeholder='Password' required/>
         <input type='text' placeholder='Job Tittle' required/>
         <input type='numbers' placeholder='Phone-Number' required/>

         <div className='btn-box'>
          <button type='submit' >Next</button>
         </div>
        </form>

      </div>

    </div>
  )
}

export default ApplyJobs