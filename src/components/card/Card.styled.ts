import styled, { css } from "styled-components";
import { SwiperSlide } from "swiper/react";

type PropsType = {
  orientation: "horizontal" | "vertical";
};
export const CardWrapper = styled.div<PropsType>`
  background: #ffffff;
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));
  border-radius: 12px;
  overflow: hidden;

  ${(props) =>
    props.orientation === "vertical" &&
    css`
      width: 224px;
      height: 364px;
    `}
  ${(props) =>
    props.orientation === "horizontal" &&
    css`
      display: flex;
      width: 472px;
      height: 134px;
    `}
  &:hover {
    filter: drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.31));
  }
`;

export const CardSlide = styled(SwiperSlide)<PropsType>`
  background: #e8e8e8;
  ${(props) =>
    props.orientation === "vertical" &&
    css`
      height: 260px;
      width: 100%;
    `}

  ${(props) =>
    props.orientation === "horizontal" &&
    css`
      height: 100%;
      width: 156px;
    `}
`;

export const CardProduct = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 12px 19px;
  gap: 10px;
  ${(props) =>
    props.orientation === "horizontal" &&
    css`
      min-width: 316px;

      & > :nth-child(2) {
        text-align: left;
      }

      & > :last-child {
        padding-top: 30px;
      }
    `}
`;

export const CardCostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 3px;
`;

export const CardPlaceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
