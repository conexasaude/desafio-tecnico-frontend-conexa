import styled from "styled-components";

export const ContainerLogin = styled.div`
  padding: 0px 70px 0px 70px;
  display: flex;
  align-items: center;
  height: 92vh;

  @media (max-width: 1022px) {
    flex-direction: column;
    justify-content: center;
    padding: 0px 24px 24px;
  }
`;

export const ContentLeftLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 67px;
  h1 {
    color: ${(props) => props.theme.titleColor};
    font-size: 52px;
  }

  @media (max-width: 1022px) {
    img {
      display: none;
    }

    h1 {
      font-size: 32px;
      text-align: center;
    }
  }
`;

export const ContentRigthLogin = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  form {
    width: 235px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    button {
      margin-top: 32px;
    }
  }

  @media (max-width: 1022px) {
    form {
      width: 100%;
    }
  }
`;
