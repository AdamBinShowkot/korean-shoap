'use client';
import {
    Row,
    Col
} from 'react-bootstrap';
import './indexTwo.scss';

const EmptyCard=({index})=>{
    return(
        <Row className="empty-card-container">
            <Col>
                
            </Col>
        </Row>
    )
}
export default EmptyCard;