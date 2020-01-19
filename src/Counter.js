import React, { Component } from 'react';
import './Counter.css';
import {Card} from 'react-bootstrap';

class Counter extends Component{
    render(){

        return(
            <div>
                <Card>
                    <Card.Body>Counter body.</Card.Body>
                </Card>
            </div>
        )
    }
}

export default Counter;