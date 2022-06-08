import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceAPI from '../API_SERVICE';
import { getCountryByName } from '../utils/Country';
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
		const numberOfParagraphs = 2;
		const numberCharterInParagraph = 150;
		const fullDescription = recipe.strInstructions ? recipe.strInstructions.split('\r\n').filter(item => item.length !== 0 && item !== ' ' && item.length !== 1): [];
		const descr = fullDescription.length <= numberOfParagraphs 
		?
		fullDescription.map((paragraph,indx,arr) => 
			<p key={indx}> 
				{paragraph.length > numberCharterInParagraph ? paragraph.slice(0,numberCharterInParagraph) : paragraph}
				{arr.length - 1 === indx ? '...' : null} 
			</p>
			) 
		:
		fullDescription.map(
			(paragraph,indx,arr) => 
			{
				return indx < numberOfParagraphs ? 
						<p key={indx}>
							{paragraph.length > numberCharterInParagraph ? paragraph.slice(0,numberCharterInParagraph) : paragraph}
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
							<div className="recipe_full_cart-title-wrapper">
								<h2 className="recipe_full_cart-title">
									{recipe.strMeal}
								</h2>
								{
									getCountryByName(recipe.strArea) ?
									<img src={getCountryByName(recipe.strArea).flag}
										className="recipe_full_cart-flag"/> :
									 null
								}
							</div>
							

							 <div className="recipe_full_cart-description">
								 
								 {
									 getDescription() ?
									 getDescription().map((item,indx) => item) :
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