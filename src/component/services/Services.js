import React from 'react'
import './services.css'
import Image1 from'../../assets/service-1.svg'
import Image2 from'../../assets/service-2.svg'
import Image3 from'../../assets/respons.png'

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Design",
    description:
      "I design a beautiful web page, with beautiful animations",
  },
  {
    id: 2,
    image: Image2,
    title: "Writing content",
    description:
      "i can write a good content for a webpage sections",
  },
  {
    id: 3,
    image: Image3,
    title: "Responsive Web Design",
    description:
      "I Design a responsive webpage, fits all screen sizes.",
  },
];


const Services = () => {
  return (
   <section className='services container adipiscing' id='services'>
    <h2 className='section_title'>Services</h2>
    <div className='services_container grid'>
      {data.map(({id,image,title,description}) => {
        return(
        <div className='services_card' key={id}>
        <img src={image} alt='' className='services_img'/>
        <h3 className='services_title'>{title}</h3>
        <p className='services_description'>{description}</p>

        </div>
        )
      })}
    </div>
   </section>
  )
}

export default Services
