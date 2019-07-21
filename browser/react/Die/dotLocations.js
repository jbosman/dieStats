const   LEFT_X_RATIO = 0.3;
const CENTER_X_RATIO = 0.5;
const  RIGHT_X_RATIO = 0.7;

const    TOP_Y_RATIO = 0.3;
const CENTER_Y_RATIO = 0.5;
const BOTTOM_Y_RATIO = 0.7;

// Generates locations for a 6 dot die ( can go up to 9 )
// X X X
// X X X
// X X X	

export default function dotLocations( dieContainerSize ){
	return {
		// TOP LEFT DOT
		 TOP_LEFT_DOT_X    : dieContainerSize * LEFT_X_RATIO,
		 TOP_LEFT_DOT_Y    : dieContainerSize *  TOP_Y_RATIO,
		// CENTER LEFT DOT
		 CENTER_LEFT_DOT_X : dieContainerSize * LEFT_X_RATIO,
		 CENTER_LEFT_DOT_Y : dieContainerSize * CENTER_Y_RATIO,
		// BOTTOM LEFT DOT
		 BOTTOM_LEFT_DOT_X : dieContainerSize * LEFT_X_RATIO,
		 BOTTOM_LEFT_DOT_Y : dieContainerSize * BOTTOM_Y_RATIO,
		// CENTER DOT
		 CENTER_DOT_X : dieContainerSize * CENTER_X_RATIO,
		 CENTER_DOT_Y : dieContainerSize * CENTER_Y_RATIO,
		// TOP RIGHT DOT
		 TOP_RIGHT_DOT_X    : dieContainerSize * RIGHT_X_RATIO,
		 TOP_RIGHT_DOT_Y    : dieContainerSize *   TOP_Y_RATIO,
		// CENTER RIGHT DOT
		 CENTER_RIGHT_DOT_X    : dieContainerSize *  RIGHT_X_RATIO,
		 CENTER_RIGHT_DOT_Y    : dieContainerSize * CENTER_Y_RATIO,
		// BOTTOM RIGHT DOT
		 BOTTOM_RIGHT_DOT_X    : dieContainerSize *  RIGHT_X_RATIO,
		 BOTTOM_RIGHT_DOT_Y    : dieContainerSize * BOTTOM_Y_RATIO
	}
}

