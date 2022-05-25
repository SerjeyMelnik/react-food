import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ServiceAPI from '../API_SERVICE';
import CategoryFilter from '../components/CategoryFilter';
import ListOfMealsInCategory from '../components/ListOfMealsInCategory';
import SideBar from '../components/SideBar';
import { AppContext } from '../context';
import { getIngredients } from '../utils/getIngredients';





const Category = () => {
	const {allRecipes,allCategories} = useContext(AppContext)

	const [meals,setMeals] = useState([])
	const {categoryName} = useParams();
	const [category,setCategory] = useState({})
	const [filteredMeals,setFilteredMeals] = useState([]);
	const [ingredients,setIngredients] = useState([])
	useEffect(()=>{
		
		if(allCategories.length){
		const mealsByCategory = allRecipes.filter(item => item.strCategory === categoryName);
			setFilteredMeals(mealsByCategory);
			setMeals(mealsByCategory);
			setIngredients([...new Set(mealsByCategory.map(item => getIngredients(item)).flat())])
			setCategory(allCategories.filter(item => item.strCategory === categoryName)[0])
		}
		
	},[categoryName,allCategories,allRecipes])
	
	return ( 
		<div className="category_page_wrapper">
			
		<div className="category_page">
			<div className="category_banner">
				<div className="category_banner-img-wrapper">
					<img src={category.strCategoryThumb} alt="" />
				</div>
				<div className="category_banner-content">
					<h1 className="category_banner-title">
						{category.strCategory}
					</h1>
					<div className="category_banner-description">
						{category.strCategoryDescription}
					</div>
				</div>
			</div>
			<CategoryFilter meals={meals} 
							filteredMeals={filteredMeals} 
							setFilteredMeals={setFilteredMeals}
							ingredients={ingredients}
							/>
			<ListOfMealsInCategory meals={filteredMeals}/>
		</div>
		</div>
	 );
}
 
export default Category;