import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: calc(${porps=>porps.theme.spaces} * 3);
    min-height: calc(100vh - 100px);
    position: relative;
`;

export const Title = styled.h1`
    color: ${porps=>porps.theme.colors.primary};
    font-size: 5rem;
    align-self: flex-start;
    justify-self: flex-start;
`

export const Content = styled.div` 
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
