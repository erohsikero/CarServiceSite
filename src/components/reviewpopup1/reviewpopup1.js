import { useEffect , useState } from 'react';
import { Button } from 'react-bootstrap';
import classes from './reviewpopup1.module.css';
import database from "../../services/firebase";


const ReviewPopUp1 = () => {

    const [reviewMsg, setTxt] = useState("");

    useEffect(() => {
        console.log("Async Fetch Rating Avg data Starts");
        (async () => {
            await database.ref("reviewStat")
                .get()
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        var snapVal = snapshot.val();
                        console.log("Fetch reviewStat AvgReview Value :::: ", snapVal.reviewsAvg);
                        setTxt("Thanks for *****, customer who are valued our services with "+snapVal.reviewsAvg+" / 5 Rating");
                    } else {
                        console.log("No data available for reviewStat Value");
                        setTxt(<p> Thanks for *****, customer who are valued our services with 4.5 / 5 Rating </p>);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        })();
        console.log("Async Fetch Rating Avg data Ends");
    }, []);

    return (
        <div className={classes['carouselmain']}>
            <p>{reviewMsg}  <Button variant="success" size='sm' href="#/customer-review">View More Review</Button> </p>
        </div>

        
    );
}

export default ReviewPopUp1;