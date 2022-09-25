import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react'
import './Card.css'

function Card({ titleData, iconValue, bodyData, height, width }) {
    return (
        <div className='card text-center ' >
            <div className="overflow ">
                <img
                    src={iconValue}
                    height={height}
                    width={width}
                    alt="High quality services"
                    class="icon-color"
                >
                </img>
            </div>
            <div className="card-body text-dark">
                <h4 className="font-weight-bold">{titleData}</h4>

                <p className="card-text mb-4 ml-3 mr-3 text-left">
                    {bodyData}
                </p>
            </div>
        </div>
    );
}

export default Card;
