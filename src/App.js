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




function App() {
  return (
  <>
  <BackBotton />
    <Slider />
    <main className='main'>
    
      <Home/>
      <About />
      <Services />
      {/* <Resume /> */}
      <Portifolio />
      {/* <Blog /> */}
      <Contact />
    </main>
  </>
  
  );
}

export default App;
