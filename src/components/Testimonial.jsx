import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonials</h2>

      <section>
        <TestimonialCard name={'Rajesh Kumar'} feedback={'I like to create some intresting project,i am pationate for my work'} />
      </section>
    </div>
  )
}

const TestimonialCard =({name,feedback}) =>(
    <article>
        <img src="https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_960_720.jpg" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial
