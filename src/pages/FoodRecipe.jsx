import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceAPI from '../API_SERVICE';
import SideBar from '../components/SideBar';
import LikeButton  from '../components/LikeButton';
import { AppContext } from '../context';
import { getIngredients } from '../utils/getIngredients';
import { getCountryByName } from '../utils/Country';
import RecipeContentSwitcher from '../components/RecipeContentSwitcher';

const Foodrecipe = () => {
	const [recipe,setRecipe] = useState({});
	const [ingredients,setIngredients] = useState([]);
	const {recipeID,categoryName} = useParams();
	const {addToWishList,wishList} = useContext(AppContext)
	const youtubeSrc = recipe.strYoutube ?
						`https://www.youtube.com/embed/${recipe.strYoutube.replace('https://www.youtube.com/watch?v=','')}`
						: null;
	useEffect(()=>{
		ServiceAPI.getRecipeById(recipeID).then(data => {
			setRecipe(data.meals[0]);
			setIngredients(getIngredients(data.meals[0]))
		});
		
	},[recipeID])
	
	
	return (
		<div className="recipe_wrapper">	
		<div className='recipe' >
			<div className="head_info_wrapper">
				<div className="head_info_img_wrapper">
					<img src={recipe.strMealThumb}
						  className='head_info_img' />
				</div>
				<div className="head_info">
					<h1 className="head_info_title">
						{recipe.strMeal} 
						{
							getCountryByName(recipe.strArea) 
							?
								<img src={getCountryByName(recipe.strArea).flag}  />
							:
								null
						}
					</h1>
					<div className="additional_info">
						<p className='additional_info_item'>
							<span className="additional_info_item_title">
								Category: 
							</span>
							<span className="additional_info_item_value">
								{recipe.strCategory}
							</span>
						</p>
						<p className='additional_info_item'>
							<span className="additional_info_item_title">
								Country: 
							</span>
							<span className="additional_info_item_value">
								{recipe.strArea}
							</span>
							
						</p>
					</div>
					<div className="head_info_buttons">
						<LikeButton recipe={recipe}/>
					</div>
				</div>
			</div>

			<RecipeContentSwitcher description={recipe.strInstructions}
									ingredients={ingredients}
									youtubeSrc={youtubeSrc}/>
			
			
			
		</div>
		</div> 
	 );
}
 
export default Foodrecipe;