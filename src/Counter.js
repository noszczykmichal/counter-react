import React, { Component } from 'react';
import './Counter.css';
import {Card} from 'react-bootstrap';
import ButtonTrzy from './button/Button'

class Counter extends Component{
    // tworzymy kontruktor
constructor(props){
    super(props);
    let number=0;
    if(isNaN(this.props.value)===false){
        number=parseInt(this.props.value)
    }else{
        alert('przesłałeś nie liczbę')
    }
   
    let napis=''
    if (this.props.test === undefined){
        napis=""
    } else{
        napis=this.props.test
    }
    this.state={
        counterView: number,
        napisView: napis
    }
}

resetCounter=()=>{

}
    render(){

        return(
            <div>
                <Card>
                    <Card.Body>{this.props.name + " wartość równa " + this.state.counterView+1 + this.state.napisView}</Card.Body>
                    <ButtonTrzy/>
                </Card>
            </div>
        )
    }
}

export default Counter;