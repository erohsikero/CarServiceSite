import React from 'react'
import './MidHeaders.css'

export default function MidHeaders({head1,head2,content1,content2}) {
  return (
    <div className='midhead'>
    <div className='d-block justify-content-center text-center p-5'>
        <span>{head1}<br/><br/></span>
        <h1>{head2}<br/></h1>
        <p>{content1} <br/> {content2}</p>
    </div>
    </div>
  )
};
