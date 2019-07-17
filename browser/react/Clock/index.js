import React, { Component } from 'react';

require('./index.scss');

export default class Clock extends Component {
  
  constructor(props){
    
    super(props);
    
    this.state = Object.assign( {}, this.getTime() );

    this.tick = this.tick.bind(this);
    
  }

  twoDigits(value){

    const valueString = `${value}`;

    return valueString.length < 2 ? `0${valueString}`: `${valueString}`;

  }

  getTime(){
    const time = new Date();

    return {
      hours:   time.getHours(),
      minutes: time.getMinutes(), 
      seconds: time.getSeconds()
    }
  }
  
  tick(){
    setTimeout( () => { this.setState( prevState => this.getTime() ) }, 1000 );
  }
  
  componentWillMount(){
    console.log('componentWillMount')
  }
  
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  
  shouldComponentUpdate(nextProps,nextState){
    
    console.log('shouldComponentUpdate')

    const { hours: nextHours, minutes: nextMinutes, seconds: nextSeconds } = nextState;
    const { hours, minutes, seconds } = this.state;

    return nextHours !== hours || nextMinutes !== minutes || nextSeconds !== seconds;
  }
  
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  
  render(){ 
    const { hours, minutes, seconds } = this.state;

    return ( 
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div>{`${this.twoDigits(hours)}:${this.twoDigits(minutes)}:${this.twoDigits(seconds)}`}</div>
      </div>
    ); 
  }
  
  componentDidUpdate(){
    console.log('componendDidUpdate')
    this.tick();
  }
  
  componentDidMount(){
    console.log('componentDidMount')
    this.tick();
  }
           
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  
  
}