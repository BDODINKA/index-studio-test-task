import styled from "styled-components";

type StyledPropsType = {
  width?: number;
  height?: number;
};

export const BtnStyled = styled.button<StyledPropsType>`
  background: #ffffff;
  color: #00a0ab;
  font-size: 14px;
  width: ${(props) => (props.width ? `${props.width}px` : "125px")};
  height: ${(props) => (props.height ? `${props.height}px` : "32px")};
  cursor: pointer;
  border: none;
  border-radius: 45px;

  &:hover {
    color: #017f88;
  }
`;
