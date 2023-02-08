import {
  IllustrationContainer,
  LoginContentContainer,
  LoginPageContainer,
} from './styles'
import illustrationImage from '../../assets/illustration.svg'
import { LoginForm } from './components/LoginForm'

export function LoginPage() {
  return (
    <LoginPageContainer>
      <IllustrationContainer>
        <h1>Faça Login</h1>
        <img src={illustrationImage} alt="" />
      </IllustrationContainer>
      <LoginContentContainer>
        <LoginForm />
      </LoginContentContainer>
    </LoginPageContainer>
  )
}
