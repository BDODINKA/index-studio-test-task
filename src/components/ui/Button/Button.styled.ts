import styled from "styled-components";

type StyledPropsType = {
  width?: string;
  height?: string;
};

export const StyledBtn = styled.button<StyledPropsType>`
  background: #ffffff;
  color: #00a0ab;
  font-size: 14px;
  width: ${(props) => props.width || "125px"};
  height: ${(props) => props.height || "32px"};
  cursor: pointer;
  border: none;
  border-radius: 45px;

  &:hover {
    color: #017f88;
  }
`;
