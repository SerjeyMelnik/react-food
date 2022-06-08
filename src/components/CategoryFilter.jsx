import React, { useEffect, useState } from 'react';
import CategorySearch from './CategorySearch';
import Selector from './selector/Selector';
import {getAllCountries} from '../utils/Country';
import {getIngredients} from '../utils/getIngredients';
const CategoryFilter = ({meals,filteredMeals,setFilteredMeals,ingredients}) => {
	
	const [area,setArea] = useState({text:'All country'});
	const [ingredient,setIngredient] = useState({text:'All ingredients'});
	const [querySearch,setQuerySearch] = useState('')
	
  	
	const filterMeal = () => {
		
		const filtered = area.text !== 'All country' ? meals.filter(item => item.strArea === area.text ) : meals;
		console.log(filtered);
		setFilteredMeals(filtered.filter(item => item.strMeal.toLowerCase().includes(querySearch.toLowerCase())));
	}
	useEffect(()=>{
		filterMeal()
	},[area,querySearch])
	return ( 
		<div className="category_filter">
			<div className="category_filter_item">
				<CategorySearch setQuerySearch={setQuerySearch} 
								querySearch={querySearch} />
			</div>
			<div className="category_filter_item">
				<Selector label='sort by country' 
						  data={getAllCountries()}
						  defaultValue='All country'
						  value = {area}
						  setValue = {setArea}
						  />
			</div>
			<div className="category_filter_item">
				<Selector label='sort by ingredient' 
						  data={ingredients}
						  defaultValue='All ingredients'
						  value = {ingredient}
						  setValue = {setIngredient}
						  />
			</div>
		</div>
	 );
}
 
export default CategoryFilter;