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
    this.setState({
        counterView: 0
    })
}

addOneToCounter=()=>{
    this.setState({
        counterView: this.state.counterView +1
    })

    
}
        resetToProps=()=>{
            this.setState({
                counterView: parseInt(this.props.value)
            })
        }
    render(){

        return(
            <div className="myCard">
                <Card>
                    <Card.Body>{this.props.name + " wartość równa " + this.state.counterView + this.state.napisView}</Card.Body>
                    <ButtonTrzy resetCounterProps={this.resetCounter} addOneToCounterProps={this.addOneToCounter} resetToPropsProps={this.resetToProps}/>
                </Card>
            </div>
        )
    }
}

export default Counter;