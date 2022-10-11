import React from 'react';

import { Container } from './styles';

const Error: React.FC = () => {
        return(
        <Container>
            <img src='/vaso.png'/>
            <p>Não há nenhuma<br/> consulta agenda</p>
            <img src='/list.png'/>
        </Container>
    );
}

export default Error;