import React, { useState } from 'react';

const CategorySearch = ({querySearch,setQuerySearch}) => {
	
	
	const searchRecipe = (e) => {
		const query = e.target.value;
		setQuerySearch(query);
	}
	return ( 
		<div className="category_search_wrapper">
			<div className="category_search_inner">
					<button className='button search-btn'>
							<div className="inner-btn">
								<i className="material-icons">search</i>
								<span className='button-text'>Search</span> 
							</div>
					</button>
					<input type="text"
							placeholder='Search any recipes'
							value={querySearch} 
							onChange={searchRecipe}
							/>
					
			</div>
		</div>
	 );
}
 
export default CategorySearch;