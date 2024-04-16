import React from 'react';
import Header from './Header.jsx';

const Layout = ({children}) => {
	return (
		<div>
			<Header />
				{children}
		</div> 
	)
}

export default Layout;