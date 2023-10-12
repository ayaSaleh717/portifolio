import React,{useState} from 'react'
import './slider.css'
// import Logo from './../../assets/logo.png'
import DarkMode from '../Dark/DarkMode'
import { NavLink,Outlet } from 'react-router-dom'


const Slider = () => {
  const [displayNav, setdDisplayNav] = useState(false)
function shawMenu(){
  setdDisplayNav(!displayNav)  
}
function unShawMenu(){
  setdDisplayNav(false)  
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
      <ul className='nav_list' >

         <li className='nav_itemMenue'>
              <NavLink to='/' onClick={unShawMenu}>
              <i className='icon-home navLink nav_link' > HOME</i>
               </NavLink>
                </li>
          

          <li className='nav_itemMenue'>
          <NavLink to='/about' onClick={unShawMenu}>
          <i className='icon-user-female navLink nav_link'> ABOUT</i>          
               </NavLink>
              
          </li>

           <li className='nav_itemMenue'>
           <NavLink to='/serveces' onClick={unShawMenu}>
          <i className='icon-briefcase navLink nav_link'> SERVECES</i>          
               </NavLink>
          
           </li>

        
           <li className='nav_itemMenue'>
           <NavLink to='/portfolio' onClick={unShawMenu}>
          <i className='icon-layers navLink nav_link'> PORTIFOLIO</i>          
               </NavLink>
          
             </li>
              
              

           <li className='nav_itemMenue' onClick={unShawMenu}>
           <NavLink to='/contact'>
          <i className='icon-bubble navLink nav_link'> CONTACT</i>          
               </NavLink>
                
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
              <NavLink to='/'>
              <i className='icon-home navLink'></i>
               </NavLink>
                </li>

                <li className='nav_item'>
                <NavLink to='/about'>
                <i className='icon-user-female navLink'></i></NavLink>
                     
                </li>

                <li className='nav_item'>
                <NavLink to='/serveces'>
                <i className='icon-briefcase navLink'></i></NavLink>
                   
                </li>
              
                <li className='nav_item'>
                <NavLink to='/portfolio' >
                <i className='icon-layers navLink'></i>
                </NavLink>
                  </li>
                    
          

                <li className='nav_item'>
                <NavLink to='/contact'>
                <i className='icon-bubble navLink'></i>
                </NavLink>
                     
                </li>
                
              
            </ul>
          </div>
    </nav>
    <div className='nav_footer'>
      <span className='copyright'>&copy; 2023 - 2024.</span>
    </div>
   </aside>
   <main>
        <Outlet />
      </main>
   </section>
  )
}

export default Slider
