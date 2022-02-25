import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
`

interface FieldProps {
  isWritten: boolean
  border: boolean
  isValid: boolean
}

export const Field = styled.input<FieldProps>`
  width: ${props => props.border ? '370px' : '300px'};
  height: 70px;

  border-radius: ${props => props.border ? '5px 5px 5px 5px' : '5px 0 0 5px'};
  border: 1.5px solid transparent;
  outline: none;

  color: var(--white);
  caret-color: var(--white);
  background: var(--blue-gradient);

  padding-left: 28px;

  transition: border-color 400ms;

  &::placeholder {
    color: var(--blue-text);
  }

  &:-ms-input-placeholder {
    color: var(--blue-text);
  }

  &::-ms-input-placeholder {
   color: var(--blue-text);
  }

  &:not(:focus) {
    ${props => !props.isValid ? 'border-color: var(--red) !important;' : null};
  }

  &:focus {
    ${props => !props.isWritten ? 'border-color: var(--blue-border)' : null};
  }

  &:hover {
    ${props => !props.isWritten ? 'border-color: var(--blue-border)' : null};
  }

  @media (max-width: 500px) {
    width: ${props => props.border ? '280px' : '220px'};
    height: 60px;
  }
`

export const InputButtonWrapper = styled.div`
  position: relative;
`

interface InputButton {
  isWritten: boolean;
}

export const InputButton = styled.input<InputButton>`
  height: 70px;
  width: 70px;

  border-radius: 0 5px 5px 0;
  border: none;

  cursor: pointer;

  background-color: ${props => props.isWritten ? 'var(--green)' : 'var(--blue-dark)'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 400ms;

  @media (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`

export const Image = styled.img`
  width: 24px;
  height: 24px;

  pointer-events: none;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`
