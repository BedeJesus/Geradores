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
background-color: ${props => props.theme.colors.secundary_background};

`
export const Section = styled.div`

display: flex;
flex-direction: column;
padding: 2%;

`

export const Options = styled.div`
display: flex;

`
export const Inner_section = styled.div`
display: flex;
flex-direction: column;
margin: 2%;

`

export const Span = styled.span`
font-size: 1.7em;


`

export const Check = styled.div`

width: 15.5em;
margin: 6.5% 0;
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

export const CheckBox = styled.input.attrs({type:"checkbox"})`

height:50%;
width: 8%;
margin-right: 6%;

`