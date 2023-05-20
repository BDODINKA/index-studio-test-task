import React, { FC } from "react";
import { Pagination } from "swiper";
import { StickViewed } from "../ui/StickViewed/StickViewed";
import { CardSlide, CardSwiperStyled } from "./Card.styled";
import { OrientationType } from "../../core/types/CardType";

export const CardSwiper: FC<{
  isdisabled: boolean;
  orientation: OrientationType;
  seen: boolean;
  img: string[];
}> = ({ isdisabled, orientation, seen, img }) => {
  return (
    <CardSwiperStyled
      pagination={{
        clickable: true,
      }}
      slidesPerGroup={1}
      modules={[Pagination]}
      className="mySwiper"
      $isdisabled={isdisabled}
      orientation={orientation}
    >
      {seen && <StickViewed children={"Просмотрено"} />}
      {img &&
        img.map((el, i) => (
          <CardSlide key={`${el + i}`}>
            <img src={el} alt="some-pictures" />
          </CardSlide>
        ))}
    </CardSwiperStyled>
  );
};
