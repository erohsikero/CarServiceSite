import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/homePage';
import AboutUsPage from './pages/aboutUsPage';
import ContactPage from './pages/contactPage';
import GalleryPage from './pages/galleryPage';
import OurService from './components/OurService/OurService';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/about-us" element={<AboutUsPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/our-services" element={<OurService />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    
    <div style={{ background: 'transparent url(http://localhost:3000/static/media/blueBackground.e4af9e1572362d7ac22f.jpg) center center/cover no-repeat scroll' , color:'white'}} className='d-block justify-content-center text-center p-5 border-top'>
    <img
          alt="AIAWA MEMBERSHIP"
          src="./aiawaLogo.png"
          height={"90px"}
          width={"190px"}
      /> Member of All India Automobile Workshops Association (AIAWA)
    </div>
    <Footer class="mt-auto"/>
    </>
  );
}

export default App;