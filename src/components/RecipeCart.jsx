import React, { useEffect, useState } from 'react';
import ServiceAPI from '../API_SERVICE';

const RecipeCart = ({idMeal}) => {
	//console.log(idMeal);
	const [recipe,setRecipe] = useState({})
	useEffect(()=>{
		if (idMeal)
		{
			ServiceAPI.getRecipeById(idMeal).then(data => {
				setRecipe(data);
				
			}).catch(err => console.log(err));
		}
	},[])
	
	return ( 

			<div className="recipe_cart-wrapper" >
				{
					recipe.length ?
					<div className="recipe_cart">
						<div className="recipe_cart-img-wrapper">
							<img src={recipe.strMealThumb}  />
						</div> 
					</div> :
					'not'
				}
			</div> 

	 );
}
 
export default RecipeCart;