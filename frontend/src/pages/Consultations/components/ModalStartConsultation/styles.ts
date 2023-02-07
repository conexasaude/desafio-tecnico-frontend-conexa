import styled from 'styled-components'
import { CloseButton, Content, Overlay } from '../NewConsultationModal/styles'

export const OverlayStart = styled(Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const ContentStart = styled(Content)``

export const CloseButtonStart = styled(CloseButton)``

export const ContentContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`
