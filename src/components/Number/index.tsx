import React, { useEffect, useState } from "react";
import { Container, Section, Inner_section, Span, Input, Options,Buttons,Button,CopyPaste } from "./styles";
import { Copy, ArrowCounterClockwise } from 'phosphor-react';



export default function Number() {

    const [initialNumber, setInitialNumber] = useState(0)
    const [lastNumber, setLastNumber] = useState(0)
    const [reload, setReload] = useState(false)
    const [number, setNumber] = useState(0)

    useEffect(()=>{
        const value = Math.floor(Math.random() * (lastNumber - initialNumber + 1)) + initialNumber
        setNumber(value)
    },[reload,initialNumber,lastNumber])


    function handleOnChangeInitial(e: React.FormEvent<HTMLInputElement>) {
        setInitialNumber(parseInt(e.currentTarget.value))
    }

    function handleOnChangeLast(e: React.FormEvent<HTMLInputElement>) {
        setLastNumber(parseInt(e.currentTarget.value))
    }

    function GenerateOtherNumber() {
        reload ? setReload(false) : setReload(true)
    }

    function CopyNumber() {
        navigator.clipboard.writeText(number.toString())
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
                    <Input type="number" value={number} />
                </Inner_section>

                <Buttons>

                        <CopyPaste onClick={()=> CopyNumber()}>
                            <Button> <Copy size={35} weight="fill" /></Button>
                            <Span>Copiar</Span>
                        </CopyPaste>

                        <CopyPaste onClick={() => GenerateOtherNumber()}>
                            <Button> <ArrowCounterClockwise size={30} weight="bold" /> </Button>
                            <Span>Gerar</Span>
                        </CopyPaste>

                    </Buttons>

            </Section>

        </Container>

    )
}