import React,{useState} from 'react'
import './slider.css'
import Logo from './../../assets/logo.png'
import DarkMode from '../Dark/DarkMode'

const Slider = () => {
  const [displayNav, setdDisplayNav] = useState(false)
function shawMenu(){
  setdDisplayNav(!displayNav)  
}
  
  return (
    
    <section className='aside-container'>
    <div className='menu_container'>
        <div className='menu'>
            <i className='icon-menu btn' onClick={shawMenu}></i>
            <DarkMode />
      </div>
   </div>

   <div className='menu_display'>
   <nav className='nav menu_display '>
    <div className='nav_menu_dis' style={{ 'display' : ` ${displayNav ? "block" : "none"}`}}>
      <ul className='nav_list'>

         <li className='nav_itemMenue'>
            <a href="#home" className='nav_link'>
              <i className='icon-home'>HOME</i> 
            </a>
          </li>

          <li className='nav_itemMenue'>
              <a href="#about" className='nav_link'>
                <i className='icon-user-female'>ABOUT</i>
              </a>
          </li>

           <li className='nav_itemMenue'>
          <a href="#services" className='nav_link'>
               <i className='icon-briefcase'>SERVICES</i>
          </a>
           </li>

           {/* <li className='nav_itemMenue'>
          <a href="#resume" className='nav_link'>
               <i className='icon-graduation'>RESUME</i>
          </a>
           </li> */}
        
           <li className='nav_itemMenue'>
          <a href="#portifolio" className='nav_link'>
               <i className='icon-layers'>PORTIFOLIO</i>
               </a>
             </li>
              
              

           <li className='nav_itemMenue'>
                <a href="#contact" className='nav_link'>
                 <i className='icon-bubble'>COTACT</i>
              </a>
           </li>
          
        
      </ul>
    </div>
    </nav>
   </div>
   <aside className='aside'>
  
    <a href='#home' className='nav_logo'>
      {/* <img src={Logo} alt="" /> */}
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-a" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" /> <line x1="7" y1="13" x2="17" y2="13" /> </svg>
    </a>

    <nav className='nav navbar '>
    <div className='nav_menu'>
      <ul className='nav_list'>

         <li className='nav_item'>
            <a href="#home" className='nav_link'>
              <i className='icon-home'></i> 
            </a>
          </li>

          <li className='nav_item'>
              <a href="#about" className='nav_link'>
                <i className='icon-user-female'></i>
              </a>
          </li>

           <li className='nav_item'>
          <a href="#services" className='nav_link'>
               <i className='icon-briefcase'></i>
          </a>
           </li>

           {/* <li className='nav_item'>
          <a href="#resume" className='nav_link'>
               <i className='icon-graduation'></i>
          </a>
           </li> */}
        
           <li className='nav_item'>
          <a href="#portifolio" className='nav_link'>
               <i className='icon-layers'></i>
               </a>
             </li>
              
               {/* <li className='nav_item'>
                <a href="#blog" className='nav_link'>
                 <i className='icon-note'></i>
              </a>
           </li> */}

           <li className='nav_item'>
                <a href="#contact" className='nav_link'>
                 <i className='icon-bubble'></i>
              </a>
           </li>
          
        
      </ul>
    </div>
    </nav>
    <div className='nav_footer'>
      <span className='copyright'>&copy; 2023 - 2024.</span>
    </div>
   </aside>
   </section>
  )
}

export default Slider
