import React from 'react';

import Card from '../../common/Card';

import FormControl 		from '@material-ui/core/FormControl';
import Select 			from '@material-ui/core/Select';
import InputLabel 		from '@material-ui/core/InputLabel';
import OutlinedInput 	from '@material-ui/core/OutlinedInput';
import MenuItem 		from '@material-ui/core/MenuItem';

const onSelectHandler = (e, cb) => cb(e.target.value);
	
export default function RollFilter({ history = [], updateRollFilter = () => {} }){

	const rollerIds = Object.keys( 
		history.reduce( (map, { rollerId }) => {
			map[rollerId] = true;
			return map;
		}, {} )
	);

	return (
		<div style={{margin: '10px'}}>
			<Card title='Roll Filter'>
			{ 
				!history.length ? <div>No roll history data</div> : (
				
					<select onInput={ (e) => onSelectHandler(e, updateRollFilter) } >
						<option value={-1}>All Players</option>
						{ rollerIds.map( id => <option value={id}>Player {id}</option> ) }
					</select>
				)
			}
			</Card>
		</div>
	)

}

// {
				
// 				<FormControl variant="outlined">
// 			        <InputLabel htmlFor="outlined-age-simple">
// 			          Filter History
// 			        </InputLabel>
// 			        <Select
// 			          value={values.age}
// 			          onChange={handleChange}
// 			          input={<OutlinedInput labelWidth={ 200 } name="age" id="outlined-age-simple" />}
// 			        >
// 			          <MenuItem value={-1}>All Players</MenuItem>
// 			          {
// 			          	rollerIds.map( rollerId => <MenuItem value={rollerId}>Player {rollerId}</MenuItem> )
// 			          }
// 			        </Select>
// 			    </FormControl>
			    
// 			}
// 			)