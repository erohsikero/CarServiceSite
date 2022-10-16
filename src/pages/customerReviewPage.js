import Banner from "../components/Banner/banner";
import CustomerReviewForm from "../components/CustomerReviewForm/customerReviewForm";
import CustomerReviewViewPage from "../components/CustomerReviewForm/customerReviewViewPage";

const CustomerReviewPage = () => {
    
    return(
        <>
            <Banner activePageName={'Customer Review'}/>
            <CustomerReviewForm/>
            <CustomerReviewViewPage/>
        </>
    )
}

export default CustomerReviewPage;