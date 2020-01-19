import React from 'react';
import {Button} from 'react-bootstrap';
import './Button.css';



    const ButtonTrzy= (props)=>{
        return(
            <div>
                <Button variant="primary" className="main-btn" onClick={props.addOneToCounterProps}>Dodaj</Button>  
                <Button variant="warning" className="main-btn" onClick={props.resetToPropsProps}>Resetuj</Button>
                <Button variant="danger" className="main-btn" onClick={props.resetCounterProps}>Resetuj do Zera</Button>
            </div>
        )
    }


export default ButtonTrzy;