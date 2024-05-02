import React from 'react';
import { HeaderContainer, HeaderTitle, HeaderSubtitle, LayoutButton, LayoutButtonLink } from "../Components/Layout.Styles.js";
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle>
                unnamedHealthApp
			</HeaderTitle>

			<div className="layoutButtons">

				<LayoutButtonLink  to={"/personal"}>
						Log in / Sign up
				</LayoutButtonLink>

				<LayoutButtonLink to={"/info"}>
						Misc. info
				</LayoutButtonLink>

				<LayoutButtonLink className="rightEndButton" to={"/"}>
						About this site
				</LayoutButtonLink>

				
			</div>
		</HeaderContainer>
	)
}

export default Header;