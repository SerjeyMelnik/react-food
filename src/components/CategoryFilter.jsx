import React, { useState } from 'react';

const CategoryFilter = ({meals,filteredMeals,setFilteredMeals}) => {
	const [searchQuery,setSearchQuery] = useState('');
	const [filtertByAlfabet,setFiltertByAlfabet] = useState(false);

	const searchMeal = (e) => {
		let query = e.target.value;
		console.log(query);
		setSearchQuery(query);
		if (query === '')
		{
			setFilteredMeals(meals)
		}
		else setFilteredMeals(meals.filter(item =>
				 item.strMeal.toLowerCase().includes(query.toLowerCase())
			))
	}
	const filterMeal = (byAlfabet,searchQuery) => {

	}
	return ( 
		<div className="category_filter">
			<div className="filter_item">
				<div className="filter_search">
					<input type="text"
							value={searchQuery} 
							onChange={searchMeal}
							/>
				</div>
			</div>
			<div className="filter_item">
				<div className="filter_by_alfabet">
					<input type="checkbox" 
							name="" 
							id="by" 
							/>
					<label htmlFor="">

					</label>
				</div>
			</div>
		</div>
	 );
}
 
export default CategoryFilter;