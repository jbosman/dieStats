import React, { Component } from 'react';

import axios from 'axios';
import Typography 	from '@material-ui/core/Typography';

import Card from '../../common/Card';

import ScrollingXContainer from '../../common/ScrollingXContainer';

import Roll from '../../Roll';

export default function RollHistory({ history = [], historyLabel = 'All Rolls' }){

	if( history.length === 0 ) return <div>No History</div>;

	return (
		<Card title='Roll History'>
			<Typography>{ historyLabel } </Typography>
			<ScrollingXContainer >
				{
					history.map( ({ rollId, rollerId, values }) => (
							<Roll 
								key={rollId} 
								values={ values }
								rollId={ rollId }
								rollerId={ rollerId } 
							/>
						)
					)
				}
			</ScrollingXContainer>
		</Card>
	);
	
	
}