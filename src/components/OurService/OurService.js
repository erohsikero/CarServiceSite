import React from 'react'
import Card from '../Card/Card';
import MidHeaders from '../MidHeaders/MidHeaders';


function OurService() {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    <MidHeaders head1='Our Services' head2='What We Offer for You' content='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some slightly believable If you are going'/>
    <div className='container-fluid d-flex justify-content-center p-5'>
        <div className='row px-5'>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Engine Repair' iconValue='icons/highQualityService.png' bodyData='An important thing to know about car maintenance reminder systems, especially those'/>
            </div>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Diagnostics' iconValue='icons/bestPrice.png' bodyData='An important thing to know about car maintenance reminder systems, especially those'/>
            </div>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Tire Replacement' iconValue='icons/highQualityService.png' bodyData='An important thing to know about car maintenance reminder systems, especially those'/>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default OurService;
