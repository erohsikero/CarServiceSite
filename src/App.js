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
import BookAnAppointmentPage from './pages/bookAnAppointmentPage';
import CustomerReviewPage from './pages/customerReviewPage';
import Posters from './pages/posters';
import ReviewPopUp1 from './components/reviewpopup1/reviewpopup1';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <ReviewPopUp1/>
        <Routes>
          <Route exact path="/bookAnAppointmentForm" element={<BookAnAppointmentPage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/about-us" element={<AboutUsPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/our-services" element={<OurServiceFull />} />
          <Route exact path="/customer-review" element={<CustomerReviewPage />} />
          <Route exact path="/offers-posters" element={<Posters/>} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    <Footer class="mt-auto"/>
    </>
  );
}

export default App;