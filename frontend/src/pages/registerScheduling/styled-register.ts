import styled from "styled-components";

export const ContainerRegisterScheduling = styled.div`
  height: 400px;

  label {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.textColor};
    padding-right: 8px;
  }

  select {
    border: 0;
    border-bottom: 2px solid #dad2d0;
    padding-right: 30px;
    width: 100%;
    padding-bottom: 5px;

    color: ${(props) => props.theme.textColor};
  }

  input {
    border: 0;
    border-bottom: 2px solid #dad2d0;
    width: 100%;
    padding-bottom: 5px;
    color: ${(props) => props.theme.textColor};
  }

  @media (max-width: 1022px) {
    height: 60%;
  }
`;

export const ContentMainRegisterScheduling = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 60px;
  height: 100%;

  div {
    width: 235px;
  }

  @media (max-width: 1022px) {
  }
`;

export const RegisterFooter = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
  border-top: 2px solid #dad2d0;
  padding-top: 15px;
  background: #fffffb;

  button {
    width: 154px;
  }

  button:nth-child(1) {
    width: 75px;
  }

  @media (max-width: 1022px) {
    position: absolute;

    right: 0px;
    bottom: 50px;
    width: 100%;
    border-top: 2px solid #dad2d0;
    padding-top: 20px;
    background: #fffffb;

    button {
      margin-left: 5%;
      margin-right: 5%;
    }
  }
`;
