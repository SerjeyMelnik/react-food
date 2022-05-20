import React, { useContext, useState } from 'react';
import { AppContext } from '../context';

const BannerSearch = () => {
	const {allRecipes} = useContext(AppContext)
	const [searchQuery,setSearchQuery] = useState('');
	const searchRecipe = (e) => {
		const query = e.target.value;
		setSearchQuery(query);
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
			<div className="banner_search_result">

			</div>
		</div>
	 );
}
 
export default BannerSearch;