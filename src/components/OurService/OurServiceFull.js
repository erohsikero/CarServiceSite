import React from 'react'
import Card from '../Card/Card';
import MidHeaders from '../MidHeaders/MidHeaders';



function OurService() {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    <MidHeaders head1='Our Services' head2='What We Offer for You' content1='CarClinic is Chennai’s fastest growing network of new age car repair workshops offering transparent, hassle-free and predictable car repair experience to car owners.' content2='We provides a wide range of services to the customers regarding car maintenance and repair services as listed below'/>
    <div className='container-fluid d-flex justify-content-center p-5'>
        <div className='row px-5'>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Full Car Service' iconValue='./icons/bestPrice.png' bodyData='Book your car for an Interim, Full, or Major servicing at affordable prices.' height={'150'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Gear Box Repair' iconValue='./icons/highQualityService.png' bodyData='When you sense something is off with your gearbox, contact us for a quick check-up.' height={'125'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Oil Change' iconValue='./icons/oil.png' bodyData='Our technicians ensure that the oil in your car is free from dirt & contaminants' height={'100'} width={'190'}/>
            </div>
            




            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Engine Repair & Service' iconValue='./icons/turbo.png' bodyData='Your engine light is an indication that something on your car needs attention. Your car may have some issues, and it’s time to take it to a service center.' height={'125'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Break Repair' iconValue='./icons/brake-icon.png' bodyData='We all know why brake work is important, especially because the majority of car accidents are caused by failure to stop. Let us take good care of them make your drive safest' height={'125'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Batter Replacement' iconValue='./icons/battery.png' bodyData='A dead car battery is a result of failing to turn off electrical accessories in your vehicle, or if its old and needs a replacement. We do that within minutes.' height={'125'} width={'125'}/>
            </div>





            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Steering Repair' iconValue='./icons/steer.png' bodyData='Whether its a BMW or a Volvo, we provide steering repair services to all of them' height={'125'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Tyre Puncture Repair' iconValue='./icons/tire.png' bodyData='We specialize in high-performance tyres for all makes & models at fair prices.' height={'125'} width={'165'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Wheel Alignment' iconValue='./icons/wheel.png' bodyData='Dont put yourself in danger. Get your cars wheel alignment checked at ASC.' height={'125'} width={'125'}/>
            </div>



            
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Air Conditioning' iconValue='./icons/ac.png' bodyData='If somethings not right with your cars air conditioning system, contact us.' height={'125'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Body painting' iconValue='./icons/paint.png' bodyData='Come to us if youre planning to repaint your car, or cover up some chipped paint.' height={'125'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='CamBelt Replacement' iconValue='./icons/belt.png' bodyData='Keep the cambelt of your car working optimally with our affordable services.' height={'125'} width={'125'}/>
            </div>



            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Car Body Detailing' iconValue='./icons/completedProject.png' bodyData='Give your car more than just a wash. Book your car for a valeting service with us.' height={'110'} width={'250'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Car Suspension' iconValue='./icons/sus.png' bodyData='Get a free suspension check to ensure that youre completely safe on the road.' height={'125'} width={'125'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Car Wash' iconValue='./icons/wash.png' bodyData='Keep your car as shining as a brand-new one with our quality car wash services.' height={'125'} width={'125'}/>
            </div>




            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Clutch Repair' iconValue='./icons/ins.png' bodyData='Get quality & affordable car clutch replacement & maintenance services from us.' height={'120'} width={'130'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Crash Repain' iconValue='./icons/crash.png' bodyData='Get those dents and scratches on your car fixed by us at affordable prices.' height={'125'} width={'230'}/>
            </div>
            <div className='col-md-4 col-sm-6 container-fluid d-flex justify-content-center p-5'>
                <Card titleData='Fuel System Repair' iconValue='./icons/fuel.png' bodyData='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. g' height={'125'} width={'125'}/>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default OurService;
