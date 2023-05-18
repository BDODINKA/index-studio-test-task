import styled, { css } from "styled-components";

type PropsType = {
  isdisabled?: boolean;
};

export const ChangeViewBtnStyled = styled.div<PropsType>`
  display: flex;
  gap: 18px;

  ${(props) =>
    props.isdisabled &&
    css`
      background: #eaeaea;
      border-radius: 8px;
      width: 84px;
      height: 39px;
    `};
`;
