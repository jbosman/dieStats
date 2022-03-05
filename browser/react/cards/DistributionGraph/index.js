import React, { Component } from 'react';

import axios from 'axios';

import Card from '../../common/Card';

import BarChart from 'recharts/lib/chart/BarChart';

import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Bar   from 'recharts/lib/cartesian/Bar';

require('./index.scss');

// This format the roll totals object into an array the chart can interpret
function formatRollTotals(rollTotals){
  return (
    // Grab each rollTotal and it's count
    Object.entries( rollTotals )
          .map( ([rollTotal, rollTotalCount]) => ({ rollTotal, rollTotalCount }) )
  )
}

// Count the roll totals in the history
//   Object Keys: The roll total value
//   Object alues: The number of times that roll total occurs in the history
function countRollTotals( history ){
  // Count the occurences of each roll total
  return history.reduce( (map, roll) => {
     const { total } = roll;
     // Create a key that is the rollTotal
     const rollTotalKey = `${total}`;
     // If we haven't encountered this roll total yet, initialize it to zero
     if( !map[rollTotalKey] ) map[rollTotalKey] = 0;
     // Increment each instance of the roll total
     map[rollTotalKey]++;
     // Return the map for reduce to keep doing it's thing
     return map;
   }, /* Initialize map to empy object */ {} )
}

export default function DistributionChart({ history = [] }){
  
  const formattedData = formatRollTotals( countRollTotals( history ) );

  if( formattedData.length === 0 ) return <div>No Rolls Data to display.</div>;

  return ( 
    <Card title='Roll Distribution'>
      <div className='distribution-chart-container' >
         <BarChart width={ 730 } height={ 250 } margin={{ top: 5, right: 30, left: 20, bottom: 20  }}
           data={ formattedData } 
         >
         <XAxis 
           label={{ value: 'Roll Value', position: 'insideBottom', offset: -10 }} 
           dataKey="rollTotal" 
         />
         <YAxis 
           label={{ value: 'Counts', angle: -90, position: 'insideLeft' }} 
         />
         <Bar dataKey="rollTotalCount"  fill="#3F51B5" />
        </BarChart>
      </div>
    </Card>
  );

}