import styled from "styled-components";

export const ContainerHeader = styled.div`
  background: #fffffb;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  height: 57px;
  padding: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props?.theme?.textColor};
    font-weight: 500;
    font-size: 16px;
  }

  div:nth-child(2) {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1250px) {
    div:nth-child(2) {
      span {
        display: none;
      }
    }
  }
`;
