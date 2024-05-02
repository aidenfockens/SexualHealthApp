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
`

export const HomeImg = Styled.img`
    height: 50vh;
    width: auto;
    margin: auto auto auto 2vw;
`