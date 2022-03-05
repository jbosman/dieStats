import React, { Component } from 'react';

import axios from 'axios';

require('./index.scss');

import AppBar 		from '@material-ui/core/AppBar';
import InputLabel 	from '@material-ui/core/InputLabel';
import Toolbar 		from '@material-ui/core/Toolbar';
import Container 	from '@material-ui/core/Container'
import Typography 	from '@material-ui/core/Typography';

import Card from '../common/Card';

import FilterByPlayer 	from '../FilterByPlayer';
import DistributionGraph from '../cards/DistributionGraph';
import RollHistory       from '../cards/RollHistory';

export default class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			history: [],
			selectedPlayerId: -1 // Sentinal filter value for all players selected
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

		const { selectedPlayerId } = this.state;

		// If no single player is selected allow all the history through
		if( selectedPlayerId == -1 ) return true;

		// If a specific player has been selected, filter that players history through
		return rollerId == selectedPlayerId;
	}

	render(){

		const { history, selectedPlayerId } = this.state;

		const displayHistory = history.filter( this.historyFilter );

		return ( 
	      <div className='app-container' >
	      	<AppBar position="fixed">
	      		<Toolbar>
		      		<Typography variant="h6" className='app-bar-title'>Roll Tracker</Typography>
			      	<FilterByPlayer         
			       		history={ history }	
			       		updateRollFilter={ selectedPlayerId => { this.setState({ selectedPlayerId }) }}		
			       	/>
		       	</Toolbar>
	      	</AppBar>
	      	<div className='app-content grid'>
	      		<div className='grid-left'>
	       			<DistributionGraph 	history={ displayHistory } 	/>
	        	</div>
	        	<div className='grid-right'>	
		        	<RollHistory 
		        		history={ displayHistory }
		        		selectedRollerId = { this.state.selectedPlayerId }
		        	/>
	        	</div>
		    </div>   
	      </div>
	    );
	}

	 
}