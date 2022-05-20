import React, { useContext, useEffect, useState } from 'react';
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import ServiceAPI from '../API_SERVICE';
import { AppContext } from '../context';
import CategoriesBurger from './CategoriesBurger';

const Header = () => {
	const {setALLCategories,setAllRecipes} = useContext(AppContext);
	
	const navigateTo = useNavigate();
	const [scrolled,setScrolled] = useState(false);
	const {pathname} =  useLocation();
	const scrollHandle = () => {
		if (pathname === '/')	setScrolled(window.pageYOffset > 90 );
		else setScrolled(true);
	}
	const init = () => {
		
		ServiceAPI.getALLFoodCategiries().then(data => {
			setALLCategories(data.categories)
			}
		)
		ServiceAPI.getALLRecipes().then(data =>
			setAllRecipes(data)
		)
	}

	useEffect(()=>{
		init()
	},[])
	useEffect(()=>{
		
		scrollHandle()
		window.addEventListener('scroll', ()=>{scrollHandle()});

		return window.removeEventListener('scroll', scrollHandle);
	},[pathname])
	
	return ( 
	<header className={scrolled ? 'scrolled' : ''}>
		<button className='button second-btn' onClick={()=>{navigateTo('/wishlist')}}>
					<i className="material-icons " >favorite_border</i> 
					{/* <span className='liked_numb'>{wishList.length}</span> */}
					<span className='button-text'>Favorite</span>
		</button>
		<h1 className='logo'><Link to='/'>ReceiptChef</Link></h1>
		<CategoriesBurger/>
	</header> );
}
 
export default Header;