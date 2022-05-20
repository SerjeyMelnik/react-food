import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ServiceAPI from '../API_SERVICE';
import CategoryFilter from '../components/CategoryFilter';
import ListOfMealsInCategory from '../components/ListOfMealsInCategory';
import SideBar from '../components/SideBar';
import { AppContext } from '../context';





const Category = () => {
	const [meals,setMeals] = useState([])
	const {categoryName} = useParams();
	const [filteredMeals,setFilteredMeals] = useState([]);
	useEffect(()=>{
		ServiceAPI.getMealsByCategory(categoryName).then(data => {
			setFilteredMeals(data.meals);
			setMeals(data.meals);
		})
	},[categoryName])
	const {addToWishList,wishList} = useContext(AppContext)
	return ( 
		<div className="category_page_wrapper">
			<SideBar/>
		<div className="category_page">
			
			<CategoryFilter meals={meals} 
							filteredMeals={filteredMeals} 
							setFilteredMeals={setFilteredMeals}
							/>
			<ListOfMealsInCategory meals={filteredMeals}/>
		</div>
		</div>
	 );
}
 
export default Category;