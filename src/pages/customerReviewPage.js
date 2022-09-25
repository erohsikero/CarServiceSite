import Banner from "../components/Banner/banner";
import CustomerReviewForm from "../components/CustomerReviewForm/customerReviewForm";

const CustomerReviewPage = () => {
    return(
        <>
            <Banner activePageName={'Customer Review'}/>
            <CustomerReviewForm/>
        </>
    )
}

export default CustomerReviewPage;