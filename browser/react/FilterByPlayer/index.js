import React from 'react';

import FormControl 		from '@material-ui/core/FormControl';
import Select 			from '@material-ui/core/Select';
import InputLabel 		from '@material-ui/core/InputLabel';
import OutlinedInput 	from '@material-ui/core/OutlinedInput';
import MenuItem 		from '@material-ui/core/MenuItem';

require('./index.scss');

const onSelectHandler = (e, cb) => cb(e.target.value);
	
export default function RollFilter({ history = [], updateRollFilter = () => {} }){

	const rollerIds = Object.keys( 
		history.reduce( (map, { rollerId }) => {
			map[rollerId] = true;
			return map;
		}, {} )
	);

	return (
		<div className='select-player-container'>
			<InputLabel className='label' >Select a player</InputLabel>
			<select 
				className='select-player'
				onInput={ (e) => onSelectHandler(e, updateRollFilter) } 
			>
				<option value={-1}>All Players</option>
				{ rollerIds.map( id => <option value={id}>Player {id}</option> ) }
			</select>
		</div>
	)

}
