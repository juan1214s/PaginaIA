import './App.css'
import Header from './components/header';
import Services from './components/services';
import AboutUs from './components/AboutUs';
import Carousel from "./components/Carousel"

function App() {


  return (
    <>
    <div className='m-2'>
      <Header/>
      <Carousel/>
      <AboutUs/>
      {/* <Services/> */}
    </div>
    </>
  )
}

export default App
