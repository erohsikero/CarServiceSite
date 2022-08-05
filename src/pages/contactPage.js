import Banner from "../components/Banner/banner";
import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm";
import ContactInformation from "../components/contactInformation/contactInformation";
import GoogleMap from "../components/googleMap/googleMap";

const ContactPage = () => {
    return (
        <>
            <Banner activePageName={'Contact'} />
            <ContactInformation/>
            <GoogleMap/>
            <BookAnAppointmentForm/>
        </>
    );
}

export default ContactPage;