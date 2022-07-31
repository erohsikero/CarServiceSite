import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm";
import AboutUsContainer from "../components/HomePage/AboutUsContainer/aboutUsContainer";
import HomePageCarousel from "../components/HomePage/HomePageCarousel/homePageCarousel";
import OurService from '../components/OurService/OurService';


const HomePage = () => {
    return (
        <div>
            <HomePageCarousel />
            <AboutUsContainer />
            <OurService />
            <BookAnAppointmentForm />
        </div>
    );
}

export default HomePage;