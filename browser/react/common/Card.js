import React from 'react';

import Card 		from '@material-ui/core/Card';
import CardContent 	from '@material-ui/core/CardContent';
import Typography 	from '@material-ui/core/Typography';

const styles = {
	card:{ 
		display: 'inline-block',
		padding: '10px',
		marginBottom: '10px' 
	},
	title: {
		margin: '10px'
	}
}

export default function SimpleCard({ title, children }){
	return (
		<Card style={ styles.card } >
			<Typography style={ styles.title } >
				{ title }
			</Typography>
			{ children }
		</Card>
	)
}