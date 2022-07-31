import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm";
import AboutUsContainer from "../components/HomePage/AboutUsContainer/aboutUsContainer";
import HomePageCarousel from "../components/HomePage/HomePageCarousel/homePageCarousel";

const HomePage = () => {
    return (
        <div>
            <HomePageCarousel />
            <AboutUsContainer />
            <BookAnAppointmentForm />
        </div>
    );
}

export default HomePage;