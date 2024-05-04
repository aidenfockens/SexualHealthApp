import React from 'react';
import { HeaderContainer, HeaderTitle, HeaderSubtitle, LayoutButton, LayoutButtonLink} from "../Components/Layout.Styles.js";
import { Link } from 'react-router-dom';

const Header = () => {

	const logOut = () => {
		window.location.pathname = '/';
	}

	return (
		<HeaderContainer>
			<HeaderTitle>
                BodyCount
			</HeaderTitle>

			<div className="layoutButtons">

				<LayoutButton onClick={logOut}>
						Log out
				</LayoutButton>

				<LayoutButtonLink to={"/Status"}>
						Check STD Status
				</LayoutButtonLink>

				<LayoutButtonLink to={"/writeConnections"}>
						Add new Partners
				</LayoutButtonLink>

				<LayoutButtonLink to={"/viewConnections"}>
						View your Partners
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