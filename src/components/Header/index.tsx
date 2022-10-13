import React, { useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { Sun, Moon } from 'phosphor-react';
import { Container,Mooon } from './styles';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { colors, title } = useContext(ThemeContext)


    return (
        <Container>
            <h1> Geradores </h1>



            <div>
                <Moon size={23} />
                

                <Switch
                    onChange={toggleTheme}
                    checked={title === 'light'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={15}
                    width={40}
                    handleDiameter={20}
                    offColor={colors.primary}
                    onColor={colors.secundary}
                    
                />

                <Sun size={23} />


            </div>


        </Container>
    )
}

export default Header