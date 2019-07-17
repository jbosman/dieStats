'use strict'

import React from 'react';

import Clock from '../Clock';

require('./index.scss');

export default function(){
	return (
		<div className='app-component'>
			<h1>Hello, React Template</h1>
			<Clock />
		</div>
	)
}