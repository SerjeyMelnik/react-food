import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context';

const SideBar = () => {
	const {allCategories} = useContext(AppContext);
	const {categoryName} = useParams();
	const isCurrent = (cat) => {
		return cat === categoryName ? 'current' : '';
	}
	return ( <section className='sidebar'>
		<div className="sidebar_categories">
			<Link to='/' className='sidebar_categories_link'>All Categoties</Link>

			{
				allCategories.map(item => 
					<Link 
						key={item.strCategory} 
						to={`/category/${item.strCategory}`}
						className={`sidebar_categories_link ${isCurrent(item.strCategory)}`}
						>{item.strCategory}</Link>
					)
			}
		</div>
	</section> );
}
 
export default SideBar;