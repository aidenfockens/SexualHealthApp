import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = Styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.main.background};
    top: 0;
	left: 0;
    display: flex;
    margin: 0 !important;
    position: absolute;
    align-items: center;
`

export const BlurbContainer = Styled.div`
    height: min-content;
    width: 40vw;
    background-color: ${props => props.theme.main.secondary};
    color: ${props => props.theme.main.text};
    padding: 1.5rem;
    margin: auto 2vw auto auto;
    font-size: 1rem;
    align-items: center;
    display: grid;
`

export const BlurbText = Styled.p`
    font-size: 1vw;
    text-align: center;
    font-family: "Roboto";
`

export const BlurbButton = Styled.button`
    font-weight: 400;
    font-size: 2rem;
    font-family: "ROBOTO";
    text-decoration: none;
    margin: auto;
    cursor: pointer;

    height: 6vh;
    width: auto;

    background-color: ${props => props.theme.main.primary};
    color: ${props => props.theme.main.tertiary};
    border-radius: .25rem;
`

export const HomeImg = Styled.img`
    height: 50vh;
    width: auto;
    margin: auto auto auto 2vw;
`