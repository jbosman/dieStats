import React, { Component } from 'react';

require('./index.scss');

import DistributionGraph from '../DistributionGraph';

export default function App(){
	return ( 
      <div style={{ width: '100%', textAlign: 'center' }}>
       	<DistributionGraph />
      </div>
    ); 
}