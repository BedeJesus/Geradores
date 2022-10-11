import { Container, Section, Inner_section, Span, Input, Options } from "./styles";



export default function Number() {
    return (
        <Container>
            <h1>Gere o seu número</h1>

            <Section>

                <Options>
                    
                    <Inner_section>
                        <Span>Número Inicial</Span>
                        <Input type="number" placeholder="Ex: 2" />
                    </Inner_section>

                    <Inner_section>
                        <Span>Número Final</Span>
                        <Input type="number" placeholder="Ex: 9" />
                    </Inner_section>

                </Options>

                <Inner_section>
                    <Span>Resultado:</Span>
                    <Input type="text"  />
                </Inner_section>

            </Section>

        </Container>
    )
}