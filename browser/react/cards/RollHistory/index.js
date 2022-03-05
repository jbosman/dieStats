import React, { Component } from 'react';

import axios from 'axios';

import Card from '../../common/Card';

import { 
	ScrollingXContainer,
	ScrollingYContainer 
} from '../../common/ScrollingContainers';


import Roll from '../../Roll';

export default function RollHistory({ history = [], selectedRollerId }){

	if( history.length === 0 ) return <div>No History</div>;

	const title = selectedRollerId == -1 ? 'Roll History' : `Roll History - Player ${selectedRollerId}`;

	return (
		<Card title={ title }>
			<ScrollingYContainer >
				{
					history.map( ({ rollId, rollerId, values }) => { 
						return (<Roll 
								key={rollId} 
								values={ values }
								rollId={ rollId }
								rollerId={ rollerId == selectedRollerId ? undefined : rollerId } 
						/>)
					})
				}
			</ScrollingYContainer>
		</Card>
	);
	
	
}