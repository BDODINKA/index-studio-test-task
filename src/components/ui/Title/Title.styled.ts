import styled, { css } from "styled-components";

type PropsType = {
  size: "lg" | "md" | "sm";
  color?: string;
};
export const TitleStyled = styled.h3<PropsType>`
  font-family: "Ubuntu", sans-serif;
  color: ${(props) => props.color || "#2C2C2C"};
  ${(props) =>
    props.size === "lg" &&
    css<PropsType>`
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 25px;
    `}
  ${(props) =>
    props.size === "md" &&
    css<PropsType>`
      font-style: normal;
      font-weight: 500;
      font-size: 16.8px;
      line-height: 19px;
      text-align: center;
    `}
  ${(props) =>
    props.size === "sm" &&
    css<PropsType>`
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    `}
`;
