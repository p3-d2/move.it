import Image from 'next/image'

import Input from '@components/Input'

import {
  Wrapper,
  Container,
  ImageWrapper,
  Main,
  Title,
  Github,
  GithubIcon,
  GithubText
} from '@styles/signin'

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
          <section>
          <Title>Bem-vindo</Title>
          <Github>
            <GithubIcon
              src="/icons/github.svg"
              alt="Github"
              width={35}
              height={35}
            />
            <GithubText>
              Faça login com seu Github
              para começar
            </GithubText>
          </Github>
          <form>
            <Input 
              placeholder="Digite seu username"
              validator={/^.{4,}$/}
              minCharacters={4}
              link="#"
            />
          </form>
          </section>
        </Main>
      </Container>
    </Wrapper>
  )
}
