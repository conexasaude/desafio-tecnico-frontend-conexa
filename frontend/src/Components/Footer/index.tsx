import React from 'react';

import { useModal } from '../../hooks/useModal'
import { Container, Button } from './styles';

const Footer: React.FC = () => {
  const { open } = useModal()
  return (
    <Container>
      <Button>Ajuda</Button>
      <Button className='inverse' onClick={() => { open() }}>Agendar consulta</Button>
    </Container>
  )
}

export default Footer;