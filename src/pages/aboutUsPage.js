import AchievementBanner from "../components/achievementBanner/achievementBanner";
import Banner from "../components/Banner/banner"
import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm";
import AboutUsContainerFull from "../components/HomePage/AboutUsContainer/aboutUsContainerFull";

const AboutUsPage = () => {
    return (
        <>
            <Banner activePageName={"About Us"} classAtd={'rootABUS'}/>
            <AboutUsContainerFull showButton={false}/>
            <AchievementBanner />
            <BookAnAppointmentForm />
        </>
    )
}

export default AboutUsPage;