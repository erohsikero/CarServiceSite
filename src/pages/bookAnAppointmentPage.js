import { Container } from "react-bootstrap";
import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm"
import Banner from "../components/Banner/banner"


const BookAnAppointmentPage = () => {
    return (
        <div className='border-top border-bottom'>
            <Banner activePageName={"Book An Appointment"}/>
            <BookAnAppointmentForm />
        </div>
    )
}

export default BookAnAppointmentPage;