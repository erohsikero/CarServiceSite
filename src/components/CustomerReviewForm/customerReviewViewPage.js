import React, { useState, useEffect } from 'react';
import { Button, Row } from "react-bootstrap";
import ReviewCard from "../Card/reviewCard";
import database from "../../services/firebase";
import Card from 'react-bootstrap/Card';



const CustomerReviewViewPage = () =>{
  const [reviewMsg, setReviewTxt] = useState([]);
  const [reviewMoreMsg, setMoreReviewTxt] = useState([]);
  const [viewMoreBtn, setviewMoreBtn] = useState();
  var reivewFirstPageLimit = 20;

  const submitMoreCustomerReview = (event) => {
    event.preventDefault();
    console.log("More Review Method Starts");
    (async () => {
      var reviewMsgToHtml = [];
        await database.ref("reviews")
            .get()
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("submitMoreCustomerReview Fetch snap : ",snapshot.val());
                    console.log("submitMoreCustomerReview Fetch snap Size : ",snapshot.numChildren());
                    
                    
                    var responseCount = snapshot.numChildren();
                    var targetCount = responseCount - reivewFirstPageLimit;
                    console.log("Traget Count : ",targetCount);
                    var countTrack = 1;

                    snapshot.forEach((child) => {
                      if(countTrack <= targetCount){
                        var review = child.val();
                        var localReviewCard = <ReviewCard name={review.name} rating={review.rating} message={review.reviewMessage}/>;
                        // console.log("localReviewCard",localReviewCard);
                        reviewMsgToHtml.push(localReviewCard);
                      }

                      countTrack = countTrack + 1;
                    });

                    setMoreReviewTxt(reviewMsgToHtml);
                    console.log("Count Tacker",countTrack);
                    setviewMoreBtn('');
                } else {
                    setviewMoreBtn('');
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    })();
    console.log("More Review Method Ends");
    
  }

  useEffect(() => {
    console.log("CustomerReviewViewPage Starts");
    (async () => {
      var reviewMsgToHtml = [];
        await database.ref("reviews")
            .limitToLast(reivewFirstPageLimit).get()
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("Fetch snap",snapshot.val());
                    var countTrack = 0;
                    snapshot.forEach((child) => {
                      countTrack = countTrack + 1;
                      var review = child.val();
                      var localReviewCard = <ReviewCard name={review.name} rating={review.rating} message={review.reviewMessage}/>;
                      // console.log("localReviewCard",localReviewCard);
                      reviewMsgToHtml.push(localReviewCard);
                    });
                    setReviewTxt(reviewMsgToHtml);

                    console.log("Count Tacker",countTrack);
                    if(countTrack == reivewFirstPageLimit){
                      var viewMoreBtnData = <div style={{ "margin":"1%" }}> <Button variant="success" size='sm' style={{fontSize:15,margin:70}} onClick={submitMoreCustomerReview}>View More Review</Button></div>;
                      setviewMoreBtn(viewMoreBtnData);
                    }
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
      {reviewMsg} {reviewMoreMsg} {viewMoreBtn}
    </Row>
  );
}



export default CustomerReviewViewPage;