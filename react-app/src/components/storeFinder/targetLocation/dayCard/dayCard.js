import React from "react";
import './dayCard.css'
import { Container, Row, Col} from 'react-bootstrap';

export default function DayCard(props) {
 
    const store = props.store[0].hours
    const hours = []

    const makeHours = (storeHours) => {
        for (let key in storeHours){
            hours.push(
                <Row className='hourRow'>
                    <Col xs={5} className='day'>{key}</Col>
                    <Col xs={7} className='hours'>{storeHours[key]}</Col>
                </Row>
            )
        }
        return hours
    }
 
    return (
        <Container className='hourContainer'>{makeHours(store)}</Container>
        )
}