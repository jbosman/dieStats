import React from 'react';

import Card from '../Card';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; 

require('./index.scss');

function ScrollingXContainer({ title, children }){
	return (
			<div className='scroller-container'>
				<div className='scroller scroll-x'>
					{ children.map( child => <div className='child'>{child}</div> )  }
				</div>
			</div>
	)
}

function ScrollingYContainer({ title, children }){
	return (
			<div clasName='scroller-container'>
				<div className='scroller scroll-y'>
					{ children.map( child => <div className='child'>{child}</div> )  }
				</div>
			</div>
	)
}

module.exports = {
	ScrollingXContainer,
	ScrollingYContainer
}