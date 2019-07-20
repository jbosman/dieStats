import React, { Component } from 'react';

import axios from 'axios';

import BarChart from 'recharts/lib/chart/BarChart';

import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/XAxis';
import Bar   from 'recharts/lib/cartesian/Bar';

export default class DistributionChart extends Component {
  
  constructor(props){
    super(props);

    this.state = { distributionChartData: [] }
  }

  componentDidMount(){

    // Fetch the roll distribution data
    axios
      .get('/distribution')
      .then( ({ data }) => {
        
        // This data is an object which has keys being the roll total and the values
        // containing the total number of times that roll total was rolled.

        const distributionChartData = (
          // Here we're arranging it into and an array of objects which the recharts
          // bar graphs can interpret.
          // Each object contains a 'rollTotal' key with the rollTotal value
          // And a 'rollTotalCount' key which contains the total number of times
          // the rollTotal was rolled
          Object.entries( data.rollDistribution )
                .map( ([rollTotal, rollTotalCount]) => ({ rollTotal, rollTotalCount }) )
        );

        this.setState({ distributionChartData })
      })
      .catch( console.error )

  }

  render(){
    if( this.state.distributionChartData.length === 0 ) {
      return <div>No Rolls Data to display.</div>;
    }
    else{
      return ( 
        <div style={{ width: '100%', textAlign: 'center' }}>
           <BarChart width={ 730 } height={ 250 } data={ this.state.distributionChartData } >
           <XAxis dataKey="rollTotal" />
           <YAxis />
           <Bar dataKey="rollTotalCount"  fill="blue" />
          </BarChart>
        </div>
      );
    }
  }
  
}