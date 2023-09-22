import React from 'react'
import './Home.css'
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials'
import ScroleDown from './ScroleDown'
import Shapes from './Shapes'
import DarkMode from '../Dark/DarkMode'



const Home = () => {
  return (
    <section className='container' id='home'>
    {/* <DarkMode /> */}
    <div className='home'>
      <div className='intro'>
    <img src={Me} alt='' className='home_img'></img>
    <h1 className='home_name'>Aya Saleh</h1>
    <span className='home_education'>I'm a Front-End developer</span>

    </div>
    <HeaderSocials />
    <button className='btn' href='#contact ' >Hire Me</button>
    {/* <ScroleDown /> */}

   <Shapes />
   </div>
    </section>
  )
}

export default Home
