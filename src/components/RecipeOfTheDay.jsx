import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import RecipeCart from './RecipeCart';

const RecipeOfTheDay = () => {
	const {allRecipes} = useContext(AppContext);
	const recipeOfDay = {...allRecipes[Math.round(allRecipes.length / new Date().getDate())]};
	 console.log(allRecipes);
	return ( 
		<div className="recipe_of_the_day">
			
			<h2 className='title'>Today we recommend cooking this dish</h2>
			{
				Object.keys(recipeOfDay).length ?
				<RecipeCart {...recipeOfDay}/>  :
				"load"

			}
		
		</div>
	 );
}
 
export default RecipeOfTheDay;