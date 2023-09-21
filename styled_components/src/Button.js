import styled from 'styled-components';

const Button =styled.button`
background-color:${props => props.color || 'bule'};
color: #ffffff;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #0077cc;
border-radius: 3px
`;

export default Button;