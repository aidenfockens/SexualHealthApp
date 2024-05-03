import React from 'react';
import { HeaderContainer, HeaderTitle, HeaderSubtitle, LayoutButton, LayoutButtonLink } from "../Components/Layout.Styles.js";
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle>
                BodyCount
			</HeaderTitle>

			<div className="layoutButtons">

				<LayoutButtonLink  to={"/login"}>
						Log in / Sign up
				</LayoutButtonLink>

				<LayoutButtonLink to={"/writeConnections"}>
						Add new Bodies
				</LayoutButtonLink>

				<LayoutButtonLink to={"/viewConnections"}>
						View your Bodies
				</LayoutButtonLink>

				<LayoutButtonLink to={"/Status"}>
						Check STD Status
				</LayoutButtonLink>

				<LayoutButtonLink to={"/Symptom"}>
						Check Symptoms
				</LayoutButtonLink>

				<LayoutButtonLink to={"/Map"}>
						Trip to Clinic
				</LayoutButtonLink>
				
			</div>
		</HeaderContainer>
	)
}

export default Header;