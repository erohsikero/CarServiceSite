import AchievementBanner from "../components/achievementBanner/achievementBanner";
import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm";
import AboutUsContainer from "../components/HomePage/AboutUsContainer/aboutUsContainer";
import HomePageCarousel from "../components/HomePage/HomePageCarousel/homePageCarousel";

const HomePage = () => {
    return (
        <div>
            <HomePageCarousel />
            <AboutUsContainer />
            <AchievementBanner />
            <BookAnAppointmentForm />
        </div>
    );
}

export default HomePage;