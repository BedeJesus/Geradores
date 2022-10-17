import React, { useState } from "react";
import { Container, Section, Inner_section, Span, Input, Options } from "./styles";



export default function Number() {

    const [initialNumber, setInitialNumber] = useState(0)
    const [lastNumber, setLastNumber] = useState(0)


    function randomNumber() {
        return Math.floor(Math.random() * (lastNumber - initialNumber + 1)) + initialNumber

    }

    function handleOnChangeInitial(e: React.FormEvent<HTMLInputElement>) {
        setInitialNumber(parseInt(e.currentTarget.value))
    }

    function handleOnChangeLast(e: React.FormEvent<HTMLInputElement>) {
        setLastNumber(parseInt(e.currentTarget.value))
    }


    return (

        <Container>
            <h1>Gere o seu número</h1>

            <Section>


                <Options>

                    <Inner_section>
                        <Span>Número Inicial</Span>

                        <Input type="number" placeholder="Ex: 2" onChange={handleOnChangeInitial} />
                    </Inner_section>


                    <Inner_section>
                        <Span>Número Final</Span>
                        <Input type="number" placeholder="Ex: 9" onChange={handleOnChangeLast} />
                    </Inner_section>

                </Options>

                <Inner_section>
                    <Span>Resultado:</Span>
                    <Input type="number" value={randomNumber()} />
                </Inner_section>

            </Section>

        </Container>

    )
}