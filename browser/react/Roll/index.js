import React from 'react';

import Typography 	from '@material-ui/core/Typography';

import Card from '../common/Card';
import Die  from '../Die'; 

require('./index.scss');

export default function Roll({ values, rollId, rollerId }){

	const total = values.reduce( (total, value) => total + value, 0 );

	return (
		<Card style={{ margin: '10px'}}>
			<div className='dice-container'>
				{
					rollerId ? (
						<div className='player-label-container'>
							<Typography className='player-label'>Player { rollerId }</Typography>
						</div>
					) : null
				}
				{ values.map( (value,i) => <Die key={`die-${i}`} value={value} />) }
			</div>
			<div className='dice-total-container'>
				<Typography className='dice-total'>{ total }</Typography>
			</div>
			
			{ /*rollId ? <Typography>Roll Number { rollId }</Typography> : null*/ }
		</Card>
	);

}