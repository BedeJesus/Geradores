import { Container, Section, Options, Inner_section, Span,Check, Input, CheckBox } from "./styles";

export default function Form() {
    return (
        <>

            <Container>
                <h1>Crie sua senha</h1>

                <Options>
                    <Section>

                        <Inner_section>
                            <Span>Número de caracteres da senha</Span>
                            <Input type="number"placeholder="Ex: 8" />
                        </Inner_section>

                        <Inner_section>
                            <Span>Resultado:</Span>
                            <Input type="text" />

                        </Inner_section>

                    </Section>


                    <Section>

                        <Check>
                            <CheckBox type="checkbox" />
                            <Span>Letra Maiúscula</Span>
                        </Check>

                        <Check>
                            <CheckBox type="checkbox" />
                            <Span>Números</Span>
                        </Check>

                        <Check>
                            <CheckBox type="checkbox" />
                            <Span>Símbolos</Span>
                        </Check>

                    </Section>

                </Options>


            </Container>
        </>
    )
}