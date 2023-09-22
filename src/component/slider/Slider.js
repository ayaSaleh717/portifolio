import React,{useState} from 'react'
import './slider.css'
import Logo from './../../assets/logo.svg'
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

           <li className='nav_itemMenue'>
          <a href="#resume" className='nav_link'>
               <i className='icon-graduation'>RESUME</i>
          </a>
           </li>
        
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
      <img src={Logo} alt="" />
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

           <li className='nav_item'>
          <a href="#resume" className='nav_link'>
               <i className='icon-graduation'></i>
          </a>
           </li>
        
           <li className='nav_item'>
          <a href="#portifolio" className='nav_link'>
               <i className='icon-layers'></i>
               </a>
             </li>
              
               <li className='nav_item'>
                <a href="#blog" className='nav_link'>
                 <i className='icon-note'></i>
              </a>
           </li>

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
