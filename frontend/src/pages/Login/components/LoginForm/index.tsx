import {
  ButtonFormContainer,
  LoginFormContainer,
  ButtonFormSubmit,
} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormInputs } from './LoginFormInputs'
import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'

const LoginFormSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
})

type LoginFormInputsType = zod.infer<typeof LoginFormSchema>

export function LoginForm() {
  const { handleLogin } = useContext(AuthContext)
  const LoginForm = useForm<LoginFormInputsType>({
    resolver: zodResolver(LoginFormSchema),
  })

  const { handleSubmit } = LoginForm

  async function handleLoginSubmit(data: LoginFormInputsType) {
    await handleLogin(data)
  }

  return (
    <FormProvider {...LoginForm}>
      <LoginFormContainer onSubmit={handleSubmit(handleLoginSubmit)}>
        <LoginFormInputs />
        <ButtonFormContainer>
          <ButtonFormSubmit variant="inline" text="Entrar" type="submit" />
        </ButtonFormContainer>
      </LoginFormContainer>
    </FormProvider>
  )
}
