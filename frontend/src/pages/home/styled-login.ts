import styled from "styled-components";

export const ContainerHome = styled.div`
  padding: 89px 29px;
  height: 70vh;

  h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${(props) => props.theme.titleColor};
    margin-bottom: 76px;
  }
  @media (max-width: 1022px) {
    padding: 16px;

    h1 {
      font-size: 28px;
      margin-bottom: 18px;
    }
  }
`;

export const HomeMainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HomeMainDivContainer = styled.div`
  width: 520px;

  h2 {
    font-size: 16px;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 24px;
  }

  p {
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    font-weight: 400;
  }

  span {
    font-size: 12px;
    color: ${(props) => props.theme.textColor};
  }

  button {
    width: 75px;
  }

  @media (max-width: 1022px) {
    h2 {
      margin-bottom: 35px;
    }
  }
`;

export const HomeDivOverflow = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 50vh;
`;

export const HomeFooter = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
  justify-content: space-between;
  width: 95%;

  button {
    width: 154px;
  }

  button:nth-child(1) {
    width: 75px;
  }

  @media (max-width: 1022px) {
    position: absolute;

    right: 0px;
    bottom: 15px;
    width: 100%;
    border-top: 2px solid #dad2d0;
    padding-top: 15px;
    background: #fffffb;

    button {
      margin-left: 5%;
      margin-right: 5%;
    }
  }
`;

export const HomeMainNotConsult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 34px;
  width: 100%;

  h2 {
    font-size: 18px;
    color: ${(props) => props.theme.colorIcon};
    width: 206px;
    line-height: 24px;
    text-align: center;
  }

  @media (max-width: 1022px) {
    div {
      width: 100%;
    }
  }
`;
