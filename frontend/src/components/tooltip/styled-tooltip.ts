import styled from "styled-components";

export const TooltipText = styled.div`
  color: #fff;
  text-align: center;
  cursor: pointer;
  position: a;
`;
export const TooltipBox = styled.div`
  position: absolute;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  transition: visibility 0.5s, ease-in-out;
`;
export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    position: absolute;
    margin-left: 10px;
    min-width: 150px;
    color: ${(props) => props?.theme?.textColorWhite};
    background: ${(props) => props?.theme?.textColor};
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    margin-top: -10px;
    border-radius: 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;
