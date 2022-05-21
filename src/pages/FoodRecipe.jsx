import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceAPI from '../API_SERVICE';
import SideBar from '../components/SideBar';
import { AppContext } from '../context';
import { getIngredients } from '../utils/getIngredients';

const Foodrecipe = () => {
	const [recipe,setRecipe] = useState({});
	const [ingredients,setIngredients] = useState([]);
	const {recipeID,categoryName} = useParams();
	const {addToWishList,wishList} = useContext(AppContext)

	useEffect(()=>{
		ServiceAPI.getRecipeById(recipeID).then(data => {
			setRecipe(data.meals[0]);
			setIngredients(getIngredients(data.meals[0]))
		});
		
	},[recipeID])
	const cont = useContext(AppContext);

	return (
		<div className="recipe_wrapper">
			{/* <SideBar/> */}
		<div className='recipe' style={{textAlign:"center"}}>
			<img src={recipe.strMealThumb} alt="" width='500px'/>
			<h1>{recipe.strMeal} 
			<span onClick={()=>{addToWishList(recipe)}}>
				<i className="material-icons like">
				{
							wishList.filter(meal => recipe.idMeal === meal.idMeal).length
							?
							'favorite'
							:
							'favorite_border'
						}
				</i>
			</span>
			</h1>
			<p>Category: {recipe.strCategory}</p>
			<p>Area: {recipe.strArea}</p>
			<p>{recipe.strInstructions}</p>
			<table>
				<thead>
					<tr>
						<td>Ingredient image</td>
						<td>Ingredient</td>
						<td>Mesure</td>
					</tr>
				</thead>
				<tbody>
					{
						ingredients.length ? 
						ingredients.map(ing => 
							{
							 return <tr key={ing.ingredient + ing.measure}>
								<td><img src={ing.thumbSmall} width='100px'/></td>
								<td>{ing.ingredient}</td>
								<td>{ing.measure}</td>
							</tr>
							}
							) :
							<tr></tr>
					}
				</tbody>
			</table>
			{
				recipe.strYoutube ?
				<>
				<h3>Video recipe</h3>
				<iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.replace('https://www.youtube.com/watch?v=','')}`} frameBorder="0" allowFullScreen width='500px' height='350px'></iframe> 
				</>
				:
				''
			}
		</div>
		</div> 
	 );
}
 
export default Foodrecipe;