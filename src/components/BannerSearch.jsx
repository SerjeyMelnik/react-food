import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

const BannerSearch = () => {
	const {allRecipes} = useContext(AppContext)
	const [searchQuery,setSearchQuery] = useState('');
	const searchRecipe = (e) => {
		const query = e.target.value;
		setSearchQuery(query);
	}
	const filteredRecipes = () => {
		return allRecipes.filter(recipe => 
			recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
			).map(recipe => 
				<li key={recipe.idMeal}>
					<i className="material-icons">search</i>
					<Link to={`category/${recipe.strCategory}/recipe/${recipe.idMeal}`}>
						{recipe.strMeal}
					</Link>
				</li>
				);
	}
	return ( 
		<div className="banner_search">
			<div className="banner_search_inner">
				<button className='button search-btn'>
						<div className="inner-btn">
							<i className="material-icons">search</i>
							<span className='button-text'>Search</span> 
						</div>
				</button>
				<input type="text"
						placeholder='Search any recipes'
						value={searchQuery} 
						onChange={searchRecipe}
						/>
				
			</div>
		
				{
					searchQuery.length  
					?
					<div className="banner_search_result">
						{
							filteredRecipes().length ?
							<ul>
								{ filteredRecipes() }
							</ul>
							 :
							<p className='notFound'>Not found</p>
						}
						
					</div>
					:
					null
				}
			
		</div>
	 );
}
 
export default BannerSearch;