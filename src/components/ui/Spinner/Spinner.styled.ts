import styled from "styled-components";
import { ReactComponent as SpinnerSVG } from "../../../assets/svg/spinner.svg";

type StyledBtnPropsType = {};

export const Spinner = styled(SpinnerSVG)<StyledBtnPropsType>`
  width: 33px;
  height: 33px;

  & path {
    fill: #abcfd0;
    transform-origin: center;
    animation: spinner 1.2s infinite linear;
  }

  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;
