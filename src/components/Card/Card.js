import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react'
import './Card.css'

function Card({titleData,iconValue,bodyData,height,width}) {
  return (
    <div className='card text-center' >
        
        <div className="overflow">
            <img
                src={iconValue}
                height={height}
                width={width}
                alt="High quality services"
            >
            </img>
        </div>
        <div className="card-body text-dark">
            <h4 className="font-weight-bold">{titleData}</h4>
        </div>
        <p className="card-text mb-4 ml-3 mr-3 text-justify">
            {bodyData}
        </p>
    </div>    
  );
}

export default Card;
