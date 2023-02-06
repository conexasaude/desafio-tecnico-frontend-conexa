import {
  ButtonFormContainer,
  LoginFormContainer,
  ButtonFormSubmit,
} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormInputs } from './LoginFormInputs'

const LoginFormSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
})

type LoginFormInputsType = zod.infer<typeof LoginFormSchema>

export function LoginForm() {
  const LoginForm = useForm<LoginFormInputsType>({
    resolver: zodResolver(LoginFormSchema),
  })

  const { handleSubmit } = LoginForm

  function handleLoginSubmit(data: LoginFormInputsType) {
    console.log(data)
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
