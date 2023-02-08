import {
  ButtonFormContainer,
  LoginFormContainer,
  ButtonFormSubmit,
} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormInputs } from './LoginFormInputs'
import { useContextSelector } from 'use-context-selector'
import { AuthContext } from '../../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
const LoginFormSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
})

type LoginFormInputsType = zod.infer<typeof LoginFormSchema>

export function LoginForm() {
  const navigate = useNavigate()
  const handleLogin = useContextSelector(AuthContext, (context) => {
    return context.handleLogin
  })

  const LoginForm = useForm<LoginFormInputsType>({
    resolver: zodResolver(LoginFormSchema),
  })

  const { handleSubmit } = LoginForm

  async function handleLoginSubmit(data: LoginFormInputsType) {
    try {
      await handleLogin(data).then(() => {
        navigate('/consultations')
      })
    } catch (error) {
      console.log(error)
    }
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
