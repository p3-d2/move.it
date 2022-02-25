import { useState } from 'react'
import { InputWrapper, Field, InputButtonWrapper, InputButton, Image } from './styles'

interface InputProps {
  placeholder: string
  minCharacters?: number
  validator: RegExp
  link?: string | null
}

export default function Input({
  validator,
  placeholder,
  minCharacters = 5,
  link = null
}: InputProps) {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  function checkIsValid() {
    if (validator.test(value)) setIsValid(true)
    else setIsValid(false)
  }

  return (
    <InputWrapper>
      <Field
        required
        type="text"
        placeholder={placeholder}
        isValid={isValid}
        border={link ? false : true}
        isWritten={value.length !== 0}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => checkIsValid()}
      />

      {link ? (
        <InputButtonWrapper>
          <InputButton
            type="submit"
            value=""
            isWritten={value.length >= minCharacters}
          />
          <Image
            src="/icons/arrow.svg"
            alt="Arrow right"
          />
        </InputButtonWrapper>
      ) : null}

    </InputWrapper>
  )
}
