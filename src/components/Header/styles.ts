import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color: black;
box-shadow: 0 0 10px 2px black;
justify-content: space-between;
align-items: center;
height: 8vh;
padding:0 4%;
color: ${props => props.theme.colors.text};


`