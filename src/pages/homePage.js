import AchievementBanner from "../components/achievementBanner/achievementBanner";
import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm";
import AboutUsContainer from "../components/HomePage/AboutUsContainer/aboutUsContainer";
import HomePageCarousel from "../components/HomePage/HomePageCarousel/homePageCarousel";
import OurService from '../components/OurService/OurService';
import { Button } from "react-bootstrap";



const HomePage = () => {
    return (
        <div>
            <HomePageCarousel />
            <AboutUsContainer />
            <Button href="#/about-us">More About Us</Button>
            <OurService />
            <AchievementBanner />
            <BookAnAppointmentForm />
        </div>
    );
}

export default HomePage;