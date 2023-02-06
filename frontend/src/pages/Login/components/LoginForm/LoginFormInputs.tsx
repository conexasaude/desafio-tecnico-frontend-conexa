import { DivFormContainer, InputPasswordContainer } from './styles'
import { EyeSlash } from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function LoginFormInputs() {
  const { register } = useFormContext()

  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  const typePassword = passwordShown ? 'text' : 'password'
  return (
    <>
      <DivFormContainer>
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Digite seu Email"
          {...register('email')}
        />
      </DivFormContainer>
      <DivFormContainer>
        <label>Senha</label>
        <InputPasswordContainer>
          <input
            type={typePassword}
            placeholder="Digite sua Senha"
            {...register('password')}
          />
          <EyeSlash size={21} onClick={togglePasswordVisiblity} />
        </InputPasswordContainer>
      </DivFormContainer>
    </>
  )
}
