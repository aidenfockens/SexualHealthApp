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

				<LayoutButtonLink  to={"/login"}>
						Log in / Sign up
				</LayoutButtonLink>

				<LayoutButtonLink to={"/writeConnections"}>
						add new Connections
				</LayoutButtonLink>

				<LayoutButtonLink to={"/viewConnections"}>
						view your Connections
				</LayoutButtonLink>

				<LayoutButtonLink to={"/Status"}>
						Check  Status
				</LayoutButtonLink>

				<LayoutButtonLink to={"/Symptom"}>
						Symptom checker
				</LayoutButtonLink>

				<LayoutButtonLink to={"/Map"}>
						Trip to Clinic
				</LayoutButtonLink>
				
			</div>
		</HeaderContainer>
	)
}

export default Header;