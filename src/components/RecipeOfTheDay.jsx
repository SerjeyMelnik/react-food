import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import RecipeFullCartPreloader from './preloaders/RecipeFullCartPreloader';
import RecipeFullCart from './RecipeFullCart';

const RecipeOfTheDay = () => {
	const {allRecipes} = useContext(AppContext);
	const currentDate = new Date().getDate() == 1 ? 2 : new Date().getDate();
	const recipeOfDay = {...allRecipes[Math.round(allRecipes.length / currentDate )]};

	return ( 
		<div className="recipe_of_the_day" id='recipe_of_the_day'>
			
			<h2 className='title'>Today we recommend cooking this dish</h2>
			{
				Object.keys(recipeOfDay).length ?
				<RecipeFullCart {...recipeOfDay}/>  :
				<RecipeFullCartPreloader/>
			}
		
		</div>
	 );
}
 
export default RecipeOfTheDay;