import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = Styled.div`
	height: 8vh;
	padding: 0 20rem;
	background-color: ${props => props.theme.main.background};
	color: ${props => props.theme.main.primary};
	display: flex;
	position: absolute;
	box-shadow: 0rem .025rem .5rem 0 ${props => props.theme.main.tertiary};
	z-index: 100;
	width: 100vw;
	top: 0;
`

export const FooterContainer = Styled.div`
	height: 12vh;
	padding: 0rem 20rem;
	background-color: ${props => props.theme.main.secondary};
	color: ${props => props.theme.main.text};
	display: flex;
	position: aboslute;
    box-shadow: 0rem .025rem 1rem 0 ${props => props.theme.main.tertiary};
	z-index: 100;
	width: 100vw;
	bottom: 0;
`

export const HeaderTitle = Styled.h1`
	font-weight: 500;
	margin: auto 0;
	user-select: none;
	font-size: 3rem;
`

export const HeaderSubtitle = Styled.h1`
	font-weight: 300;
	margin: auto 1rem;
	user-select: none;
	font-size: 1.5rem;
`

export const LayoutButton = Styled.button`
	font-weight: 500;
	font-size: 1.25vw;
	text-align: center;
	height: 100%;
	width: auto;
	background-color: ${props => props.theme.main.primary};
	color: ${props => props.theme.main.text};
`

export const LayoutButtonLink = Styled(Link)`
	margin: auto 0rem auto 1rem;
	height: 4.8vh;
	display: inline-block;
`