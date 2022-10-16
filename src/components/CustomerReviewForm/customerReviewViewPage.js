import React, { useState, useEffect } from 'react';
import { Row } from "react-bootstrap";
import ReviewCard from "../Card/reviewCard";
import database from "../../services/firebase";
import Card from 'react-bootstrap/Card';



const CustomerReviewViewPage = () =>{
  const [reviewMsg, setReviewTxt] = useState([]);

  useEffect(() => {
    console.log("CustomerReviewViewPage Starts");
    (async () => {
      var reviewMsgToHtml = [];
        await database.ref("reviews")
            .limitToLast(4).get()
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("Fetch snap",snapshot.val());
                    snapshot.forEach((child) => {
                      var review = child.val();
                      var localReviewCard = <ReviewCard name={review.name} rating={review.rating} message={review.reviewMessage}/>;
                      console.log("localReviewCard",localReviewCard);
                      reviewMsgToHtml.push(localReviewCard);
                    });
                    setReviewTxt(reviewMsgToHtml);
                } else {
                    var noReviewCard = <Card
                    //   border='primary'
                      bg='primary'
                      key='Primary'
                      text='white'
                      style={{ width: '18rem' }}
                      className="mb-2 text-left"
                    >
                      <Card.Body>
                        <Card.Text className='font-weight-bold text-white text-center'> No Reviews Yet....
                        </Card.Text>
                      </Card.Body>
                    </Card>;
                    setReviewTxt(noReviewCard);
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    })();
    console.log("CustomerReviewViewPage Ends");
}, []);

  return (
    <Row sm={1} md={4} className="justify-content-md-center">
      {reviewMsg}
    </Row>
  );
}



export default CustomerReviewViewPage;