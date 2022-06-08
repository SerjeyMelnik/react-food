import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context';

const CategoriesBurger = () => {
	const [isOpenCateg,setIsSpenCateg] = useState(false);
	const {allCategories} = useContext(AppContext);
	const setCategOnMob = () => {
		setIsSpenCateg(window.innerWidth < 768 ? !isOpenCateg : isOpenCateg )
	}
	return ( 
		<div className="categories_dropdown">
			<button className={`button main-btn ${isOpenCateg ? 'active' : ''}`} 
					onClick={()=>{setIsSpenCateg(!isOpenCateg)}}>
				<div className={`burger ${isOpenCateg ? 'active' : ''}`}>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
				</div>
				<span className='button-text'>Categories</span>
			</button>
			{
				allCategories ?
				<div className={`categories_dropdown_list ${isOpenCateg ? 'active' : ''}`}>
					<ul>
					{
						allCategories.map(category => {
							
								return <li key={category.idCategory}>
									<Link to={`/category/${category.strCategory}`}
											className='categories_dropdown_list-item'
											onClick={setCategOnMob}>{category.strCategory}</Link> 
									</li>
							
						})
					}
					</ul>
				 </div> : null
			}
			
		</div>
	 );
}
 
export default CategoriesBurger;