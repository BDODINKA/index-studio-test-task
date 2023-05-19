import React, { FC, SyntheticEvent, useEffect, useState } from "react";
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
import { StickViewed } from "../ui/StickViewed/StickViewed";

type CardPropsType = {
  images?: string[];
  cost?: number;
  nameProduct?: string;
  city?: string;
  active?: boolean;
  seen?: boolean;
  time?: string;
  orientation: "horizontal" | "vertical";
  isdisabled?: boolean;
  onClick?: () => void;
  id: string;
};

export const Card: FC<CardPropsType> = ({
  images,
  cost,
  nameProduct,
  city,
  time,
  orientation,
  isdisabled,
  id,
  seen,
}) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const likeId = localStorage.getItem(`like:${id}`);
    if (likeId === id) {
      setLike(true);
    }
  }, []);

  const likeHandler = (event: SyntheticEvent) => {
    event.stopPropagation();
    if (like) {
      localStorage.removeItem(`like:${id}`);
      setLike(false);
    } else {
      localStorage.setItem(`like:${id}`, id);
      setLike(true);
    }
  };
  console.log(seen);
  return (
    <CardWrapper orientation={orientation}>
      {seen && <StickViewed children={"Просмотрено"} />}
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
          <LikeBtn
            Icon={LikeIcon}
            isLiked={like}
            isdisabled={isdisabled}
            onClick={(event) => likeHandler(event)}
          />
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
