'use client';
import {
    Row,
    Col,
    Placeholder ,
    Card,
    Button
} from 'react-bootstrap'


const PlaceHolder=()=>{
    return(
        <Card style={{ width: '13.6rem' ,margin:'0px 8px'}}>
        <Card.Img variant="top" src="/place_holder.svg" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    )
}
export default PlaceHolder;