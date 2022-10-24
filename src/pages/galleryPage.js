import Banner from "../components/Banner/banner";
import BookAnAppointmentForm from "../components/BookAnAppointmentForm/bookAnAppointmentForm";
import ImageGallery from "../components/gallery/imageGallery";
import VideoGallery from "../components/gallery/videoGallery";

const GalleryPage = () => {
    return (
        <>
            <Banner activePageName='Gallery' classAtd='rootGal' />
            <ImageGallery />
            <VideoGallery />
            <BookAnAppointmentForm />
        </>
    )
}

export default GalleryPage;