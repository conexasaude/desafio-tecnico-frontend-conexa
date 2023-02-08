import styled from 'styled-components'
import {
  CloseButton,
  Content,
  Overlay,
  ImgContainer,
} from '../NewConsultationModal/styles'

export const OverlayStart = styled(Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const ContentStart = styled(Content)`
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 12px;
  }
`

export const CloseButtonStart = styled(CloseButton)``

export const ImgContainerStart = styled(ImgContainer)``

export const ContentContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`
