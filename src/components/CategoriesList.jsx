import React from 'react';
import CategoryItem from './CategoryItem';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderCategoryHomePagePreloader from './preloaders/SliderCategoryHomePagePreloader';
const CategoriesList = ({catalog}) => {
	const sliderSerrings = {
		slidesToShow: 4,
		
		responsive: [
			{
				breakpoint: 1000,
				settings: {
				  slidesToShow: 3,
				}
			  },
			  {
				breakpoint: 768,
				settings: {
				  slidesToShow: 2,
				}
			  },
			  {
				breakpoint: 500,
				settings: {
				  slidesToShow: 1,
				}
			  }
		]
	}

	return ( 
		<div className="category_list">
			
			{
				catalog.length ?
				<Slider {...sliderSerrings}>
					{
						catalog.map(item => <CategoryItem key={item.idCategory} {...item}/>)
					}
				</Slider> :
			  	<SliderCategoryHomePagePreloader/>
			}
			
			
		</div>
	 );
}
 
export default CategoriesList;