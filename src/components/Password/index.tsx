import { Container, Section, Options, Inner_section, Span, Check, Input, CheckBox, Buttons, CopyPaste, Button } from "./styles";
import React, { useState } from "react";
import { Copy, ArrowCounterClockwise } from 'phosphor-react';

export default function Password() {


    const [length, setLength] = useState(0)
    const [checkUpperCase, setcheckUpperCase] = useState(false)
    const [checkNumber, setcheckNumber] = useState(false)
    const [CheckSymbols, setCheckSymbols] = useState(false)

    function generatePassword() {

        const numbers: string[] = ["0", "1", "2", "3", "4", '5', '6', '7', "8", "9"]
        const symbols: string[] = ["!", "@", "#", "$", "%", "&", "*"]
        const letters = Array.from(Array(26)).map((_, i) => i + 97)
        const lowerletters = letters.map((letter) => String.fromCharCode(letter))
        const upperLetters = lowerletters.map((letter) => (letter.toUpperCase()))

        let characters = lowerletters

        if (checkUpperCase) {
            characters = characters.concat(upperLetters)
        }

        if (checkNumber) {
            characters = characters.concat(numbers)
        }

        if (CheckSymbols) {
            characters = characters.concat(symbols)
        }

        const password: string[] = []
        for (let i = 1; i <= length; i++) {
            const character = characters[Math.floor(Math.random() * characters.length)]
            password.push(character)

        }

        return password.join('')

    }

    return (
        <Container>
            <h1>Gere sua senha</h1>

            <Options>
                <Section>

                    <Inner_section>
                        <Span>Número de caracteres da senha </Span>
                        <Input type="number" placeholder="Ex: 8" onChange={(e: React.FormEvent<HTMLInputElement>) => setLength(parseInt(e.currentTarget.value))} />
                    </Inner_section>

                    <Inner_section>
                        <Span>Resultado</Span>
                        <Input type="text" value={generatePassword()} />
                    </Inner_section>

                    <Buttons>

                        <CopyPaste>
                            <Button> <Copy size={35} weight="fill" /></Button>
                            <Span>Copiar</Span>
                        </CopyPaste>

                        <CopyPaste>
                            <Button> <ArrowCounterClockwise size={30} weight="bold" /> </Button>
                            <Span>Gerar</Span>
                        </CopyPaste>

                    </Buttons>

                </Section>

                <Section>

                    <Check>
                        <CheckBox type="checkbox" onChange={(e: React.FormEvent<HTMLInputElement>) => checkUpperCase ? setcheckUpperCase(false) : setcheckUpperCase(true)} />
                        <Span>Letra Maiúscula</Span>
                    </Check>

                    <Check>
                        <CheckBox type="checkbox" onChange={(e: React.FormEvent<HTMLInputElement>) => checkNumber ? setcheckNumber(false) : setcheckNumber(true)} />
                        <Span>Números</Span>
                    </Check>

                    <Check>
                        <CheckBox type="checkbox" onChange={(e: React.FormEvent<HTMLInputElement>) => CheckSymbols ? setCheckSymbols(false) : setCheckSymbols(true)} />
                        <Span>Símbolos</Span>
                    </Check>

                </Section>
            </Options>
        </Container>
    )
}