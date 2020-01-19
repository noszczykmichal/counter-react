import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './Button.css';

class ButtonTrzy extends Component{

    render(){
        return(
            <div>
                <Button variant="primary"/>
                <Button variant="warning"/>
                <Button variant="danger"/>
            </div>
        )
    }
}

export default ButtonTrzy;