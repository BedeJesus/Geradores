import { Container, Section, Options, Inner_section,Span } from "./styles";

export default function Form() {
    return (
        <>

            <Container>
                <h1>Crie sua senha</h1>

                <Options>
                    <Section>

                        <Inner_section>
                            <Span>Número de caracters da senha</Span>
                            <input type="number" />
                        </Inner_section>

                        <Inner_section>
                            <Span>Resultado:</Span>
                            <input type="text" />

                        </Inner_section>

                    </Section>




                    <Section>

                        <div>
                            <Span>Letra Maiúscula</Span>
                            <input type="checkbox" />
                        </div>

                        <div>
                            <Span>Números</Span>
                            <input type="checkbox" />
                        </div>

                        <div>
                            <Span>Símbolos</Span>
                            <input type="checkbox" />
                        </div>
                        
                    </Section>

                </Options>


            </Container>
        </>
    )
}