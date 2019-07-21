import React from 'react';

import Card from '../Card';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; 

require('./index.scss');

export default function ScrollingXContainer({ title, children }){

	return (
		
			<div style={{ margin: '10px', maxWidth: '90vw' }}>
				<div className='scrolling-container'>
					{ children.map( child => <div className='child'>{child}</div> )  }
					
				</div>
			</div>
		
	)

}