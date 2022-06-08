import React, { useEffect } from 'react';

const ScrollUP = () => {
	const scrollToUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		  }); 
		  
	}
	
	return ( 
		<div className="scroll_up" onClick={scrollToUp}>

		</div>
	 );
}
 
export default ScrollUP;