import React from 'react'
import Card from 'react-bootstrap/Card';

export default function review({name , rating ,message}) {
  return (
        <Card
        //   border='primary'
          bg='primary'
          key='Primary'
          text='white'
          style={{ "margin":"1%" }}
          className="mb-2 text-left"
        >
          <Card.Header className='font-weight-bold'> Customer Name : {name} </Card.Header>
          <Card.Body>
            <Card.Title>Rating : {rating} </Card.Title>
            <Card.Text className='text-white text-left'> Review Message : {message}
            </Card.Text>
          </Card.Body>
        </Card>  )
}
