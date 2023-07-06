import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          I want to extend my heartfelt appreciation for your confidence in my abilities and for believing that I am the right fit for this position. I am truly excited to contribute to the team and help achieve [jobseekers]'s goals and objectives.
          </p>
          <div className="info">
            <img src='https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080'
             alt="" />
            <div className="details">
              <h4>Tim Reed</h4>
              <span>Regular User of jobseeker.com</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          I would also like to thank you and the entire hiring team for the thorough recruitment process. It was a pleasure getting to know the company culture, meeting the team members, and gaining insights into the organization's values and vision. I am eager to learn from and collaborate with the talented individuals at [jobseekers].
          </p>
          <div className="info">
            <img src='https://d2v9ipibika81v.cloudfront.net/uploads/sites/271/Africa-2.png'
             alt="" />
            <div className="details">
              <h4>Chris Brown</h4>
              <span>Regular User of jobseeker.com</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Testimonials;