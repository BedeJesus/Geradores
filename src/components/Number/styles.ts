import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin: 3%;
border: 3px solid white;
border-radius: 10px;
color: ${props => props.theme.colors.text};
background-color: ${props => props.theme.colors.secundary_background};
box-shadow: 0 0 15px 2px black;


`
export const Section = styled.div`

display: flex;
flex-direction: column;


padding: 2%;

`
export const Inner_section = styled.div`
display: flex;
flex-direction: column;
margin: 2% 0% ;
padding:0 1em 0 1em;

`

export const Span = styled.span`
font-size: 1.7em;


`
export const Options = styled.div`
display: flex;


`



export const Input = styled.input`

background-color: ${props => props.theme.colors.primary_background};
border-color: black;
border-radius: 6px;
color: white;
padding: 0.4%;

::placeholder {
    color: palevioletred;
    padding-left: 2%;
  }

  &:focus{
    outline: none;
  }

  ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
`
