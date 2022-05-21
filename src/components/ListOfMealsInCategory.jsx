import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

const ListOfMealsInCategory = ({meals}) => {
	const {addToWishList,wishList} = useContext(AppContext);
	return ( 
	<div className="list_of_meals">
		
		{
			meals.length ?
			meals.map((item) => {
			return <div key={item.idMeal} className="category_page_meal">
					<div className="category_page_meal-img_wrapper">
						<img src={item.strMealThumb} alt={item.strMeal} className='category_page_meal-img' />
					</div>
					<p className="category_page_meal-name">
						<Link to={`recipe/${item.idMeal}`}>{item.strMeal}</Link>
						</p>
						<i className="material-icons like" onClick={()=>{addToWishList(item)}}>
							{
							wishList.filter(meal => item.idMeal === meal.idMeal).length 
							?
							'favorite'
							:
							'favorite_border'
							}
							</i>
				</div>
			}) :
			'not'
			}
	</div> );
}
 
export default ListOfMealsInCategory;