import styled, { createGlobalStyle } from "styled-components";

export type TJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

export type TAlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

export interface IFlexBoxProps {
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
  justify?: TJustifyContent;
  align?: TAlignItems;
  width?: string;
  gap?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
  margin?: string;
  padding?: string;
  display?: "flex" | "contents" | "table";
}

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;500&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');




*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Nunito', sans-serif;
}
`;

export const FlexBox = styled.div<IFlexBoxProps>`
  display: ${(props) => (props?.display ? props?.display : "flex")};
  justify-content: ${(props) => props?.justify};
  align-items: ${(props) => props?.align};
  flex-direction: ${(props) => props?.direction};
  width: ${(props) => (props?.width ? props?.width : "100%")};
  gap: ${(props) => (props?.gap ? props?.gap : 0)};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  margin: ${(props) => props?.margin && props?.margin};
  padding: ${(props) => props?.padding && props?.padding}; ;
`;
