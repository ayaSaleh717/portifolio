import './App.css';
import Slider from './component/slider/Slider';
import About from './component/About/About';
import Portifolio from './component/portifol/Portifol'
import Home from './component/home/Home';
import Resume from './component/resume/Resume';
import Services from './component/services/Services';
import Contact from './component/contact/Contact'
import DarkMode from './component/Dark/DarkMode';
import BackBotton from './component/BackBotton/BackBotton';
// import RouterLayOut from './component/RouterLayOut';

import {createBrowserRouter ,Route,createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Slider/>}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='serveces' element={<Services />} />
        <Route path='portfolio' element={<Portifolio />} />
        <Route path='contact' element={<Contact />} />
      
        </Route>

  )

)



function App() {

  
  return (
  <>
  <RouterProvider router={router} >
  {/* <BackBotton />
    <Slider /> */}
     
     </RouterProvider>
     
   


{/* 
  
    <main className='main'>
    
      <Home/>
      <About />
      <Services />
      {/* <Resume /> */}
      {/* <Portifolio /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    {/* </main> */} 
  </>
  
  );
}

export default App;
