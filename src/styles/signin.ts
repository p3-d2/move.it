import ImageNext from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: var(--blue);
  overflow: hidden;

  display: flex;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  height: 80vh;

  display: grid;
  grid-template-columns: 60% 40%;

  align-content: center;
  align-items: center;

  @media (max-width: 980px) {
    height: 100vh;
    
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-left: -80px;

  @media (max-width: 980px) {
    margin-left: -140px;
    position: absolute;
  }

  @media (max-width: 640px) {
    position: absolute;
    top: 5%;
  }
`

export const Main = styled.main`
  height: 70%;
  width: 100%;

  margin-left: -60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 980px) {
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }
`

export const Title = styled.h1`
  color: var(--white);
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 16px;
`

export const Github = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;
`

export const GithubIcon = styled(ImageNext)``

export const GithubText = styled.span`
  width: 230px;

  color: var(--blue-text);

  font-weight: 500;
  font-size: 16px;

  margin-left: 18px;
`
