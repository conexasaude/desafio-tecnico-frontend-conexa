import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../../../components/Button'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  /* min-width: 32rem; */
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.colors['base-white']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    select {
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors['base-gray-100']};
      background: ${({ theme }) => theme.colors.white};
      padding: 1rem;
    }
    option {
      cursor: pointer;
    }
  }
`

export const NewConsultationFormContainer = styled.form``

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`

export const ButtonModalSubmit = styled(Button)`
  justify-content: center;
`

export const ImgContainer = styled.div`
  margin: 2rem;
  text-align: center;
`
