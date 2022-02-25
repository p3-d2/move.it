import Image from 'next/image'

import Input from '@components/Input'

import {
  Wrapper,
  Container,
  ImageWrapper,
  Main,
} from './styles'

export default function SignIn() {
  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image
            src="/logo-transparent.svg"
            alt="Move.it"
            width="100%"
            height="70vh"
            layout="responsive"
            priority
          />
        </ImageWrapper>
        <Main>
          <section>
            <Image
              src="/logo.svg"
              alt="Move.it"
              width={299}
              height={114}
            />
          </section>
          <form>
            <Input
              placeholder="Digite seu email"
              validator={
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }
            />

            <Input
              placeholder="Escolha seu username"
              validator={/^.{4,}$/}
              minCharacters={4}
            />

            <Input
              placeholder="Escolha sua senha"
              validator={/^.{6,}$/}
              minCharacters={6}
              link="#"
            />
          </form>
        </Main>
      </Container>
    </Wrapper>
  )
}
