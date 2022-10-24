import { useEffect , useState } from 'react';
import { Button } from 'react-bootstrap';
import classes from './reviewpopup1.module.css';
import database from "../../services/firebase";
import 'antd/dist/antd.css';
import {Rate} from 'antd';

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
                        // setTxt("Thanks for *****, customer who are valued our services with "+snapVal.reviewsAvg+" / 5 Rating");
                        setTxt(<p>Thanks customer who are valued our services with &nbsp; <Rate defaultValue={snapVal.reviewsAvg} style={{fontSize:30,color:'blue'}} allowHalf disabled/> &nbsp;({snapVal.reviewsAvg}) Rating &nbsp; &nbsp; <Button variant="primary" size='sm' style={{fontSize:13}} href="#/customer-review">View More Review</Button></p>);
                    } else {
                        console.log("No data available for reviewStat Value");
                        // setTxt(<p> Thanks for *****, customer who are valued our services with 4.5 / 5 Rating </p>);
                        setTxt(<p>Thanks customer who are valued our services with &nbsp; <Rate defaultValue={4.5} style={{fontSize:30,color:'blue'}} allowHalf disabled/> &nbsp;({snapVal.reviewsAvg}) Rating &nbsp; &nbsp; <Button variant="success" size='sm' style={{fontSize:13}} href="#/customer-review">View More Review</Button></p>);
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
            {reviewMsg}
        </div>

        
    );
}

export default ReviewPopUp1;