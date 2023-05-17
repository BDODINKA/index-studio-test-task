import styled, { css } from "styled-components";

type PropsType = {
  orientation: "horizontal" | "vertical";
};
export const PostsStyled = styled.div<PropsType>`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;

  ${(props) => props.orientation === "horizontal" && css``}
  ${(props) => props.orientation === "vertical" && css``}
`;
