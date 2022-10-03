import React,{useContext} from 'react';
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'

import { Container } from './styles';

export default function Header(){

    const {colors} = useContext(ThemeContext)


    return(
        <Container>
        <h1> Gerador </h1>

        <Switch
        onChange={() =>{}}
        checked={false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={colors.primary}
        onColor={colors.secundary}
        />

        </Container>
    )
}