import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const links = [
		{
			name: 'Categories',
			path: '/'
		},
		{
			name: 'Favorites',
			path: '/wishlist'
		},
		{
			name: 'Countries',
			path: '/'
		},
		{
			name: 'Dish of the day',
			path: '/'
		}
		];
	return ( 
	<footer>
			<div className="footer-top">
				<h1 className='logo'><Link to='/'>ReceiptChef</Link></h1>
				<div className="footer-links">
					{
						links.map(link =>
							<Link key={link.name} to={link.path} className='footer-link'>{link.name}</Link>
							 )
					}
				</div>
			</div>
			<div className="footer-bottom">
				<span className='all-rigths'>© All rights reserved </span>
				<span className='design-by'>Design by Mazuryk Vladyslav</span>
			</div>
	</footer> 
	);
}
 
export default Footer;