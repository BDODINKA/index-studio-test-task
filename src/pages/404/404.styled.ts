import styled from "styled-components";

export const PageNotFoundStyled = styled.section`
  display: flex;
  max-width: 246px;
  width: 100%;
  flex-direction: column;
  gap: 9px;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:nth-child(2) {
    text-align: center;
  }
`;
