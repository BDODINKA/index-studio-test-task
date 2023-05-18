import styled, { css } from "styled-components";

type PropsType = {
  isLoading?: boolean;
  error?: boolean;
};

export const PostsStatusBarStyled = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 31px 0 31px;
  ${(props) =>
    props.isLoading &&
    css`
      padding: 77px 0 450px;
    `}
  ${(props) =>
    props.error &&
    css`
      padding: 38px 0 450px;
    `}
`;

export const ErrorStatusBarStyled = styled.p<PropsType>`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14.4px;
  line-height: 17px;
  text-align: center;
  color: #8f8f8f;
`;
