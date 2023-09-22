import React,{useState} from 'react'
import sun from './../../assets/sun.svg'
import moon from './../../assets/moon.png'
import './dark.css'



const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true)
  const body = document.querySelector('body')
  const toggle = document.getElementsByClassName('.toggle')


  function togl(){
    body.classList.toggle("dark")
    setDarkMode(!darkMode)

  }

    
  return (
    <div className='dark-mode '>
    <img src={darkMode ? moon :sun} alt='' className='dark btn toggle' onClick={togl}/> 
    </div>
  )
}

export default DarkMode
