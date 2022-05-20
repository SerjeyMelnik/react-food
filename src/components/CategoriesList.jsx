import React from 'react';
import CategoryItem from './CategoryItem';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const CategoriesList = ({catalog}) => {
	const sliderSerrings = {
		slidesToShow: 4
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
			  	'not '
			}
			
			
		</div>
	 );
}
 
export default CategoriesList;