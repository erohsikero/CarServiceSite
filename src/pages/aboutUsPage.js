import AchievementBanner from "../components/achievementBanner/achievementBanner";
import Banner from "../components/Banner/banner"
import AboutUsContainer from "../components/HomePage/AboutUsContainer/aboutUsContainer";

const AboutUsPage = () => {
    return (
        <>
            <Banner activePageName={"About Us"} />
            <AboutUsContainer />
            <AchievementBanner />
        </>
    )
}

export default AboutUsPage;