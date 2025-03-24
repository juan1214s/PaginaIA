import './App.css'
import Header from './components/header';
import Services from './components/services';
import AboutUs from './components/AboutUs';
import BannerContent from "./components/banner"
import StrategicObject from './components/strategicObject';
import Footer from './components/footer';

function App() {


  return (
    <>
    <div className='m-5'>
      <Header/>
      <BannerContent/>
      <AboutUs/>
      <Services/>
      <StrategicObject/>
    </div>
    <Footer />
    </>
  )
}

export default App
