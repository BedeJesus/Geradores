import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center; 
margin: 2% 3% 1% 3%;
border: 3px solid white;
border-radius: 10px;
color: ${props => props.theme.colors.text};
background-color: ${props => props.theme.colors.primary};
box-shadow: 0 0 15px 1px black;


`
export const Section = styled.div`
display: flex;
flex-direction: column;
padding: 2%;

`

export const Options = styled.div`
display: flex;
justify-content: space-around;
`
export const Inner_section = styled.div`
display: flex;
flex-direction: column;
margin: 3% 0  ;
width: 25em; // fazer alterar depois para fazer responsivo
`

export const Span = styled.span`
font-size: 1.7em;
`
export const Check = styled.div`
margin: 6% 0% 5% 0%;
width: 14em;
display: flex;
`
export const Input = styled.input`

background-color: ${props => props.theme.colors.primary_background};
border-color: black;
border-radius: 6px;
font-size: medium;
color: ${props => props.theme.colors.text};
padding: 0.5% 0.5% 0.5% 2%;

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

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
width: 8%;
margin-right: 2%;
margin-top: 1.5%;

`
export const Buttons = styled.div`
display: flex;
justify-content: space-around;
`

export const CopyPaste = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: none;
padding:0.5% 5%;
border-radius: 10px;
color:${props => props.theme.colors.text}; 
 :hover{
  background-color: ${props => props.theme.colors.primary_background};
  transition: .3s;
  cursor: pointer;

 }
`

export const Button = styled.button`
background-color: transparent;
color:${props => props.theme.colors.text};
border:none;
margin-top:3%;
margin-right: 4%;
:hover{
  cursor: pointer;
}
`



