import React from 'react'
import Card from '../Card/Card';
import MidHeaders from '../MidHeaders/MidHeaders';


function OurService() {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    <MidHeaders head1='Our Services' head2='What We Offer for You' content1='CarClinic is Chennai’s fastest growing network of new age car repair workshops offering transparent, hassle-free and predictable car repair experience to car owners.' content2='We provides a wide range of services to the customers regarding car maintenance and repair services as listed below'/>
    <div className='container-fluid d-flex justify-content-center p-5'>
        <div className='row px-5'>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Engine Repair' iconValue='./icons/turbo.png' bodyData='Your engine light is an indication that something on your car needs attention. Your car may have some issues, and it’s time to take it to a service center.' height={'125'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Break work' iconValue='./icons/tire.png' bodyData='We all know why brake work is important, especially because the majority of car accidents are caused by failure to stop. Let us take good care of them make your drive safest' height={'125'} width={'165'}/>
            </div>
            <div className='col-md-4 col-sm-6 pb-5'>
                <Card titleData='Batter Replacement' iconValue='./icons/battery.png' bodyData='A dead car battery is a result of failing to turn off electrical accessories in your vehicle, or if its old and needs a replacement. We do that within minutes.' height={'125'} width={'125'}/>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default OurService;
