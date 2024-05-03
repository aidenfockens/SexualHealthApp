import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = Styled.div`
	height: 8vh;
	background-color: ${props => props.theme.main.background};
	color: ${props => props.theme.main.primary};
	display: flex;
	position: fixed;
	box-shadow: 0rem .025rem .5rem 0 black;
	z-index: 100;
	width: 100vw;
	top: 0;
	left: 0;
`

export const HeaderTitle = Styled.h1`
	font-weight: 500;
	margin: auto 3vw;
	user-select: none;
	font-size: 3rem;
	font-family: "Roboto";
`

export const HeaderSubtitle = Styled.h1`
	font-weight: 300;
	margin: auto 1rem;
	user-select: none;
	font-size: 1.5rem;
`

export const LayoutButtonLink = Styled(Link)`
	font-weight: 400;
	font-size: 1.25vw;
	text-align: center;
	font-family: "Roboto";
	text-decoration: none;

	margin: auto .5rem;
	height: 6vh;
	width: auto;
	display: flex;
	padding: 0 1rem;
	align-items: center;

	background-color: ${props => props.theme.main.primary};
	color: ${props => props.theme.main.tertiary};
	opacity: .9;
	border-radius: .2rem;
	border: none;
	
`