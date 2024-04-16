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

				<LayoutButtonLink to={"/personal"}>
					<LayoutButton>
						log in
					</LayoutButton>
				</LayoutButtonLink>

				<LayoutButton className="dropdown">
					more info
					<div className="dropdownMenu">

						<div className="dropdownBuffer" />

						<div className="dropdownLink">
							<Link to={"/"}>
								<p> info1 </p>
							</Link>
						</div>

						<div className="dropdownLink">
							<Link to={"/"}>
								<p> info2 </p>
							</Link>
						</div>


						<div className="dropdownLink">
							<Link to={"/"}>
								<p> hai :3 </p>
							</Link>
						</div>

					</div>
				</LayoutButton>


				<LayoutButtonLink to={"/"}>
					<LayoutButton>
						about this site
					</LayoutButton>
				</LayoutButtonLink>
			</div>
		</HeaderContainer>
	)
}

export default Header;