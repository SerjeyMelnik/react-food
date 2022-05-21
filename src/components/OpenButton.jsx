import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpenButton = ({strCategory,idMeal}) => {
	const navigateTo = useNavigate();
	return ( 
		<button className="button open-btn" 
				onClick={()=>{navigateTo(`category/${strCategory}/recipe/${idMeal}`)}}
				>
		Open recipe
		</button>
	 );
}
 
export default OpenButton;