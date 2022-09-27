import styled from "styled-components";

export const Container = styled.div`


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin: 3%;
border: 3px solid white;
border-radius: 10px;

color: ${props => props.theme.colors.text};
background-color:${props => props.theme.colors.secundary_background};


`


export const Section = styled.div`

display: flex;
flex-direction: column;
padding: 3%;
justify-content: center;

`

export const Options = styled.div`
display: flex;

`
export const Inner_section = styled.div`
display: flex;
flex-direction: column;

`

export const Span = styled.span`
font-size: 1.7em;

`