import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 270px;
    flex-direction: column;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 1.8rem;
    max-width:400px;
    width: 90%;
    margin-bottom: calc(${props=>props.theme.spaces} * 2);
`;

export const List = styled.ul`
    list-style: none;
    display:flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width:400px;
    width: 90%;
    li{
        flex:1;
        width: 100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: calc(${props=>props.theme.spaces} * 2);
    }
`

export const Patient = styled.div`
    p{
        font-size:1.4rem;
        strong{
            font-size:1.8rem;
        }
    };
    
`

export const Button = styled.button`
    border: 2px solid ${props=>props.theme.colors.primary};
    font-weight: bold;
    background: transparent;
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    margin: 0 1rem;
    cursor: pointer;
    border-color: ${props=>props.theme.colors.primary};
    color:${props=>props.theme.colors.background};
    background-color: ${props=>props.theme.colors.primary};;
    &:hover{
        background: ${props=>props.theme.colors.background};
        color:${props=>props.theme.colors.primary};
    }
`