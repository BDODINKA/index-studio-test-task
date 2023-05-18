import React, { FC } from "react";
import {
  CardCostContainer,
  CardPlaceContainer,
  CardProduct,
  CardSlide,
  CardWrapper,
} from "./Card.styled";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { TitleStyled } from "../ui/Title/Title.styled";
import { LikeBtn } from "../ui/LikeBtn/LikeBtn";
import { ReactComponent as LikeIcon } from "../../assets/svg/IconLike.svg";
import { SubTitleStyled } from "../ui/SubTitle/SubTitle.styled";

type CardPropsType = {
  images?: string[];
  cost?: number;
  isLiked?: boolean;
  nameProduct?: string;
  city?: string;
  active?: boolean;
  time?: string;
  orientation: "horizontal" | "vertical";
  isdisabled?: boolean;
};

export const Card: FC<CardPropsType> = ({
  images,
  cost,
  isLiked,
  nameProduct,
  city,
  time,
  orientation,
  isdisabled,
}) => {
  console.log(images);
  return (
    <CardWrapper orientation={orientation}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerGroup={1}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images &&
          images.map((el, i) => (
            <CardSlide key={`${el + i}`} orientation={orientation}>
              <img src={el} alt="some-pictures" />
            </CardSlide>
          ))}
      </Swiper>
      <CardProduct orientation={orientation}>
        <CardCostContainer>
          <TitleStyled size={"lg"} children={cost} />
          <LikeBtn Icon={LikeIcon} isLiked={isLiked} isdisabled={isdisabled} />
        </CardCostContainer>
        <TitleStyled size={"sm"} children={nameProduct} />
        <CardPlaceContainer>
          <SubTitleStyled size={"sm"} children={city} />
          <SubTitleStyled size={"sm"} children={time} />
        </CardPlaceContainer>
      </CardProduct>
    </CardWrapper>
  );
};
