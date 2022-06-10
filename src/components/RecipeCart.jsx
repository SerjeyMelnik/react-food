import React, { useEffect, useState } from 'react';
import ServiceAPI from '../API_SERVICE';
import { getCountryByName } from '../utils/Country';
import LikeButton from './LikeButton';
import OpenButton from './OpenButton';
import RecipeCartPreloader from './preloaders/RecipeCartPreloader';

const RecipeCart = ({idMeal}) => {
	const [recipe,setRecipe] = useState({});
	useEffect(()=>{
		ServiceAPI.getRecipeById(idMeal).then(data => 	setRecipe(data.meals[0]) )
	},[])
	if(Object.keys(recipe).length)
		{
			return ( 
			
				<div className="recipe_cart">
					<div className="recipe_cart_img-wrapper">
						<div className="recipe_cart-flag-wrapper">
							{
								getCountryByName(recipe.strArea) ?
								<img src={getCountryByName(recipe.strArea).flag} className='recipe_cart-flag' /> :
								null

							}
						</div>
						<img src={recipe.strMealThumb} className="recipe_cart_img" />
					</div>
					<div className="recipe_cart-bottom">
						<p className="recipe_cart-title">
						{recipe.strMeal}
						</p>
						<div className="recipe_cart-buttons">
						<OpenButton idMeal={recipe.idMeal} 
									strCategory={recipe.strCategory}/>
						<LikeButton recipe={recipe} likeType='small'/>
						</div>
					</div>
				</div>
			
			) 
		}
	else return <RecipeCartPreloader/>
	
	
}
 
export default RecipeCart;