import styled, { css } from "styled-components";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { OrientationType } from "../../core/types/CardType";

type PropsType = {
  orientation?: OrientationType;
  $isdisabled: boolean;
};

export const CardWrapper = styled.div<PropsType>`
  background: #ffffff;
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.orientation === "vertical" &&
    css<PropsType>`
      width: 224px;
      height: 364px;
    `}
  ${(props) =>
    props.orientation === "horizontal" &&
    css<PropsType>`
      display: flex;
      max-width: 472px;
      width: 100%;
      height: 134px;
    `}
  &:hover {
    filter: drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.31));
  }
`;

export const CardSwiperStyled = styled(Swiper)<PropsType, SwiperProps>`
  ${(props) =>
    props.orientation === "vertical" &&
    css<PropsType>`
      height: 260px;
      width: 100%;
    `}
  ${(props) =>
    props.orientation === "horizontal" &&
    css<PropsType>`
      height: 100%;
      width: 156px;
    `}
  .swiper-pagination-bullet {
    background: ${(props) => (props.$isdisabled ? "transparent" : "#c7c7c7")};
  }

  .swiper-pagination-bullet-active {
    background: ${(props) => (props.$isdisabled ? "transparent" : "#00a0ab")};
  }

  background: ${(props) => (props.$isdisabled ? "#EAEAEA" : "transparent")};

  ${(props) =>
    props.$isdisabled &&
    css`
      :after {
        content: "";
        position: absolute;
        width: 56px;
        height: 8px;
        left: 50%;
        bottom: 9px;
        transform: translate(-50%, 0);
        background: #f8f8f8;
        border-radius: 3px;
      }
    `}
`;

export const CardSlide = styled(SwiperSlide)`
  background: #e8e8e8;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardProduct = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 12px 19px;
  gap: 10px;
  background: #f8f8f8;
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

      @media (max-width: 768px) {
        min-width: 200px;
        width: 80%;
      }
    `}
`;

export const CardCostContainer = styled.div<PropsType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 3px;

  & h3:after {
    content: " \\20BD";
  }

  ${(props) =>
    props.$isdisabled &&
    css<PropsType>`
      & > h3,
      button {
        position: relative;
        width: ${(props) =>
          props.orientation === "horizontal" ? "256px" : "165px"};
        height: 25px;
        visibility: hidden;
      }

      & h3 {
        :after {
          content: " \\20BD";
        }
      }

      & > button {
        width: 25px;
      }

      :before {
        content: "";
        position: absolute;
        visibility: visible;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #eaeaea;
        border-radius: 8px;
      }
    `}
`;

export const CardNameProductContainer = styled.div<PropsType>`
  ${(props) =>
    props.$isdisabled &&
    css<PropsType>`
      width: 100%;
      height: 100%;
      background: #eaeaea;
      border-radius: 6px;

      ${(props) =>
        props.orientation === "horizontal" &&
        css<PropsType>`
          visibility: hidden;
          position: relative;
          height: 40px;

          & :before {
            content: "";
            position: absolute;
            visibility: visible;
            width: 100%;
            height: 16px;
            top: 0;
            background: #eaeaea;
            border-radius: 8px;
            bottom: 20px;
          }

          & :after {
            content: "";
            position: absolute;
            visibility: visible;
            width: 116px;
            height: 16px;
            top: 24px;
            left: 0;
            bottom: 0;
            background: #eaeaea;
            border-radius: 8px;
          }
        `}
      ${(props) =>
        props.orientation === "vertical" &&
        css<PropsType>`
          height: 16px;
        `}
    `}
}
`;

export const CardPlaceContainer = styled.div<PropsType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.$isdisabled &&
    css<PropsType>`
      width: 200px;
      height: 14px;
      background: #eaeaea;
      border-radius: 6px;
      ${(props) =>
        props.orientation === "horizontal" &&
        css<PropsType>`
          visibility: hidden;
          position: relative;
          width: 100%;

          & :nth-child(1):before {
            content: "";
            position: absolute;
            visibility: visible;
            width: 177px;
            height: 14px;
            left: 0;
            bottom: 0;
            background: #eaeaea;
            border-radius: 8px;
          }

          & :nth-child(1):after {
            content: "";
            position: absolute;
            visibility: visible;
            width: 107px;
            height: 14px;
            right: 0;
            bottom: 0;
            background: #eaeaea;
            border-radius: 8px;
          }
        `}
    `}
`;
