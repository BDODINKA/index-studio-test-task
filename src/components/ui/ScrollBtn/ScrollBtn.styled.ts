import styled from "styled-components";

export const ScrollBtnStyled = styled.div`
  position: fixed;
  bottom: 61px;
  padding-right: 25px;
  right: calc((100vw - 1280px) / 2);

  @media (max-width: 1280px) {
    right: calc((100vw - 100%) / 2);
  }
`;
