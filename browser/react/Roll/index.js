import React from 'react';

import Typography 	from '@material-ui/core/Typography';

import Card from '../common/Card';
import Die  from '../Die'; 

export default function Roll({ values, rollId, rollerId }){

	return (
		<Card style={{ margin: '10px'}}>
			{
				values.map( (value,i) => <Die key={`die-${i}`} value={value} />)
			}
			<Typography>{ values.reduce( (total, value) => total + value, 0 ) }</Typography>
			{ rollerId ? <Typography>Player { rollerId }</Typography> : null }
			{ rollId ? <Typography>Roll Number { rollId }</Typography> : null }
			
		</Card>
	);

}