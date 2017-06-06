import React, {Component}from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends Component{

	constructor(props){
		super(props)
		this.state = {
			secondsLeft: props.initialCount 
		}
	}

	render(){
		const msg = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
		return(
			<div className="seconds-left">
				{msg}
			</div>

			)
	}
}
