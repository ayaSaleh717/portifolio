import React from 'react'
import './About.css'
import about from './../../assets/avatar-2.svg'
import AboutBox from './AboutBox'
const About = () => {
  return (
   <section className='about container section' id='about'>
    <h2 className='section_title'>About Me</h2>
    <div className='about_container grid'>
      <img src={about} className='about-img'></img>
  
    <div className='about_data grid'>
      <div className='about-info'>
        <p className='about-descriptions'>
       
        I am Aya Saleh, web developer from Syria,
        . I have rich experience in web site design and
          building and customization.
           </p>
            <a href='' className='btn'>Download CV</a>
        </div>
    
          </div>
        </div>
    {/* <AboutBox /> */}
    <div className='about_skills grid'>
            <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'> TYPESCRIPT </h3>
                   <span className='skills_number '>70%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage typescript'></span>
                </div>

          </div>
          <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'> JAVASCRIPT </h3>
                   <span className='skills_number'>78%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage javascript' ></span>
                </div>

          </div>
          <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'> BOOTSTRAP </h3>
                   <span className='skills_number '>70%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage bootstrap'></span>
                </div>

          </div>
          <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'> HTML </h3>
                   <span className='skills_number'>90%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage html'></span>
                </div>

          </div>
          <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'> CSS </h3>
                   <span className='skills_number'>85%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage css'></span>
                </div>
         </div>
          <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'>JSON  </h3>
                   <span className='skills_number'>50%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage json'></span>
                </div>

          </div>
          <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'>API  </h3>
                   <span className='skills_number'>60%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage api'></span>
                </div>

          </div>
          <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'>GIT & GITHUB  </h3>
                   <span className='skills_number'>70%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage git'></span>
                </div>

          </div>
          <div className='skills_data'>
               <div className='skills_title'>
                   <h3 className='skills_name'> REACT JS </h3>
                   <span className='skills_number'>90%</span>
                </div>
                <div className='skills_bar'>
                  <span className='scills_percentage react'></span>
                </div>

          </div>
          </div>


     

   </section>
  )
}

export default About;
