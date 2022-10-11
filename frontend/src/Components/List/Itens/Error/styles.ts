import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 270px;
    img{
        &:first-child{
            align-self: flex-end;
        }
        &:last-child{
            align-self: flex-start;
        }
    }
    p{
        font-size: 1.5rem;
        color:${porps=>porps.theme.colors.text};
    }
`