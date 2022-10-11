import styled from 'styled-components';
import DatePicker from 'react-datepicker'
export const Container = styled.div`
    background: ${props=>props.theme.colors.background};
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,.6);
    position: absolute;
    left: 50%;
    top: 50%;
    width:800px;
    height: 60%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%,-50%);
    flex-direction: column;
`;

export const Title = styled.h1`
    color: ${porps=>porps.theme.colors.primary};
    font-size: 3rem;
    
`
export const Form = styled.form`
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Select = styled.select`
    font-size:1.6rem;
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
    margin-bottom: calc(${props=>props.theme.spaces} * 2);
`
export const Picker = styled(DatePicker)`
    font-size:1.6rem;
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
    border:1px solid ${props=>props.theme.colors.primary};
`

export const Button = styled.button`
    border: 2px solid ${props=>props.theme.colors.primary};
    color:${props=>props.theme.colors.primary};
    font-weight: bold;
    background: transparent;
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    margin: 0 1rem;
    margin-top:calc(${props=>props.theme.spaces} * 2); 
    cursor: pointer;
    &:hover{
        background: ${props=>props.theme.colors.primary};
        color:${props=>props.theme.colors.background};
    }
    &.inverse{
        border-color: ${props=>props.theme.colors.primary};
        color:${props=>props.theme.colors.background};
        background-color: ${props=>props.theme.colors.primary};;
        &:hover{
        background: ${props=>props.theme.colors.background};
        color:${props=>props.theme.colors.primary};
        }
    }
`