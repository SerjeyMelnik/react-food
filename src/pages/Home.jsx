import React, { useContext, useEffect } from 'react';
import ServiceAPI from '../API_SERVICE';
import CategoriesList from '../components/CategoriesList';
import HomeBaner from '../components/HomeBaner';
import RecipeOfTheDay from '../components/RecipeOfTheDay';
import { AppContext } from '../context';


const Home = () => {
	const {allCategories} = useContext(AppContext);
		
	return ( 
		<div className='home_page'>
			<HomeBaner/>
			<CategoriesList catalog={allCategories}/>
			<RecipeOfTheDay/>
		</div>
	 );
}
 
export default Home;