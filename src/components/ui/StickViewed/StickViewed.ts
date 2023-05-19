import styled from "styled-components";

type StyledPropsType = {};

export const StickViewed = styled.span<StyledPropsType>`
  position: absolute;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #2c2c2c;
  width: 94px;
  height: 24px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 11px);

  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
`;
