import AchievementBanner from "../components/achievementBanner/achievementBanner";
import Banner from "../components/Banner/banner"
import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm";
import AboutUsContainer from "../components/HomePage/AboutUsContainer/aboutUsContainer";

const AboutUsPage = () => {
    return (
        <>
            <Banner activePageName={"About Us"}/>
            <AboutUsContainer showButton={false}/>
            <AchievementBanner />
            <BookAnAppointmentForm />
        </>
    )
}

export default AboutUsPage;