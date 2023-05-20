import styled, { css } from "styled-components";

type PropsType = {
  width?: number;
  height?: number;
  active?: boolean;
  btntype: "scroll" | "change" | "likeBtn";
};

export const SvgContainer = styled.button<PropsType>`
  height: auto;
  width: auto;
  cursor: pointer;
  border: none;
  color: #8f8f8f;
  background: transparent;

  ${(props) =>
    props.btntype === "scroll" &&
    css<PropsType>`
            background: #FFFFFF;
            box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
            border-radius: 30px;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 17px 19px;

            & svg {
              height: ${(props) =>
                props.height ? `${props.height}px` : "100%"};
              width: ${(props) => (props.width ? `${props.width}px` : "100%")};
          `}
  ${(props) =>
    props.btntype === "change" &&
    css<PropsType>`
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
    `}
  ${(props) =>
    props.btntype === "likeBtn" &&
    css<PropsType>`
      & path {
        fill: ${(props) => (props.active ? "#00A0AB" : "#C7C7C7")};

        &:hover {
          fill: #a4a4a4;
        }
      }
    `};
`;
