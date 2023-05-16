import styled from "styled-components";
import { ReactComponent as HeartLike } from "../../../assets/svg/IconLike.svg";

type StyledPropsType = {
  active?: boolean;
};

export const LikeBtn = styled(HeartLike)<StyledPropsType>`
  cursor: pointer;

  & path {
    fill: ${(props) => (props.active ? "#00A0AB" : "#C7C7C7")};

    &:hover {
      fill: #a4a4a4;
    }
  }
`;
