import React from 'react';

const DIE_CONTAINER_SIZE = 100;

const DIE_SIZE = DIE_CONTAINER_SIZE * 0.8;

const DIE_CORNER_ROUND = DIE_SIZE * 0.1;
const DIE_BACKGROUND_COLOR = 'white';

const DOT_SIZE = DIE_SIZE * 0.1;
const DOT_COLOR = 'black';

// Dot Locations
// DOT     DOT
// DOT DOT DOT
// DOT     DOT

import generateDotLocations from './dotLocations';

const {
	//    TOP Row
	TOP_LEFT_DOT_X, 	/* NO TOP CENTER DOT */ 	TOP_RIGHT_DOT_X,     
	TOP_LEFT_DOT_Y, 	/* NO TOP CENTER DOT */ 	TOP_RIGHT_DOT_Y,   
	// CENTER Row
	CENTER_LEFT_DOT_X, 		CENTER_DOT_X,  			CENTER_RIGHT_DOT_X,    
	CENTER_LEFT_DOT_Y, 		CENTER_DOT_Y,  			CENTER_RIGHT_DOT_Y,  
	// BOTTOM Row
	BOTTOM_LEFT_DOT_X, 	/* NO BOTTOM CENTER DOT */ 	BOTTOM_RIGHT_DOT_X,
	BOTTOM_LEFT_DOT_Y, 	/* NO BOTTOM CENTER DOT */ 	BOTTOM_RIGHT_DOT_Y    
} = generateDotLocations(DIE_CONTAINER_SIZE);

export default function Die({ value }){

	return (
		<svg
			width={ DIE_CONTAINER_SIZE } height={ DIE_CONTAINER_SIZE }
			
		>
			<rect
				 x={ DIE_CONTAINER_SIZE * 0.1 }  y={ DIE_CONTAINER_SIZE * 0.1 }
				rx={ DIE_CORNER_ROUND } 		ry={ DIE_CORNER_ROUND }
				 width={ DIE_SIZE } 
				height={ DIE_SIZE }
				fill={ DIE_BACKGROUND_COLOR }
				stroke={ DOT_COLOR } strokeWidth={ DIE_CONTAINER_SIZE * 0.03 } 
			>
			</rect>
			{
				value === 1 || value === 3 || value === 5 ?(
					<circle cx={ CENTER_DOT_X } cy={ CENTER_DOT_Y } r={ DOT_SIZE } fill={ DOT_COLOR } />
				): null
			}
			{
				value === 2 || value === 3 || value === 4 || value === 5 || value === 6 ? (
					<React.Fragment>
						<circle cx={     TOP_LEFT_DOT_X } cy={     TOP_LEFT_DOT_Y } r={ DOT_SIZE } fill={ DOT_COLOR } />
						<circle cx={ BOTTOM_RIGHT_DOT_X } cy={ BOTTOM_RIGHT_DOT_Y } r={ DOT_SIZE } fill={ DOT_COLOR } />
					</React.Fragment>
				): null
			}
			{
				value === 4 || value === 5 || value === 6 ?(
					<React.Fragment>
						<circle cx={   TOP_RIGHT_DOT_X }  cy=   { TOP_RIGHT_DOT_Y } r={ DOT_SIZE } fill={ DOT_COLOR } />
						<circle cx={ BOTTOM_LEFT_DOT_X }  cy={ BOTTOM_LEFT_DOT_Y  } r={ DOT_SIZE } fill={ DOT_COLOR } />
					</React.Fragment>
				): null
			}
			{
				value === 6 ?(
					<React.Fragment>
						<circle cx={  CENTER_LEFT_DOT_X }  cy={  CENTER_LEFT_DOT_Y }  r={ DOT_SIZE } fill={ DOT_COLOR } />
						<circle cx={ CENTER_RIGHT_DOT_X }  cy={ CENTER_RIGHT_DOT_Y }  r={ DOT_SIZE } fill={ DOT_COLOR } />
					</React.Fragment>
				): null
			}
		</svg>
	)
}