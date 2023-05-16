import styled from "styled-components";

type PropsType = {
  width?: number;
  height?: number;
  active?: boolean;
};

export const SvgContainer = styled.button<PropsType>`
  height: auto;
  width: auto;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #8f8f8f;

  & svg {
    height: ${(props) => (props.height ? `${props.height}px` : "100%")};
    width: ${(props) => (props.width ? `${props.width}px` : "100%")};

    & rect {
      stroke: ${(props) => (props.active ? "#00A0AB" : "#C7C7C7")};
    }

    &:hover {
      & rect {
        stroke: #a4a4a4;
      }
    }
  }
`;
