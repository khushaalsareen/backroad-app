import React from 'react'
import { services } from './data'
const Services = () => {
  return (
    <section className="section services" id="services">
    
    <div className="section-title">
      <h2>our <span>services</span></h2>
    </div>

    <div className="section-center services-center">
    {
      services.map((list)=>{
        return (
          <article key={list.id} className="service">
        <span className="service-icon"><i className={list.icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{list.title}</h4>
          <p className="service-text">
            {list.text}
          </p>
        </div>
      </article>
        )
      })
    }
      
    </div>
  </section>
  )
}

export default Services