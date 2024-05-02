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
`

export const BlurbContainer = Styled.div`
    height: 25vh;
    width: 25vw;
    background-color: ${props => props.theme.main.secondary};
    color: ${props => props.theme.main.text};
    padding: 1.5rem;
    margin: auto;
    font-size: 1.25rem;
`