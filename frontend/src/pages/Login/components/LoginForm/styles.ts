import styled from 'styled-components'
import { Button } from '../../../../components/Button'

export const LoginFormContainer = styled.form`
  width: 16rem;
  margin-top: 5.625rem;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`
export const DivFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;

  input {
    border: 0;
    border-bottom: 1px solid black;
    width: 100%;

    &::placeholder {
      font-style: italic;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['base-gray-100']};
    }
  }
`

export const InputPasswordContainer = styled.div`
  svg {
    position: absolute;
    margin-left: -20px;
    cursor: pointer;
  }
`

export const ButtonFormContainer = styled.div`
  margin-top: 4.25rem;
  justify-content: center;
`

export const ButtonFormSubmit = styled(Button)`
  width: 100%;
  justify-content: center;
  padding: 0.4rem;
`
