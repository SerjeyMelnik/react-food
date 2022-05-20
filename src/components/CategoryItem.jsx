import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const CategoryItem = ({idCategory,strCategory,strCategoryDescription,strCategoryThumb}) => {
	
	return ( 
		<div className="category_item">
			<Link to={`category/${strCategory}`} className="category_item-link">
				<div className="category_item-img_wrapper">
					<img src={strCategoryThumb} 
						alt={strCategory} 
						className="category_item-img"/>
				</div>
				<h3 className="category_item-name">{strCategory}</h3>
				<p className="category_item-tap_to-open">
					Tap to open category
				</p>
			</Link>
		</div>
	 );
}
 
export default CategoryItem;
