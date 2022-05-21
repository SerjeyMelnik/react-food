import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import RecipeFullCart from './RecipeFullCart';

const RecipeOfTheDay = () => {
	const {allRecipes} = useContext(AppContext);
	const recipeOfDay = {...allRecipes[Math.round(allRecipes.length / new Date().getDate())]};
	
	return ( 
		<div className="recipe_of_the_day">
			
			<h2 className='title'>Today we recommend cooking this dish</h2>
			{
				Object.keys(recipeOfDay).length ?
				<RecipeFullCart {...recipeOfDay}/>  :
				"load"
			}
		
		</div>
	 );
}
 
export default RecipeOfTheDay;