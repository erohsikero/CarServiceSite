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
import OurServiceFull from './components/OurService/OurServiceFull';

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
          <Route exact path="/our-services" element={<OurServiceFull />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    <Footer class="mt-auto"/>
    </>
  );
}

export default App;