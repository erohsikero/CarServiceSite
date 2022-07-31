import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react'
import './Card.css'

function Card({titleData,iconValue,bodyData}) {
  return (
    <div className='card text-center' >
        
        <div className="overflow">
            <MDBIcon fab icon={iconValue} className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
            <h4 className="text-uppercase">{titleData}</h4>
        </div>
        <p className="card-text mb-4 ml-3 mr-3">
            {bodyData}
        </p>
    </div>    
  );
}

export default Card;
