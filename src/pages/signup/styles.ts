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
