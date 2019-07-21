import React, { Component } from 'react';

import axios from 'axios';

require('./index.scss');

import Card from '../common/Card';

import DistributionGraph from '../cards/DistributionGraph';
import RollFilter 		 from '../cards/RollFilter';
import RollHistory       from '../cards/RollHistory';

export default class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			history: [],
			filterOnPlayerId: -1 // Sentinal filter value for all players selected
		}

		this.historyFilter = this.historyFilter.bind( this );
	}

	componentDidMount(){
		// Fetch the roll history
	    axios
	      .get('/rolls')
	      .then( ({ data }) => {
	        
	        this.setState({ history: data.rolls.reverse() })
	      })
	      .catch( console.error )
	}

	historyFilter({ rollerId }){

		const { filterOnPlayerId } = this.state;

		// If no single player is selected allow all the history through
		if( filterOnPlayerId == -1 ) return true;

		// If a specific player has been selected, filter that players history through
		return rollerId == filterOnPlayerId;
	}

	render(){

		const { history, filterOnPlayerId } = this.state;

		const displayHistory = history.filter( this.historyFilter );

		return ( 
	      <div className='app-container' >
	      	<Card title='Roll Tracker'>
		       	<DistributionGraph 	history={ displayHistory } 	/>
		       	<RollFilter         
		       		history={ history }	
		       		updateRollFilter={ filterOnPlayerId => { this.setState({ filterOnPlayerId }) }}		
		       	/>
		        <RollHistory history={ displayHistory }	/>
		    </Card>            
	      </div>
	    );
	}

	 
}