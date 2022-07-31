import React from 'react'
import Card from '../Card/Card';
import MidHeaders from '../MidHeaders/MidHeaders';


function OurService() {
  return (
    <>
    <MidHeaders head1='Our Services' head2='What We Offer for You' content='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some slightly believable If you are going'/>
    <div className='container-fluid d-flex justify-content-center'>
        <div className='row px-5'>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Test Title' iconValue='google fa-4x' bodyData='Body Data to be Sent to the fuction and check if it works perfectly'/>
            </div>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Test Title' iconValue='google fa-4x' bodyData='Body Data to be Sent to the fuction and check if it works perfectly'/>
            </div>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Test Title' iconValue='google fa-4x' bodyData='Body Data to be Sent to the fuction and check if it works perfectly'/>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default OurService;
