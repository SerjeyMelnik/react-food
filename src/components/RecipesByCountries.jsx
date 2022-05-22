import React, { useEffect, useState } from 'react';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ServiceAPI from '../API_SERVICE';
import {  getAllCountries, getCountryByName } from '../utils/Country';
import RecipeCart from './RecipeCart';
import LoaderSpiner from './loader-spiner/LoaderSpiner';

const RecipesByCountries = () => {
	const [recipes, setRecipes] = useState([]);
	const [country,setCountry] = useState('American');
	const [showMore,setShowMore] = useState(false);
	const [loadShowMore,setLoadShowMore] = useState(false);

	const recipesToShow = 4;
	const countriesSliderSettings = {
		slidesToShow: 12,
		infinite:false
		
	}
	const selectCoutry = (country) => {
		setCountry(country);
		setShowMore(false);

	}
	const showMoreFun = () => {
		setLoadShowMore(true)
		const timeOut = setTimeout(()=>{
			setShowMore(true);
			setLoadShowMore(false)

		},1000);
	}
	useEffect(()=>{
		ServiceAPI.getRecipesByCoutry(country).then(data => setRecipes(data.meals))
	},[country])
	return ( 
		<div className="recipes_by_coutries-wrapper">
			<h2 className="title">Dishes from around the world</h2>
			<div className='recipes_by_coutries-inner'>
				<div className="countries_flags">
					<Slider {...countriesSliderSettings}>
						{
							
							getAllCountries().map(item => {
								return <div className={`country ${country === item.country ? 'current' : ''}`}
											key={item.flag}
											onClick={()=>selectCoutry(item.country)}
											>
											<div className="country_img-wrapper">
												<img src={item.flag} />
											</div>
											<p>{item.country}</p> 
										</div>
							})
						}

					</Slider>
					
				</div>
				<div className="recipes_by_coutries">
					{
						recipes.length 
						?
							recipes.length > recipesToShow && !showMore ?
							recipes.map((item,indx) =>
								{
								return indx < recipesToShow ?
								<RecipeCart key={item.idMeal} {...item}/> :
								null
								} 
							)
							:
							recipes.map(item =>
								<RecipeCart key={item.idMeal} {...item}/>
							)
						:
						null
					}
				</div>
				{
					recipes.length > recipesToShow && !showMore?
					<div className='show-more' onClick={()=>{showMoreFun()}}>
						Show more recipes 
						{
							loadShowMore ?
							<LoaderSpiner /> :
							null
						}
					</div>
					:
					null
				}
			</div>
		</div>
	 );
}
 
export default RecipesByCountries;