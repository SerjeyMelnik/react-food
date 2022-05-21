import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceAPI from '../API_SERVICE';
import LikeButton from './LikeButton';
import OpenButton from './OpenButton';

const RecipeFullCart = ({idMeal}) => {
	const [recipe,setRecipe] = useState({})
	const navigateTo = useNavigate();
	useEffect(()=>{
		
			ServiceAPI.getRecipeById(idMeal).then(data => {

				setRecipe(data.meals[0]);
				
			}).catch(err => console.log(err));
		
	},[])
	const getDescription = () => {
		const numberOfParagraphs = 3;
		const fullDescription = recipe.strInstructions.split('\r\n');
		const descr = fullDescription.length <= numberOfParagraphs 
		?
		fullDescription.map((paragraph,indx,arr) => 
			<p key={indx}> 
				{paragraph}
				{arr.length - 1 === indx ? '...' : null} 
			</p>
			) 
		:
		fullDescription.map(
			(paragraph,indx,arr) => 
			{
				return indx < numberOfParagraphs ? 
						<p key={indx}>
							{paragraph}
							{indx === numberOfParagraphs - 1 ? '...' : null} 
						</p> :
						null
			}
		);
		return descr
	}

	return ( 

			<div className="recipe_full_cart-wrapper" >
				{
					Object.keys(recipe) ?
					<div className="recipe_full_cart">
						<div className="recipe_full_cart-img-wrapper">
							<img src={recipe.strMealThumb}  />
						</div>
						 <div className="recipe_full_cart-content">
							 <h2 className="recipe_full_cart-title">
								{recipe.strMeal}
							 </h2>
							 <div className="recipe_full_cart-description">
								 {
									recipe.strInstructions 
									?	
									//getDescription()
									recipe.strInstructions.slice(0,700) + '...'
									:
									null
								 }
								
							 </div>
							 <div className="recipe_full_cart-buttons">
							 	<OpenButton idMeal={recipe.idMeal} 
											strCategory={recipe.strCategory}/>

								 <LikeButton recipe={recipe}/>
							 </div>
						 </div>
					</div> :
					'load'
				}
			</div> 

	 );
}
 
export default RecipeFullCart;