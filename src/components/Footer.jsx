import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const links = ['Categories','Favorites','Countries','Dish of the day'];
	return ( 
	<footer>
			<div className="footer-top">
				<h1 className='logo'><Link to='/'>ReceiptChef</Link></h1>
				<div className="footer-links">
					{
						links.map(link =>
							<Link key={link} to='/' className='footer-link'>{link}</Link>
							 )
					}
				</div>
			</div>
			<div className="footer-bottom">
				<span className='all-rigths'>All rights reserved</span>
				<span className='design-by'>Design by Mazuryk Vladyslav</span>
			</div>
	</footer> 
	);
}
 
export default Footer;