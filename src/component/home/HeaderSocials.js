import React from 'react'
import './Home.css'

const HeaderSocials = () => {
  return (
    <div className='home-socials'>
        <a href='https://instagram.com/aya7.aleh?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=='
         className='home-socials-link' target='_blank'>
              <i class="fa-brands fa-instagram"/>
        </a>
        <a href='https://www.linkedin.com/in/aya-saleh-aba413226'
         className='home-socials-link' target='_blank'>
              <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href='https://www.facebook.com/aya.5685?mibextid=avESrC' 
        className='home-socials-link' target='_blank'>
             <i class="fa-brands fa-facebook"></i>
        </a>
        <a href='https://t.me/salehaya' 
        className='home-socials-link' target='_blank'>
              <i class="fa-brands fa-telegram"></i>
        </a>

      
    </div>
  )
}

export default HeaderSocials
