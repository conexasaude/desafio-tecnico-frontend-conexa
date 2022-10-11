import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rem;
    @media (max-width: 650px) { 
        margin: 10rem 2rem;
        flex-direction: column;
    }
`;

export const ImageBox = styled.div`
    flex:1;
    justify-content:center ;
    align-items: center;
    display: flex;
    flex-direction: column;
    img{
        width: 380px;
        @media (max-width: 650px) { 
            display: none;
        }
    }
`;

export const Title = styled.h1`
    color:${porps=>porps.theme.colors.primary};
    font-size: 5rem;
`