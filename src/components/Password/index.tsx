import { Container, Section, Options, Inner_section, Span, Check, Input, CheckBox } from "./styles";
import React, { useState } from "react";

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
        const upperletters = lowerletters.map((letter) => (letter.toUpperCase()))

        const password: string[] = []

        password.concat(lowerletters)

        if (checkUpperCase) {
            password.concat(upperletters)
        }

        if (checkNumber) {
            password.concat(numbers)
        }

        if (CheckSymbols) {
            password.concat(symbols)
        }


        for (let i = 0; i <= length; i++) {


        }

    
    }

    return (
        <Container>
            <h1>Gere sua senha</h1>

            <Options>
                <Section>
                    <>
                    {console.log(generatePassword())}
                    </>

                    <Inner_section>
                        <Span>Número de caracteres da senha </Span>
                        <Input type="number" placeholder="Ex: 8" onChange={(e: React.FormEvent<HTMLInputElement>) => setLength(parseInt(e.currentTarget.value))} />
                    </Inner_section>

                    <Inner_section>
                        <Span>Resultado:</Span>
                        <Input type="text"  />

                    </Inner_section>

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