import styled, { css } from "styled-components";

type PropsType = {
  size: "md" | "sm";
  color?: string;
};

export const SubTitleStyled = styled.p<PropsType>`
  font-family: "Ubuntu", sans-serif;
  color: ${(props) => props.color || "#8F8F8F"};
  font-weight: 400;
  font-style: normal;

  ${(props) =>
    props.size === "md" &&
    css<PropsType>`
      font-size: 14.4px;
      line-height: 17px;
    `}

  ${(props) =>
    props.size === "sm" &&
    css<PropsType>`
      font-size: 12px;
      line-height: 14px;
    `}
`;
